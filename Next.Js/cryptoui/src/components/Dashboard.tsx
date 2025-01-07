import Image from "next/image";
import Dashboard2 from "./Dashboard2";

export default function Dashboard() {
  return (
    <div className="w-full bg-gray-700 h-[895px] rounded-2xl p-5">
      <div className="w-full bg-gray-800 h-auto rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Image
                  src="/images/profileimage.svg"
                  alt="profile image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="flex">
                  <p className="text-xs text-white pr-1">Hey there </p>
                  <Image
                    src="/icons/hand.svg"
                    width={20}
                    height={20}
                    alt="hand"
                  />
                </div>
                <h1 className="text-xl text-bold tracking-widest text-white">
                  Chim Chim
                </h1>
              </div>
            </div>
          </div>
          <div className="rounded-full w-24 bg-gray-700 px-2 py-2 flex items-center border-gray-600">
            <Image src="/icons/eye.svg" alt="eye" width={20} height={20} />
            <p className="text-xs text-white pl-1">Hide info</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="w-52 rounded-lg h-auto p-4 bg-gray-700">
            <p className="text-white text-xs mb-4">User ID</p>
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-white text-sm tracking-wider">00442262</p>
              <Image src="/icons/copy.svg" alt="copy" width={20} height={20} />
            </div>
          </div>
          <div className="w-52 rounded-lg h-auto p-4 bg-gray-700">
            <p className="text-white text-xs mb-4">Time Zone</p>
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-white text-sm tracking-wider">
                GMT +1 Nigeria
              </p>
            </div>
          </div>
          <div className="w-52 rounded-lg h-auto p-4 bg-gray-700">
            <p className="text-white text-xs mb-4">Last Login</p>
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-white text-sm tracking-wider">
                01-07-2024 07:30am
              </p>
            </div>
          </div>
          <div className="w-52 rounded-lg h-auto p-4 bg-gray-700">
            <p className="text-white text-xs mb-4">Security</p>
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-white text-sm tracking-wider">Not Verified</p>
            </div>
          </div>
        </div>
      </div>
      <Dashboard2 />
    </div>
  );
}
