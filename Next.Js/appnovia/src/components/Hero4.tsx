import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

export default function Hero4() {
  return (
    <div className="mt-20 max-w-5xl mx-auto px-4 flex flex-col-reverse lg:flex-row  justify-between">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 mt-2 lg:mt-0">
        <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-2">
          Enhance your operations and drive efficiency with our integrated ERP{" "}
        </h1>
        <p className="mb-4 text-sm sm:text-base">
          From finance and HR to supply chain management and CRM, our ERP
          systems integrate seamlessly across departments, providing real-time
          insights and facilitating informed decision-making.
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
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end -mt-28">
        <Image
          src="/images/hero3.svg"
          alt="chart1"
          width={1200}
          height={1200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
