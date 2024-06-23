import React from "react";
import icon from "../assets/Logo/Icon.png";
import icon1 from "../assets/Logo/Icon-1.png";
import icon2 from "../assets/Logo/Icon-2.png";
import icon3 from "../assets/Logo/Icon-3.png";
import pana from "../assets/mobile-login/pana.png";

export default function Helping() {
  const image = [
    {
      url: icon,
      count: "2,245,341",
      name: "Members",
    },
    {
      url: icon1,
      count: "46,328",
      name: "Clubs",
    },
    {
      url: icon2,
      count: "828,867",
      name: "Event Bookings",
    },
    {
      url: icon3,
      count: "1,926,436",
      name: "Payments",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 flex flex-col sm:flex-row pt-0 sm:pt-10 pb-4 sm:pb-20">
        <div className=" pl-3 sm:pl-40 pr-3 sm:pr-60 pt-3 sm:pt-10">
          <h1 className="text-gray-600 text-3xl sm:text-4xl pb-2 font-semibold ">
            Helping a local
          </h1>
          <h1 className="text-green-600 text-3xl sm:text-4xl pb-4 font-semibold">
            business reinvent itself
          </h1>
          <p className="text-sm sm:text-base">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="grid grid-cols-2">
          {image.map((aravind) => (
            <div className="flex pl-1 sm:pl-0 pr-15 sm:pr-36 pt-10">
              <div>
                <img src={aravind.url} alt="" className="pr-3 w-14" />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold text-xl sm:text-2xl text-gray-600">
                  {aravind.count}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {aravind.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch pt-6 pb-0 sm:pb-6">
        <div>
          <img
            src={pana}
            alt=""
            className="pl-3 sm:pl-40 pr-3 sm:pr-28  w-[3600px]"
          />
        </div>
        <div className="flex flex-col pr-2 sm:pr-[200px] pt-6 sm:pt-20 pl-3 sm:pl-10">
          <h3 className="font-semibold text-3xl sm:text-4xl text-gray-600">
            How to design your site footer like we did{" "}
          </h3>
          <p className="text-gray-500 text-justify text-xs sm:text-base pt-5">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <div className="pt-5">
            <button className="w-20 sm:w-36 border-2 text-white bg-green-600 p-2 sm:p-3  hover:shadow-2xl text-xs sm:text-base  rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
