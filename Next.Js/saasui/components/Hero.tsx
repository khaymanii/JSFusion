import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="my-20 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-3xl font-extrabold pb-6 tracking-wider">
          Efficiency and Productivity <br /> with Our{" "}
          <span className="text-customPurple">SaaS</span> Solution
        </h1>
        <p className="text-xs pb-8 tracking-wider leading-relaxed">
          At Sync, we strive to grow with your business, allowing themes to add
          new projects <br /> and users effortlessly. Tools to ensure that the
          product can adapt to meet business enterprise
        </p>
        <Button
          as={Link}
          radius="full"
          href="#"
          size="md"
          className="text-white bg-customPurple text-xs px-4 mb-8"
        >
          Get Started Here
        </Button>
        <Image
          src="./images/hero.svg"
          alt="hero image"
          width={800}
          height={800}
          className="mb-20"
        />
        <Image
          src="./images/companies.svg"
          alt="company image"
          width={800}
          height={800}
          className=""
        />
      </div>
    </div>
  );
}
