import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto h-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-56">
          {" "}
          <div>
            <Image src="/images/logo.svg" alt="logo" width={70} height={70} />
          </div>
          <div className="w-52 h-8 rounded-full bg-gray-700 flex items-center px-4 gap-1">
            <Image
              src="/icons/search.svg"
              alt="searchlogo"
              width={20}
              height={20}
            />
            <p className="text-xs text-gray-400">Search</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ">
            <Image
              src="/icons/profile.svg"
              alt="wallet icon"
              width={18}
              height={18}
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ">
            <Image
              src="/icons/notifications.svg"
              alt="wallet icon"
              width={18}
              height={18}
            />
          </div>
          <button className="w-auto h-auto px-4 py-2 text-white text-sm bg-green-600 rounded-full">
            Add Funds
          </button>
        </div>
      </div>
    </div>
  );
}
