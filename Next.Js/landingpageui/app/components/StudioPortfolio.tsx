import React from "react";
import Image from "next/image";

function StudioPortfolio() {
  return (
    <div className="mx-auto max-w-7xl mb-16 px-4">
      <div className="mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4">
          Our Study Portfolio
        </h1>
        <p className="text-base md:text-lg">
          Our 2024 Service Incubator Portfolio Companies
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <Image
          src="/folio.svg"
          alt="portfolio image"
          layout="responsive"
          width={1100}
          height={428}
          className="w-full h-auto"
        />
      </div>
      <div className="mt-12 flex items-center justify-center">
        <p className="font-bold underline mr-1">View All Companies</p>
        <span>
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_938_9006)">
              <path
                d="M17.4717 11.5H4.52734M17.4717 11.5L12.3223 6.35065M17.4717 11.5L12.3223 16.6494"
                stroke="#212121"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </g>
            <defs>
              <clipPath id="clip0_938_9006">
                <rect
                  width="15.5355"
                  height="15.5355"
                  fill="white"
                  transform="translate(0.015625 11.5) rotate(-45)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default StudioPortfolio;
