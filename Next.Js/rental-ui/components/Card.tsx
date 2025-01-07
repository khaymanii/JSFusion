import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  price: string;
  address: string;
  parking: number;
  bathroom: number;
  bedroom: number;
}

const Card: React.FC<CardProps> = ({
  image,
  price,
  address,
  parking,
  bathroom,
  bedroom,
}) => {
  return (
    <div className="p-4 rounded-lg shadow-sm shadow-green-300 mt-2">
      <div className="relative w-full h-64 mx-auto">
        <Image
          src={image}
          alt="Card Img"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg"
        />
      </div>

      <div className="mt-4">
        <dl>
          <div className="mb-2">
            <dt className="sr-only">Price</dt>
            <dd className="text-sm text-gray-500">{price}</dd>
          </div>
          <div className="mb-2">
            <dt className="sr-only">Address</dt>
            <dd className="font-medium">{address}</dd>
          </div>
        </dl>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 sm:w-auto">
            <svg
              className="w-4 h-4 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <div>
              <p className="text-gray-500">Parking</p>
              <p className="font-medium">{parking} spaces</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:w-auto">
            <svg
              className="w-4 h-4 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <div>
              <p className="text-gray-500">Bathroom</p>
              <p className="font-medium">{bathroom} rooms</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:w-auto">
            <svg
              className="w-4 h-4 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <div>
              <p className="text-gray-500">Bedroom</p>
              <p className="font-medium">{bedroom} rooms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
