import React from "react";
import illustration from "../assets/Illustration.png";

export default function Home_page() {
  return (
    <>
      <div className="flex sm:flex-row flex-col bg-gray-100 p-10 sm:p-36">
        <div className="flex sm:hidden w-full justify-end ">
          <img src={illustration} alt="" className="h-44 sm:h-80 w-80" />
        </div>
        <div className="w-full">
          <h1 className="text-gray-700 text-3xl sm:text-6xl pb-2 font-bold ">
            Lessons and insights
          </h1>
          <h1 className="text-green-600 text-3xl sm:text-6xl pb-4 font-bold">
            from 8 years
          </h1>
          <p className="text-gray-400 pb-5 text-xs sm:text-base">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="w-20 sm:w-36 border-2 text-white bg-green-600 p-2 sm:p-3 hover:shadow-2xl rounded-md text-xs sm:text-base ">
            Register
          </button>
        </div>
        <div className=" hidden sm:flex w-full justify-end ">
          <img src={illustration} alt="" className="h-80 w-80" />
        </div>
      </div>
    </>
  );
}
