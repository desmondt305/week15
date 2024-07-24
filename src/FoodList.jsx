import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodItem from "./FoodItem";
import AddFoodForm from "./AddFoodForm";
import EditFoodForm from "./EditFoodForm";

const FoodList = () => {
  //List of  all of the food data//
  const [foodData, setFoodData] = useState([]);
  const [editing, setEditing] = useState(false);
  //Intial form state for adding and editing//
  const initialFormState = { id: null, foodName: "", quantity: "" };
  const [currentFood, setCurrentFood] = useState(initialFormState);
  //Used to fetch the food data//
  useEffect(() => {
    fetchFoodData();
  }, []);
  //Get the data from the api.//
  const fetchFoodData = async () => {
    try {
      const response = await axios.get(
        "https://668ec5bbbf9912d4c92fab6b.mockapi.io/food-api/food"
      );
      setFoodData(response.data);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };
  //Add a new food//
  const addFood = async (food) => {
    try {
      await axios.post(
        "https://668ec5bbbf9912d4c92fab6b.mockapi.io/food-api/food",
        food
      );
      fetchFoodData();
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };

  const deleteFood = async (id) => {
    try {
      await axios.delete(
        `https://668ec5bbbf9912d4c92fab6b.mockapi.io/food-api/food/${id}`
      );
      fetchFoodData();
    } catch (error) {
      console.error("Error deleting food:", error);
    }
  };

  const editFood = (food) => {
    setEditing(true);
    setCurrentFood({
      id: food.id,
      foodName: food.foodName,
      quantity: food.quantity,
    });
  };
  //Function used to update food.//
  const updateFood = async (id, updatedFood) => {
    setEditing(false);
    try {
      await axios.put(
        `https://668ec5bbbf9912d4c92fab6b.mockapi.io/food-api/food/${id}`,
        updatedFood
      );
      fetchFoodData();
      setCurrentFood(initialFormState);
    } catch (error) {
      console.error("Error updating food:", error);
    }
  };

  return (
    <div>
      <h1>Food List</h1>
      <div>
        {editing ? (
          <div>
            <h2>Edit Food</h2>
            <EditFoodForm
              currentFood={currentFood}
              updateFood={updateFood}
              setEditing={setEditing}
            />
          </div>
        ) : (
          <div>
            <h2>Add Food</h2>
            <AddFoodForm addFood={addFood} />
          </div>
        )}
      </div>
      <div>
        <h2>View Food</h2>
        {foodData.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            deleteFood={deleteFood}
            editFood={editFood}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
