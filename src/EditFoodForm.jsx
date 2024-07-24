import React, { useState, useEffect } from "react";

const EditFoodForm = ({ currentFood, updateFood, setEditing }) => {
  const [food, setFood] = useState(currentFood);

  useEffect(() => {
    setFood(currentFood);
  }, [currentFood]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFood({ ...food, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!food.foodName || !food.quantity) return;
    updateFood(food.id, food);
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Food Name:</label>
      <input
        type="text"
        name="foodName"
        value={food.foodName}
        onChange={handleInputChange}
      />
      <label>Quantity:</label>
      <input
        type="text"
        name="quantity"
        value={food.quantity}
        onChange={handleInputChange}
      />
      <button>Update food</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditFoodForm;
