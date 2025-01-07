import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

export default function Hero2() {
  return (
    <div className="mt-28 max-w-5xl mx-auto px-4 flex flex-col-reverse lg:flex-row  justify-between">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-2">
          Transform Your Healthcare Experience with Our Smart EMR Solutions
        </h1>
        <p className="mb-4 text-sm sm:text-base">
          Have full control of your hospital and manage all your patients and
          staff records and activities with our Electronic Management System
          (EMR)
        </p>
        <div className="flex items-start mb-3">
          <Image
            src="/icons/good.svg"
            alt="good image"
            width={20}
            height={20}
          />
          <p className="ml-2 text-sm sm:text-base">
            Enhance data accuracy and improve clinical outcomes with our
            advanced EMR software
          </p>
        </div>
        <div className="flex items-start">
          <Image
            src="/icons/good.svg"
            alt="good image"
            width={20}
            height={20}
          />
          <p className="ml-2 text-sm sm:text-base">
            Experience real-time updates, and comprehensive patient management
            all in one platform
          </p>
        </div>
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
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end -mt-28">
        <Image
          src="/images/hero1.svg"
          alt="chart1"
          width={1200}
          height={1200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
