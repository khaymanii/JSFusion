import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto py-4">
          <div className="flex items-center">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="md:mr-2 mr-2"
            />
            <div className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-5xl text-blue-800">
              Unlimi<span className="text-red-400">.</span>
            </div>
          </div>
          <div className="flex items-center rounded-lg py-2 w-full md:w-auto md:ml-6 lg:ml-28 mt-4 md:mt-0 px-4 border">
            <Image
              src="/assets/search.svg"
              alt="search image"
              width={16}
              height={16}
            />
            <input
              type="text"
              placeholder="Search by patients..."
              className="pl-4 outline-none w-full text-sm md:text-base"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mt-4 md:mt-0">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full border border-gray-100 bg-gray-100">
            <Image
              src="/assets/bell.svg"
              alt="bell icon"
              width={16}
              height={16}
              className="md:w-6 md:h-6"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/assets/doctor.svg"
              alt="doctor image"
              height={30}
              width={30}
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 bg-gray-100"
            />
          </div>
          <h1 className="font-medium text-xs sm:text-sm md:text-base">Deko</h1>
          <Image
            src="/assets/downarrow.svg"
            alt="arrow"
            width={10}
            height={10}
            className="md:w-6 md:h-6"
          />
        </div>
      </div>
    </div>
  );
}
