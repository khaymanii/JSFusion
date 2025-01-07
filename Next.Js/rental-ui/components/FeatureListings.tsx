import React from "react";
import Card from "./Card";
import Button from "./Button";

interface FeatureButtonProps {
  label: string;
}

// Reusable Button component
const FeatureButton: React.FC<FeatureButtonProps> = ({ label }) => (
  <div className="rounded-full w-full sm:w-40 h-12 mb-4 bg-green-500 hover:bg-green-700 text-white flex items-center justify-center">
    {label}
  </div>
);

function FeatureListings() {
  // Array of button labels
  const buttons = [
    "All Items (512)",
    "Vans & Buses",
    "Vehicles",
    "Meeting Spaces",
    "Cars & SUVs",
    "Sports Venues",
    "Lorries & Trucks",
  ];

  const cardsData = [
    {
      image: "/Card1.jpg",
      price: "$240,000",
      address: "123 Wallaby Avenue, Park Road",
      parking: 2,
      bathroom: 2,
      bedroom: 4,
    },
    {
      image: "/Card2.jpg",
      price: "$320,000",
      address: "456 Elm Street, Lakeview",
      parking: 1,
      bathroom: 3,
      bedroom: 5,
    },
    {
      image: "/Card3.jpg",
      price: "$275,000",
      address: "789 Oak Lane, Riverside",
      parking: 2,
      bathroom: 2,
      bedroom: 3,
    },
    {
      image: "/Card4.jpg",
      price: "$260,000",
      address: "321 Maple Street, Hillside",
      parking: 1,
      bathroom: 2,
      bedroom: 3,
    },
    {
      image: "/Card5.jpg",
      price: "$310,000",
      address: "654 Pine Road, Seaview",
      parking: 2,
      bathroom: 3,
      bedroom: 4,
    },
    {
      image: "/Card6.jpg",
      price: "$290,000",
      address: "987 Birch Lane, Seattle",
      parking: 2,
      bathroom: 2,
      bedroom: 3,
    },
  ];

  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div className="mx-auto max-w-7xl my-10 px-4">
      <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
        Featured Listings
      </h1>
      <div className="flex flex-wrap items-center justify-between mt-4 cursor-pointer">
        {buttons.map((label, index) => (
          <FeatureButton key={index} label={label} />
        ))}
      </div>
      <div className="flex flex-wrap justify-between">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3  p-4">
            <Card
              image={card.image}
              price={card.price}
              address={card.address}
              parking={card.parking}
              bathroom={card.bathroom}
              bedroom={card.bedroom}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-10">
        <Button className="w-full sm:w-auto px-8" onClick={handleClick}>
          Load More
        </Button>
      </div>
    </div>
  );
}

export default FeatureListings;
