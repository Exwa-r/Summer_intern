import React from "react";
import image from "../assets/image 9.png";
import logo1 from "../assets/clients/Logo-1.png";
import logo2 from "../assets/clients/Logo-2.png";
import logo3 from "../assets/clients/Logo-3.png";
import logo4 from "../assets/clients/Logo-4.png";
import logo5 from "../assets/clients/Logo-5.png";
import logo from "../assets/clients/Logo.png";
export default function Customer() {
  const company = [
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
  ];
  return (
    <>
      <div className="flex flex-col sm:flex-row bg-gray-100 pt-10 pb-5">
        <div className="pl-1 sm:pl-20">
          <img src={image} alt="" className="w-[1700px]" />
        </div>
        <div className="text-xs pl-3 pr-1 sm:pl-20 sm:pr-20 text-justify sm:text-base">
          <p className="text-gray-500">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="pt-2 sm:pt-6 text-green-600 text-xl font-semibold">
            Tim Smith
          </h3>
          <p className="pt-2 sm:pt-5 text-gray-400">
            British Dragon Boat Racing Association
          </p>
          <div className="flex gap-1 sm:gap-14 pt-5">
            {company.map((aravind) => (
              <div>
                <img src={aravind.url} alt="" className="w-6 sm:w-16" />
              </div>
            ))}
            <a
              href=""
              className="text-green-700 text-xs sm:text-base pt-1 sm:pt-3 pl-2 sm:pl-0"
            >
              Meet all customers &#8594;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
