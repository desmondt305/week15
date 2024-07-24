import React, { useState } from "react";
//Function that takes addfood as a prop.//
const AddFoodForm = ({ addFood }) => {
  const initialFormState = { foodName: "", quantity: "" };
  const [food, setFood] = useState(initialFormState);
  //Handles imnput changes and updates the state.//
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFood({ ...food, [name]: value });
  };
  //Handles form submission//
  const handleSubmit = (event) => {
    event.preventDefault();
    //Prevents from submitting if a field is empty.//
    if (!food.foodName || !food.quantity) return;
    addFood(food);
    setFood(initialFormState);
  };
  //onSumbit is a event handler.//
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
