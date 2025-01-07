import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="mt-16">
      <div>
        {" "}
        <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-4 text-center">
          What Our Users Say About Us{" "}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-4 text-center">
          These testimonials showcase Deximpli{`'`}s dedication to driving
        </p>
      </div>{" "}
      <Image
        src="/images/testimonial.svg"
        alt="testimonial image"
        width={1900}
        height={1900}
      />
    </div>
  );
}
