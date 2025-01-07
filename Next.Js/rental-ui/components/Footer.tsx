"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

function Footer() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div className="bg-gray-50 w-full h-auto py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:flex-wrap md:justify-between">
        <div className="mb-8 md:mb-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <p className="text-base pt-4 w-full md:w-60">
            Bahamas first and largest platform designed to create an online
            marketplace exclusively for RENT.
          </p>
        </div>
        <div className="mb-8 md:mb-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <ul className="text-sm flex flex-col gap-4">
            <li className="text-green-500 font-bold text-xl">
              <a href="#">Navigation</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <ul className="text-sm flex flex-col gap-4">
            <li className="text-green-500 font-bold text-xl">
              <a href="#">Featured Locations</a>
            </li>
            <li>
              <a href="#">Kandy</a>
            </li>
            <li>
              <a href="#">Baku</a>
            </li>
            <li>
              <a href="#">Colombo</a>
            </li>
            <li>
              <a href="#">Kalat</a>
            </li>
            <li>
              <a href="#">Masada</a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <ul className="text-sm flex flex-col gap-4">
            <li className="text-green-500 font-bold text-xl">
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto md:max-w-xs">
          <h1 className="text-green-500 font-bold text-xl">
            Subscribe to our Newsletter
          </h1>
          <p className="text-base pt-4">
            Stay updated with the latest listings and rental tips.
          </p>
          <div className="w-full h-16 mt-8 rounded-full bg-transparent border flex items-center px-4 mb-4">
            <input
              type="text"
              placeholder="Email Address"
              className="outline-none focus:ring-0 w-full bg-transparent"
            />
          </div>
          <Button onClick={handleClick} className="w-full py-5 font-bold">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
