import React from "react";
import Image from "next/image";
import Travel1 from "@/public/Travel1.jpg";
import Travel2 from "@/public/Travel2.jpg";
import Travel3 from "@/public/Travel3.jpg";
import Travel4 from "@/public/Travel4.jpg";

function FeatureLocations() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-8">
      <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
        Featured Locations
      </h1>
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-5 sm:gap-10">
        <div className="relative w-full h-[300px] sm:w-[400px] sm:h-auto sm:flex-1">
          <Image
            src={Travel1}
            alt="Travel1 photo"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-5 w-full sm:w-auto sm:flex-1">
          <div className="relative w-full h-[300px] sm:h-[300px]">
            <Image
              src={Travel2}
              alt="Travel2 photo"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-xl"
            />
          </div>
          <div className="relative w-full h-[300px] sm:h-[300px]">
            <Image
              src={Travel3}
              alt="Travel3 photo"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="relative w-full h-[300px] sm:w-[400px] sm:h-auto sm:flex-1">
          <Image
            src={Travel4}
            alt="Travel4 photo"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureLocations;
