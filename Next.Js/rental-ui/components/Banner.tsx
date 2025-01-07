import React from "react";

function Banner() {
  return (
    <div className="bg-gray-50 py-6 md:py-12 my-6 md:my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl md:mr-4 w-full md:w-1/3 my-2 md:my-6 font-bold text-center md:text-left">
          Insights and Performance Metrics
        </h1>
        <div className="w-full py-4 md:py-8 rounded-lg bg-black text-center text-white md:mx-2">
          <h1 className="text-xl md:text-3xl">5000+</h1>
          <p className="text-sm">Total Listings</p>
        </div>
        <div className="w-full py-4 md:py-8 rounded-lg bg-black text-center text-white md:mx-2">
          <h1 className="text-xl md:text-3xl">1000+</h1>
          <p className="text-sm">Active Listings</p>
        </div>
        <div className="w-full py-4 md:py-8 rounded-lg bg-black text-center text-white md:mx-2">
          <h1 className="text-xl md:text-3xl">50+</h1>
          <p className="text-sm">Blog Articles</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
