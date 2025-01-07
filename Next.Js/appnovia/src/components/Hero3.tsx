import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

export default function Hero3() {
  return (
    <div className="mt-28 max-w-5xl mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse  justify-between">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-2">
          Intuitive technology to navigate financial complexity with ease{" "}
        </h1>
        <p className="mb-4 text-sm sm:text-base">
          Leverage advanced analytics and real-time data to make informed
          financial decisions and drive business growth. Our software simplifies
          budgeting, forecasting, and reporting, making financial management
          straightforward and reliable.
        </p>

        <Button
          as={Link}
          href="#"
          size="lg"
          className="bg-[#070527] text-sm sm:text-base text-white px-6 sm:px-8 md:px-10 rounded-sm mt-6 font-semibold"
        >
          Learn More
        </Button>
      </div>

      {/* Image Content */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center -mt-28">
        <Image
          src="/images/hero2.svg"
          alt="chart1"
          width={1200}
          height={1200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
