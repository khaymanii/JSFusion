import React from "react";
import Button from "./Button";

const categories = [
  { name: "Holiday Rentals", padding: "sm:px-16 px-8" },
  { name: "Residential Spaces", padding: "sm:px-10 px-6" },
  { name: "Event Spaces", padding: "sm:px-16 px-8" },
  { name: "Commercial Properties", padding: "sm:px-8 px-4" },
  { name: "More", padding: "sm:px-24 px-12" },
];

function BrowseCategories() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <div className="mx-auto max-w-7xl my-10 px-4">
      <h1 className="sm:text-5xl text-2xl font-bold mb-4 text-center">
        Browse From Top Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:pt-4">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`w-full ${
              index === 3
                ? "lg:col-start-1"
                : index === 4
                ? "lg:col-start-3"
                : ""
            }`}
          >
            <Button
              className={`w-full ${category.padding} py-2 sm:py-4`}
              onClick={handleClick}
            >
              {category.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCategories;
