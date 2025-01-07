import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <div>
      <div className="container py-16 grid-cols-2">
        <h2 className="font-bold text-2xl pb-4">Testimonials</h2>
        <div className="grid lg:grid-cols-[300px, 1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-8">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                src="/user.jpg"
                alt="user image"
                width={50}
                height={50}
                className="rounded-full inline-block w-12 h-12"
              />
              <h2 className="text-gray-500 font-black text-[20px]">Else Doe</h2>
              <p>CEO & Founder Invision </p>
              <p className="max-w-[200px] text-gray-500">
                Sik offers top-quality fashion accessories with excellent
                customer service.
              </p>
            </div>
          </div>

          <div className="bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] text-center py-8 rounded-2xl">
              <button className="bg-blackish text-white p-3 mb-2 rounded-xl">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727] mb-2">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ $20 <strong>Shop Now</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
