import React from "react";
import "./App.css";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella, basil",
    price: "$9.99",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Tomato sauce, mozzarella, pepperoni",
    price: "$10.99",
  },
  {
    id: 3,
    name: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, basil, olive oil",
    price: "$8.99",
  },
  {
    id: 4,
    name: "Spaghetti Carbonara",
    description: "Pasta, bacon, eggs, Parmesan cheese",
    price: "$12.99",
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Coffee-soaked ladyfingers, mascarpone, cocoa",
    price: "$6.99",
  },
];

const App = () => {
  return (
    <div className="container">
      <h1>Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
