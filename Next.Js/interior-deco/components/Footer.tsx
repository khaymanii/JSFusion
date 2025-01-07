"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

function Footer() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div className="bg-customGreen w-full h-auto py-6 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:flex-wrap md:justify-between mb-8">
        <div className="mb-8 md:mb-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <Image src="./images/logo1.svg" alt="logo" width={150} height={150} />
        </div>
        <div className="mb-8 md:mb-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <ul className="text-sm flex flex-col gap-4 text-white">
            <li className="font-semibold text-xl">
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Catalogue</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <ul className="text-sm flex flex-col gap-4 text-white">
            <li className="font-semibold text-xl">
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Chairs</a>
            </li>
            <li>
              <a href="#">Sets</a>
            </li>
            <li>
              <a href="#">Bundles</a>
            </li>
            <li>
              <a href="#">Tables</a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <ul className="text-sm flex flex-col gap-4 text-white">
            <li className="font-semibold text-xl">
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto md:max-w-xs text-white">
          <h1 className="font-semibold text-xl">Newsletters</h1>
          <p className="text-base pt-4">
            Receive weekly newsletters from us, updating you about newest
            products and changes.
          </p>
          <div className="w-full h-12 mt-4 rounded-xl bg-white border flex items-center pl-2 pr-1 mb-4">
            <input
              type="text"
              placeholder="Enter email address"
              className="outline-none focus:ring-0 w-full text-sm"
            />
            <Button className="bg-customGreen text-white" size="md">
              Send mail
              <span>
                <Image
                  src="./icons/send.svg"
                  alt="send icon"
                  width={80}
                  height={80}
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center justify-around sm:flex-row mt-8">
        <p className="text-sm text-white mb-4">
          DwellInteriors2024. All rights reserved
        </p>
        <div>
          <Image
            src="./icons/media.svg"
            alt="social media icon"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
