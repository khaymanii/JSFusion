import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto my-16 px-4 flex flex-col lg:flex-row items-center">
      <div className="lg:pr-12 lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="font-extrabold text-xl md:text-2xl lg:text-2xl pb-4">
          About Us
        </h1>
        <p className="text-sm md:text-base lg:text-base pb-4">
          We curate a collection of furniture that embodies timeless elegance
          and functional design. Our mission is to provide high-quality, trusted
          pieces that not only enhance your space but also reflect our unique
          style.
        </p>
        <Button
          radius="full"
          variant="bordered"
          className="font-semibold text-customGreen border-customGreen hover:text-white hover:bg-customGreen"
        >
          Contact us
        </Button>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="mb-8 md:mb-0 md:mr-4 lg:mr-6">
          <Image
            src="/images/aboutimage1.svg"
            alt="aboutimage1"
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-sm lg:max-w-full"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/aboutline.svg"
            alt="aboutline"
            width={2}
            height={330}
            className="h-[300px] w-2"
          />
        </div>
        <div className="md:ml-4 lg:ml-8">
          <Image
            src="/images/teamimage.svg"
            alt="teamimage"
            width={120}
            height={120}
            className="w-48 sm:w-28 md:w-32 lg:w-40"
          />
        </div>
      </div>
    </div>
  );
}
