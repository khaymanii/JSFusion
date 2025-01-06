// import { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-customPurple"
              title="Home"
            >
              <span className="text-3xl font-semibold text-gray-800">JsF</span>
            </a>
          </div>

          {/* GitHub Icon */}
          <div className="flex items-center">
            <a
              href="https://github.com/khaymanii/jsfusion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-customPurple"
              title="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <span className="font-medium text-md ml-2">3 ⭐</span>
          </div>

          {/* Hamburger Menu (optional, if you want to toggle mobile menu later) */}
          {/*  <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-customPurple focus:outline-none"
              title="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>*/}
        </div>
      </div>
    </nav>
  );
}

export default Header;
