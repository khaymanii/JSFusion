"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

function Hero() {
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <div className="max-w-[1440px] h-auto bg-white mx-auto mb-8 sm:mb-12 lg:mb-16 pl-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[490px] lg:pl-[20px] xl:pl-[100px] pt-8 lg:pt-[60px]">
          <h1 className="text-2xl lg:text-2xl sm:text-3xl  font-bold pb-4 sm:pb-6">
            SINC Partners is a service incubation company
          </h1>
          <p className="pb-4 sm:pb-6 lg:text-lg">
            Connecting experts in product development and growth marketing
            willing to offer their services to amazing startups in exchange for
            minute equity (usually 0.5% to 2%).
          </p>
          <Button
            className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 mb-6 text-sm sm:text-base"
            onClick={handleClick}
          >
            SINC With Us
          </Button>
        </div>
        <div className="w-full md:block hidden lg:w-auto mt-8 lg:mt-0">
          <Image
            src="/hero.svg"
            alt="hero image"
            width={700}
            height={500}
            layout="responsive"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
