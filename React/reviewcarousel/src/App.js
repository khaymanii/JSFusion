import React, { useState } from "react";
import "./App.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    job: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac elit vel nisi laoreet posuere.",
  },
  {
    id: 2,
    name: "Jane Doe",
    job: "Designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Suspendisse vehicula neque non velit pharetra, non vestibulum ex aliquam. In ultricies mauris sit amet elit congue, in malesuada libero auctor.",
  },
];

const App = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="review">
        <img
          src={reviews[index].image}
          alt={reviews[index].name}
          className="img"
        />
        <h2>{reviews[index].name}</h2>
        <h3>{reviews[index].job}</h3>
        <p>{reviews[index].text}</p>
      </div>
      <div className="buttons">
        <button className="btn" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
