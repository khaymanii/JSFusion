import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setItemInput(e.target.value);
  };

  const addItem = () => {
    const itemName = itemInput.trim().toLowerCase();
    if (itemName === "apple" || itemName === "orange") {
      setCart([...cart, itemName]);
      setItemInput("");
    } else {
      alert('Invalid item! Please enter "Apple" or "Orange".');
    }
  };

  const calculateTotal = () => {
    let totalCost = 0;
    let appleCount = 0;
    let orangeCount = 0;

    cart.forEach((item) => {
      if (item === "apple") {
        appleCount++;
      } else if (item === "orange") {
        orangeCount++;
      }
    });

    totalCost += Math.ceil(appleCount / 2) * 0.6;
    totalCost +=
      Math.floor(orangeCount / 3) * 0.5 * 3 + (orangeCount % 3) * 0.25;

    setTotal(totalCost.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Checkout System</h1>
      <div className="items">
        <label htmlFor="item">Add Item:</label>
        <input
          type="text"
          id="item"
          value={itemInput}
          onChange={handleInputChange}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={calculateTotal}>Calculate Total</button>
      </div>
      <p>Total: ${total}</p>
    </div>
  );
}

export default App;
