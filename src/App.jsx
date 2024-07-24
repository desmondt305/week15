import React from "react";
import FoodList from "./FoodList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Favorite Foods</h1>
      </header>
      <main>
        <FoodList />
      </main>
    </div>
  );
}

export default App;
