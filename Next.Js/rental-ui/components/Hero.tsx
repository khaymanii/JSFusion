import React from "react";
import Image from "next/image";
import heroBg from "../public/hero.jpg";
import Button from "./Button";

function Hero() {
  function handleClick() {
    console.log("Function not implemented.");
  }

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="mx-auto max-w-3xl text-center p-6 rounded-lg -mt-36">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Discover Your{" "}
            <span className="font-extrabold text-green-500">
              Perfect Rental
            </span>
          </h1>
          <p className="mt-4 font-medium sm:text-xl/relaxed text-white">
            Rent Cars, Houses, and Items in Just a Few Clicks
          </p>
          <div className="mt-8 sm:pt-4 flex flex-col sm:flex-row items-center justify-center">
            <Button
              className="w-full sm:w-auto px-8 mb-4 sm:mb-0 sm:mr-4"
              onClick={handleClick}
            >
              Places
            </Button>
            <Button
              className="w-full sm:w-auto px-8 mb-4 sm:mb-0 sm:mr-4"
              onClick={handleClick}
            >
              Houses
            </Button>
            <Button className="w-full sm:w-auto px-8" onClick={handleClick}>
              Things
            </Button>
          </div>
          <div className="w-full h-16 mt-8 rounded-full bg-white border-none flex items-center">
            <div className="flex items-center mx-4 space-x-2 w-full">
              <Image
                src="search.svg"
                alt="search"
                width={25}
                height={25}
                className=""
              />
              <input
                type="text"
                placeholder="Search for cars, houses and more..."
                className="outline-none focus:ring-0 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
