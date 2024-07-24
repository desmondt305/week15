import React, { useState } from "react";

const AddFoodForm = ({ addFood }) => {
  const initialFormState = { foodName: "", quantity: "" };
  const [food, setFood] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFood({ ...food, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!food.foodName || !food.quantity) return;
    addFood(food);
    setFood(initialFormState);
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
      <button>Add new food</button>
    </form>
  );
};

export default AddFoodForm;
