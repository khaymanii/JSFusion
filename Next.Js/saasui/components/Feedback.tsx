import Image from "next/image";
import React from "react";
import { Button, Link } from "@nextui-org/react";

export default function Feedback() {
  return (
    <div className="max-w-5xl mx-auto px-4 my-20">
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-white font-extrabold tracking-wider pb-4 text-center">
          What the public is saying
        </h1>
        <p className="text-xs text-white text-center tracking-wider w-full md:w-[700px] pb-8">
          We are confident that Sync will revolutionize the way your team
          handles project management, driving greater success and innovation.
        </p>
        <Image
          src="./images/feedback.svg"
          alt="feedback image"
          width={800}
          height={800}
          className="w-full md:w-auto mb-20"
        />
      </div>
      <div className="flex flex-col md:flex-row items-start justify-around text-center md:text-left">
        <h1 className="text-3xl font-extrabold tracking-wider text-white leading-relaxed mb-8 md:mb-0 text-center">
          Get started with <br /> Our{" "}
          <span className="text-customPurple">SaaS</span>
          Solution
        </h1>
        <div>
          <p className="text-xs text-white pb-6 tracking-wider">
            Join the 10+ teams who have streamlined the way
            <br /> they manage projects and collaborate remotely.
          </p>
          <Button
            as={Link}
            radius="full"
            href="#"
            size="sm"
            className="text-white bg-customPurple text-xs px-4 mb-6"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
