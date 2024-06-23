import React from "react";
import logo1 from "../assets/clients/Logo-1.png";
import logo2 from "../assets/clients/Logo-2.png";
import logo3 from "../assets/clients/Logo-3.png";
import logo4 from "../assets/clients/Logo-4.png";
import logo5 from "../assets/clients/Logo-5.png";
import logo6 from "../assets/clients/Logo-6.png";
import logo from "../assets/clients/Logo.png";

export default function Client() {
  const image = [
    {
      url: logo,
    },
    {
      url: logo1,
    },
    {
      url: logo2,
    },
    {
      url: logo3,
    },
    {
      url: logo4,
    },
    {
      url: logo5,
    },
    {
      url: logo6,
    },
  ];
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div>
            <h3 className="text-center pt-2 pb-0 sm:pb-3 text-2xl sm:text-3xl text-gray-600 font-semibold ">
              Our Clients
            </h3>
            <p className="pl-3 sm:pl-0 pb-3 text-xs sm:text-base text-gray-500">
              We have been working with some Fortune 500+ clients
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center gap-2 sm:gap-40 pt-3 sm:pt-9">
          {image.map((aravind) => (
            <div>
              <img src={aravind.url} alt="" />
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-center text-2xl sm:text-3xl text-gray-600 pt-9 font-semibold">
            Manage your entire community
            <br />
            in a single system
          </h3>
          <p className="text-center text-sm sm:text-base text-gray-500 pt-2">
            Who is Nextcent suitable for?
          </p>
        </div>
      </div>
    </>
  );
}
