import React from "react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="h-[895px] py-8 px-2 w-72 bg-gray-700 rounded-2xl cursor-pointer">
        <div className="flex flex-col gap-[530px]">
          <div>
            {" "}
            <div className="flex items-center gap-2 mb-2 bg-green-600 w-56 py-2 px-4 rounded-lg">
              <Image
                src="/icons/dashboard.svg"
                alt="dashboard"
                width={20}
                height={20}
              />
              <p className="text-xs text-white">Dashboard</p>
            </div>
            <div className="flex items-center gap-2 mb-2 hover:bg-green-600 w-56 py-2 px-4 rounded-lg">
              <Image
                src="/icons/profile.svg"
                alt="profile"
                width={20}
                height={20}
              />
              <p className="text-xs text-white">My profile</p>
            </div>{" "}
            <div className="flex items-center gap-2 mb-2 hover:bg-green-600 w-56 py-2 px-4 rounded-lg">
              <Image
                src="/icons/community.svg"
                alt="profile"
                width={20}
                height={20}
              />
              <p className="text-xs text-white">Community</p>
            </div>{" "}
            <div className="flex items-center gap-2 mb-2 hover:bg-green-600 w-56 py-2 px-4 rounded-lg">
              <Image src="/icons/bot.svg" alt="bot" width={20} height={20} />
              <p className="text-xs text-white">Our bot</p>
            </div>
            <div className="flex items-center gap-2 mb-2 hover:bg-green-600 w-56 py-2 px-4 rounded-lg">
              <Image
                src="/icons/history.svg"
                alt="history"
                width={20}
                height={20}
              />
              <p className="text-xs text-white">History</p>
            </div>{" "}
            <div className="flex items-center gap-2 mb-2 hover:bg-green-600 w-56 py-2 px-4 rounded-xl">
              <Image
                src="/icons/settings.svg"
                alt="settings"
                width={20}
                height={20}
              />
              <p className="text-xs text-white">Settings</p>
            </div>
          </div>{" "}
          <div className="flex items-center gap-2 mb-2 hover:bg-green-600 w-56 py-2 px-4 rounded-xl">
            <Image
              src="/icons/settings.svg"
              alt="logout"
              width={20}
              height={20}
            />
            <p className="text-xs text-white">Logout</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
