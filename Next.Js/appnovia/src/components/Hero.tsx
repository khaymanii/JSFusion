import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

export default function Hero() {
  return (
    <div className="relative h-[750px] w-full">
      {/* Background Image */}
      <div>
        <Image
          src="/images/hero.svg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="-z-10"
        />
      </div>

      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020024] via-transparent to-[#020024] opacity-80 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-start items-start h-full text-white max-w-5xl mx-auto px-5 sm:pt-28 pt-12">
        <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold w-full md:w-3/4 lg:w-1/2 leading-relaxed tracking-wider">
          Empower Your Business With Our{" "}
          <span className="text-[#00C6C3]">Software</span> Solutions
        </h1>
        <p className="mt-2 text-lg sm:text-xl w-full md:text-xl md:w-3/4 lg:w-1/2">
          Simplify your operations with custom software designed to solve your
          unique business challenges
        </p>
        <Button
          as={Link}
          href="#"
          size="lg"
          className="bg-[#00C6C3] text-sm text-[#070527] px-8 sm:px-10 md:px-12 rounded-sm mt-8 font-semibold"
        >
          Learn More
        </Button>
      </div>

      {/* Bottom Overlay with Text */}
      <div className="absolute bottom-0 w-full h-auto bg-[#525165] py-8 sm:py-10 md:py-12 bg-opacity-60">
        <h1 className="text-center text-white pb-2 sm:pb-3 md:pb-4 tracking-wider text-sm sm:text-lg md:text-xl">
          Trusted by <span className="text-[#00C6C3]">50+</span> Partners &
          Customers
        </h1>
        <div className="max-w-5xl mx-auto flex items-center justify-center px-4">
          <Image
            src="/images/comp.svg"
            alt="comp img"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
