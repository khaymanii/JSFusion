import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

export default function Card() {
  return (
    <div className="mt-16 max-w-5xl mx-auto px-4">
      <div>
        <h1
          className="text-xl sm:text-2xl lg:text-2xl font-bold mb-6 text-center
        "
        >
          Unique Software Solutions for <br /> Your Businesses
        </h1>
        <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div className="lg:w-1/3 w-full h-auto rounded-xl border shadow p-4">
            <div className="w-14 h-14  rounded-full bg-[#00C6C31A] flex items-center justify-center mb-10">
              <Image
                src="/icons/solutions.svg"
                alt="card2 image"
                width={40}
                height={40}
              />
            </div>
            <h1 className="text-xl font-bold mb-2">ERM Solutions</h1>
            <p className="text-sm  mb-4">
              Streamline patient care with our advanced electronic medical
              records system
            </p>
          </div>
          <div className="lg:w-1/3 w-full h-auto rounded-xl border shadow p-4">
            <div className="w-14 h-14  rounded-full bg-[#00C6C31A] flex items-center justify-center mb-10">
              <Image
                src="/icons/finance.svg"
                alt="card2 image"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-xl font-bold mb-2">Financial Management</h1>
            <p className="text-sm mb-4">
              Optimize your financial processes with our software, designed for
              accuracy and efficiency in all aspects of finance
            </p>
          </div>{" "}
          <div className="lg:w-1/3 w-full h-auto rounded-xl border shadow p-4">
            <div className="w-14 h-14  rounded-full bg-[#00C6C31A] flex items-center justify-center mb-10">
              <Image
                src="/icons/erp.svg"
                alt="card2 image"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-xl font-bold mb-2">ERM Systems</h1>
            <p className="text-sm mb-4">
              Centralize and simplify your business operations with our
              integrated ERP solutions
            </p>
          </div>
        </div>
        <div className="w-full flex  flex-col sm:flex-row justify-between gap-4">
          <div className="lg:w-1/3 w-full h-auto rounded-xl border shadow p-4">
            <div className="w-14 h-14  rounded-full bg-[#00C6C31A] flex items-center justify-center mb-10">
              <Image
                src="/icons/school.svg"
                alt="card2 image"
                width={40}
                height={40}
              />
            </div>
            <h1 className="text-xl font-bold mb-2">School Management</h1>
            <p className="text-sm mb-4">
              Enhance educational administration with our comprehensive school
              management tools
            </p>
          </div>
          <div className="lg:w-1/3 w-full h-auto rounded-xl border shadow p-4">
            <div className="w-14 h-14  rounded-full bg-[#00C6C31A] flex items-center justify-center mb-10">
              <Image
                src="/icons/ecommerce.svg"
                alt="card2 image"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-xl font-bold mb-2">E-commerce</h1>
            <p className="text-sm mb-4">
              Drive online sales and improve customer experience with our
              tailored e-commerce solutions
            </p>
          </div>{" "}
          <div className="lg:w-1/3 w-full h-auto rounded-xl border shadow p-4">
            <div className="w-14 h-14  rounded-full bg-[#00C6C31A] flex items-center justify-center mb-10">
              <Image
                src="/icons/ebook.svg"
                alt="card2 image"
                width={40}
                height={40}
              />
            </div>
            <h1 className="text-xl font-bold mb-2">E-book Services</h1>
            <p className="text-sm mb-4">
              Expand your digital content offerings with our platform, making
              e-books more accessible and engaging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
