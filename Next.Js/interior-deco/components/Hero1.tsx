import React from "react";
import Image from "next/image";

export default function Hero1() {
  return (
    <div className="bg-customGreen1 my-16 h-auto">
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:pr-24 lg:w-1/2 text-center lg:text-left">
          <h1 className="font-extrabold text-xl md:text-2xl lg:text-2xl pb-4">
            Amazing <br /> deals for you
          </h1>
          <p className="text-sm md:text-base lg:text-base">
            Unlock unbeatable savings on exquisite furniture pieces! Explore our
            amazing deals and elevate your space without breaking the bank. Do
            not miss out on the chance to transform your home with affordability
            and style.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="flex mb-4 items-center">
                <Image
                  src="/icons/trusted.svg"
                  alt="trusted icon"
                  width={20}
                  height={20}
                />
                <span className="font-bold pl-4">Trusted</span>
              </div>
              <p className="text-sm md:text-base lg:text-base">
                Each piece is crafted with quality and precision, ensuring
                durability. Experience peace of mind as you furnish your space
                with our trusted design.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex mb-4 items-center">
                <Image
                  src="/icons/warranty.svg"
                  alt="warranty icon"
                  width={20}
                  height={20}
                />
                <span className="font-bold pl-4">Sure warranty</span>
              </div>
              <p className="text-sm md:text-base lg:text-base">
                Your satisfaction is our priority and we stand behind the
                quality of our products. Shop confidently knowing that we have
                got you covered.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="flex mb-4 items-center">
                <Image
                  src="/icons/moneybag.svg"
                  alt="moneybag icon"
                  width={20}
                  height={20}
                />
                <span className="font-bold pl-4">Save cost</span>
              </div>
              <p className="text-sm md:text-base lg:text-base">
                Maximize savings without compromising quality! Explore our cost
                effective furniture solutions designed to elevate your space
                within budget.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex mb-4 items-center">
                <Image
                  src="/icons/bundle.svg"
                  alt="bundle icon"
                  width={20}
                  height={20}
                />
                <span className="font-bold pl-4">Bundle offer</span>
              </div>
              <p className="text-sm md:text-base lg:text-base">
                Elevate your entire space with a curated selection of furniture
                pieces at an unbeatable price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
