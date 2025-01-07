import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function OurWork() {
  return (
    <div className="bg-customGreen1 my-16 h-auto">
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            src="/images/ourworkimage.svg"
            alt="hero image"
            width={1000}
            height={1000}
            className="max-w-full h-auto"
          />
        </div>
        <div className="lg:pr-12 lg:w-1/2 text-center lg:text-left">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-extrabold pb-4">
            Our Work
          </h1>
          <p className="text-sm md:text-base lg:text-base pb-4">
            We specialize in crafting modern and minimalist furniture pieces
            that redefine spaces with elegance and functionality. Our team of
            dedicated designers, craftsmen, and customer service experts are
            committed to delivering exceptional quality and service every step
            of the way.
          </p>
          <div className="pb-4">
            <span className="pr-4">
              <Button
                radius="full"
                className="font-semibold text-white bg-customGreen hover:bg-transparent hover:text-customGreen hover:border-2 hover:border-customGreen px-6"
              >
                Shop more
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
