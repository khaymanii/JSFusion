import React from "react";
import Image from "next/image";

export default function Results() {
  return (
    <div className="max-w-5xl mx-auto px-4 my-20 flex flex-col md:flex-row items-start">
      <Image
        src="./images/flow.svg"
        alt="flow image"
        width={300}
        height={300}
        className="w-full md:w-1/2 lg:w-1/2 mr-0 md:mr-6 mb-6 md:mb-0"
      />
      <div className="text-center md:text-left pt-2 md:pt-0 lg:pt-2">
        <h1 className="text-white text-xl font-extrabold tracking-wider leading-normal pb-6 md:pb-2 lg:pb-6">
          Simplified Flow,
          <br /> Amazing Results.
        </h1>
        <p className="text-white text-xs tracking-wider leading-relaxed pb-6 md:pb-2 lg:pb-6">
          Designed with user friendliness in mind, the intuitive interface
          allows team members to easily navigate through project tasks,
          timelines and resources.
        </p>
        <Image
          src="./images/dropdown.svg"
          alt="dropdown image"
          width={550}
          height={550}
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
}
