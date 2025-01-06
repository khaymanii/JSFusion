import { LuConstruction } from "react-icons/lu";
import { FcCollaboration } from "react-icons/fc";
import { MdOutlineElevator } from "react-icons/md";
import { MdJoinInner } from "react-icons/md";

const WhyJSFusion = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl text-center mb-2">
          Why Join JSFusion?
        </h1>
        <p className="mt-4 text-lg text-gray-600 mb-8 text-center mx-4">
          Unlock the potential of open-source with our vibrant community.
          Whether you’re learning JavaScript or advancing your skills, we’re
          here to guide you every step of the way.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white rounded-md p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-ou">
            <LuConstruction className="w-14 h-14 pb-4" />
            <h3 className="text-lg font-bold text-gray-800">
              Beginner-Friendly Projects
            </h3>
            <p className="text-gray-600 mt-2">
              Explore easy-to-understand projects designed to get you started
              with confidence.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-md p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-ou">
            <FcCollaboration className="w-14 h-14 pb-4" />
            <h3 className="text-lg font-bold text-gray-800">
              Collaborative Learning
            </h3>
            <p className="text-gray-600 mt-2">
              Work with experienced developers and peers to improve your skills.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-md p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-ou">
            <MdOutlineElevator className="w-14 h-14 pb-4" />
            <h3 className="text-lg font-bold text-gray-800">Skill Growth</h3>
            <p className="text-gray-600 mt-2">
              Take on challenges that elevate your JavaScript knowledge and
              expertise.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white rounded-md p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-ou">
            <MdJoinInner className="w-14 h-14 pb-4" />
            <h3 className="text-lg font-bold text-gray-800">
              Open-Source Contributions
            </h3>
            <p className="text-gray-600 mt-2">
              Make a meaningful impact by contributing to real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJSFusion;
