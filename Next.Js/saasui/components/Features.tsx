import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="text-white max-w-5xl mx-auto px-4 my-20">
      <h1 className="text-xl font-extrabold tracking-wider pb-4">
        Our Platform Features
      </h1>
      <p className="text-xs tracking-wider pb-4 text-white sm:w-[460px] leading-relaxed">
        Our SaaS product provides a unified platform where teams can manage all
        aspects of their projects. This centralization ensures that everyone has
        access to the same information, fostering transparency and coordination.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-80 h-auto sm:h-80 md:h-96 px-4 py-16 bg-customPurple1 rounded-xl text-white">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-6 mx-auto sm:mx-0">
            <Image
              src="./icons/streamline.svg"
              alt="streamline icon"
              width={20}
              height={20}
            />
          </div>
          <h1 className="text-md mb-6 text-center sm:text-left">
            Streamlined Workflow
          </h1>
          <p className="text-xs leading-relaxed tracking-wider text-center sm:text-left">
            Automation of routine tasks and seamless integration with other
            tools save valuable time and resources. This cohesive system allows
            your team to focus on what truly matters.
          </p>
        </div>
        <div className="w-full sm:w-80 h-auto sm:h-80 md:h-96 px-4 py-16 bg-customPurple1 rounded-xl text-white">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-6 mx-auto sm:mx-0">
            <Image
              src="./icons/people.svg"
              alt="people icon"
              width={20}
              height={20}
            />
          </div>
          <h1 className="text-md mb-6 text-center sm:text-left">
            Real-time Collaboration
          </h1>
          <p className="text-xs leading-relaxed tracking-wider text-center sm:text-left">
            Our platform supports realtime collaboration, enabling team members
            to work together from anywhere. Instant updates and synchronized
            changes ensure everyone stays on track.
          </p>
        </div>
        <div className="w-full sm:w-80 h-auto sm:h-80 md:h-96 px-4 py-16 bg-customPurple1 rounded-xl text-white">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-6 mx-auto sm:mx-0">
            <Image
              src="./icons/desktop.svg"
              alt="desktop icon"
              width={20}
              height={20}
            />
          </div>
          <h1 className="text-md mb-6 text-center sm:text-left">
            Intuitive Interface
          </h1>
          <p className="text-xs leading-relaxed tracking-wider text-center sm:text-left">
            Our SaaS platform features an intuitive interface designed for ease
            of use, allowing users to navigate effortlessly without a steep
            learning curve.
          </p>
        </div>
      </div>
    </div>
  );
}
