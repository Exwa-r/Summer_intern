import React from "react";
import image18 from "../assets/images/image 18.png";
import image19 from "../assets/images/image 19.png";
import image20 from "../assets/images/image 20.png";

export default function Caring() {
  const details = [
    {
      key: 1,
      url: image18,
      para: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      key: 2,
      url: image19,
      para: "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      key: 3,
      url: image20,
      para: "Revamping the Membership Model with Triathlon Australia",
    },
  ];
  return (
    <>
      <div>
        <h2 className=" text-4xl sm:text-3xl font-semibold text-gray-600 text-center">
          Caring is the new marketing
        </h2>
        <p className="text-center pl-8 sm:pl-96 pr-8 sm:pr-96 pt-4 pb-7 text-sm sm:text-xl">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>

      <div className="sm:flex felx-col w-full justify-center gap-5 pl-2  sm:pl-0 sm:pb-0">
        {details.map((aravind) => (
          <>
            <div className="w-[300px] sm:w-[360px] flex flex-col items-center pb-5 sm:pb-0">
              <img
                src={aravind.url}
                alt=""
                className="w-full -mb-12 -z-10 relative"
              />
              <div className="  text-center bg-gray-100 rounded-lg w-[250px] sm:w-[300px] shadow-xl h-24 sm:h-36">
                <p className="px-12 pb-2 sm:pb-5 pt-3 text-xs sm:text-l">
                  {aravind.para}
                </p>
                <p className="pb-4 text-green-600 text-xs sm:text-l ">
                  Read More &#8594;
                </p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className=" pt-10 sm:pt-40">
        <h1 className="font-semibold text-3xl sm:text-6xl text-center text-gray-700">
          Pellentesque suscipit
        </h1>
        <h1 className="font-semibold text-3xl sm:text-6xl text-center text-gray-700 pt-4">
          fringilla libero eu.
        </h1>
        <div className="flex w-full justify-center pt-10 pb-9">
          <button className=" wsm:w-36 border-2 text-white bg-green-600 p-3 hover:shadow-2xl rounded-md">
            Get a Demo &#8594;
          </button>
        </div>
      </div>
    </>
  );
}
