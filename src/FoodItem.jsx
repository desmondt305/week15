import React from "react";

const FoodItem = ({ food, deleteFood, editFood }) => {
  // Creates the image URL based on the food name
  const imageUrl = `https://loremflickr.com/320/240/${food.foodName}`;

  return (
    <div className="food-item">
      //Shows the food image//
      <img src={imageUrl} alt={food.foodName} />
      <div>
        <h3>{food.foodName}</h3>
        <p>Quantity: {food.quantity}</p>
        //Button used to edit and delete the food when clicked.//
        <button onClick={() => editFood(food)}>Edit</button>
        <button onClick={() => deleteFood(food.id)}>Delete</button>
      </div>
    </div>
  );
};

export default FoodItem;
