import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

export default function Banner() {
  return (
    <div className="mt-16 bg-[#00C6C31A] h-auto w-full py-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-2">
            Experience Advanced EMR <br /> Through Our Lens
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-4">
            Get a closer look at how our EMR solution transforms patient care
            and streamlines medical workflows in real-time for better healthcare
            outcomes.
          </p>
          <Button
            as={Link}
            href="#"
            size="lg"
            className="bg-[#070527] text-sm sm:text-base md:text-lg text-white px-6 sm:px-8 md:px-10 rounded-sm mt-6 font-semibold"
          >
            Learn More
          </Button>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <Image
            src="/images/banner.svg"
            alt="banner image"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
