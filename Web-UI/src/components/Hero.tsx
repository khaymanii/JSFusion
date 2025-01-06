const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-28 lg:py-36 flex flex-col items-center md:justify-between">
        {/* Left Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl mb-2">
            Welcome to <span className="text-customPurple">JSFusion</span>
          </h1>
          <p className="text-gray-800 text-xl text-center font-semibold">
            Javascript Open-Source Playground
          </p>
          <p className="mt-4 text-lg text-gray-600 text-center font-medium lg:w-[1000px]">
            A vibrant Open-Source community hub for discovering, learning, and
            contributing to beginner to intermediate-friendly JavaScript
            projects across various frameworks.
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/khaymanii/jsfusion"
              className="ml-4 px-6 py-3 bg-gray-600 text-white font-medium rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            >
              Start Contributing
            </a>
          </div>
        </div>

        {/* Right Image */}
      </div>
    </section>
  );
};

export default Hero;
