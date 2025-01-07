/* eslint-disable react/no-string-refs */
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col">
      {" "}
      <div className="mb-8 flex items-center justify-center">
        <Image src="./images/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <hr className="border-t border-white w-full pb-8" />
    </div>
  );
}
