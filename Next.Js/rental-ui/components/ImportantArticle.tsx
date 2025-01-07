import React from "react";
import Image from "next/image";
import Article1 from "@/public/article1.jpg";
import Article2 from "@/public/article2.jpg";
import Article3 from "@/public/article3.jpg";
import Article4 from "@/public/article4.jpg";

function ImportantArticle() {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 sm:px-8">
      <h1 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
        Important Articles
      </h1>
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-1/2 lg:mr-6 mb-6 lg:mb-0">
          <Image
            src={Article1}
            alt="article1 image"
            width={700}
            height={700}
            objectFit="cover"
            layout="responsive"
            className="pb-4"
          />
          <p className="text-red-500 font-semibold pb-2">February 4, 2023</p>
          <h1 className="font-bold text-xl pb-4">
            Top Tip for Finding the Perfect Rental
          </h1>
          <p className="text-gray-500 font-light text-lg tracking-wider">
            Discover expert advice on how to find the ideal rental property that
            meets your needs and budget.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row mb-5">
            <div className="w-full sm:w-[200px] sm:mr-4 mb-4 sm:mb-0">
              <Image
                src={Article2}
                alt="article2 image"
                width={300}
                height={200}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full sm:flex-1">
              <p className="text-red-500 font-semibold pb-2">May 7, 2023</p>
              <h1 className="font-bold text-xl pb-2">
                Car Rental Hacks for Smooth Journey
              </h1>
              <p className="text-gray-500 font-light text-base tracking-wider">
                Loan insider tips for getting the best deals and making the most
                of your rental car experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-5">
            <div className="w-full sm:w-[200px] sm:mr-4 mb-4 sm:mb-0">
              <Image
                src={Article3}
                alt="article3 image"
                width={300}
                height={200}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full sm:flex-1">
              <p className="text-red-500 font-semibold pb-2">January 2, 2023</p>
              <h1 className="font-bold text-xl pb-2">Maximizing Returns</h1>
              <p className="text-gray-500 font-light text-base tracking-wider">
                Loan strategies to optimize the return on investment for your
                rental property.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-5">
            <div className="w-full sm:w-[200px] sm:mr-4 mb-4 sm:mb-0">
              <Image
                src={Article4}
                alt="article4 image"
                width={300}
                height={200}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full sm:flex-1">
              <p className="text-red-500 font-semibold pb-2">April 7, 2023</p>
              <h1 className="font-bold text-xl pb-2">
                Navigating the Rental Market
              </h1>
              <p className="text-gray-500 font-light text-base tracking-wider">
                Explore key considerations and useful tips for individuals new
                to the rental market.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-5">
            <div className="w-full sm:w-[200px] sm:mr-4 mb-4 sm:mb-0">
              <Image
                src={Article3}
                alt="article3 image"
                width={300}
                height={200}
                objectFit="cover"
                layout="responsive"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full sm:flex-1">
              <p className="text-red-500 font-semibold pb-2">July 7, 2023</p>
              <h1 className="font-bold text-xl pb-2">
                Managing Your Rental Items
              </h1>
              <p className="text-gray-500 font-light text-base tracking-wider">
                Get valuable insights on how to effectively manage and maintain
                your remeditems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantArticle;
