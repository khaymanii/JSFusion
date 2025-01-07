import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="max-w-5xl mx-auto my-16 px-4 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:pr-12 lg:w-1/2 text-center lg:text-left">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-extrabold pb-2">
          We help you make minimalist and modern interior decisions
        </h1>
        <p className="text-sm md:text-base lg:text-base pb-4">
          Experience modern elegance and minimalist charm with our curated
          furniture selection. Elevate your space with sleek designs and clean
          lines. Discover timeless pieces that speak volumes in understated
          sophistication.
        </p>
        <div className="pb-4">
          <span className="pr-4">
            <Button
              radius="full"
              className="font-semibold text-white bg-customGreen hover:bg-transparent hover:text-customGreen hover:border-2 hover:border-customGreen px-6"
            >
              Shop now
            </Button>
          </span>
          <span>
            <Button
              radius="full"
              variant="bordered"
              className="font-semibold text-customGreen border-customGreen hover:text-white hover:bg-customGreen"
            >
              Explore now
            </Button>
          </span>
        </div>

        <div className="flex gap-4 justify-center lg:justify-start">
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-lg">5+</span>{" "}
            <span className="text-sm">experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-lg">2M</span>{" "}
            <span className="text-sm">customers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-lg">50K+</span>{" "}
            <span className="text-sm">projects</span>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
        <Image
          src="/images/heroimage.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
