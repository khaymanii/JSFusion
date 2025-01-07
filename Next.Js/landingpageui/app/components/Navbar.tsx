import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick() {
    console.log("Function not implemented.");
  }

  return (
    <nav className="z-20 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 bg-gray-100 sticky top-0 py-2">
      <div className="flex flex-wrap h-auto sm:h-16 items-center justify-between px-4 sm:px-2 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-4 pr-4 md:pr-8">
          <a className="block" href="#">
            <span className="sr-only">Home</span>
            <Image src="/logo.svg" alt="logo" width={60} height={60} priority />
          </a>
        </div>

        {/* Desktop and Tablet Navigation Links */}
        <div className="hidden sm:flex items-center text-left flex-grow gap-2 md:gap-6 text-xs md:text-sm">
          <ul className="flex items-center flex-grow text-left gap-2 md:gap-6 text-xs md:text-sm">
            <li>
              <a href="#"> About </a>
            </li>
            <li>
              <a href="#"> SIP </a>
            </li>
            <li>
              <a href="#"> Studio</a>
            </li>
            <li>
              <a href="#"> SEEQ </a>
            </li>
            <li>
              <a href="#"> Platforms </a>
            </li>
            <li>
              <a href="#"> Initiatives </a>
            </li>
            <li>
              <a href="#"> More </a>
            </li>
          </ul>
        </div>

        {/* Other Links and Button */}
        <div className="hidden sm:flex items-center gap-2 md:gap-4 mt-2 sm:mt-0">
          <Button
            className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm bg-cyan-700 hover:bg-black whitespace-nowrap"
            onClick={handleClick}
          >
            SINC With Us
          </Button>
          <Button
            className="px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm whitespace-nowrap"
            onClick={handleClick}
          >
            Apply to SIP 1.0
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block text-black p-2 transition hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {mobileMenuOpen && (
          <div className="sm:hidden w-full mt-2 shadow-lg rounded-lg py-4 px-4 text-sm bg-gray-200">
            <ul className="flex flex-col items-center gap-4 py-2 border-b-2">
              <li>
                <a href="#"> About </a>
              </li>
              <li>
                <a href="#"> SIP </a>
              </li>
              <li>
                <a href="#"> Studio </a>
              </li>
              <li>
                <a href="#"> SEEQ </a>
              </li>
              <li>
                <a href="#"> Platforms </a>
              </li>
              <li>
                <a href="#"> Initiatives </a>
              </li>
              <li>
                <a href="#"> More </a>
              </li>
            </ul>
            <div className="flex flex-col items-center mt-4">
              <div className="mt-2">
                <Button className="px-6 py-3 bg-cyan-700" onClick={handleClick}>
                  SINC With Us
                </Button>
              </div>
              <div className="mt-2">
                <Button className="px-6 py-3" onClick={handleClick}>
                  Apply to SIP 1.0
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
