import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function HeaderTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper hover:bg-pink-500 hover:text-white">
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrapper hover:bg-pink-500 hover:text-white">
              <BsTwitter />
            </div>{" "}
            <div className="header_top_icon_wrapper hover:bg-pink-500 hover:text-white">
              <BsInstagram />
            </div>{" "}
            <div className="header_top_icon_wrapper hover:bg-pink-500 hover:text-white">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <strong>FREE SHIPPING </strong>
            THIS WEEK ORDER OVER - $55
          </div>
          <div className="flex gap-4">
            <select
              title="currency"
              id="currency"
              className="text-gray-500 text-[12px] w-[70px]"
            >
              <option value="USD $">USD $</option>
              <option value="EUR $">EUR $</option>
            </select>
            <select
              title="language"
              id="language"
              className="text-gray-500 text-[12px] w-[80px]"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
