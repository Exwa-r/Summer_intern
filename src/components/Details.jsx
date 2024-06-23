import React from "react";
import icon from "../assets/items/Icon.png";
import icon1 from "../assets/items/Icon-1.png";
import icon2 from "../assets/items/Icon-2.png";
import frame from "../assets/Frame 35.png";

export default function Details() {
  const image = [
    {
      url: icon,
      heading: `Membership Organisations`,
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      url: icon1,
      heading: "National Associations",
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      url: icon2,
      heading: "Clubs And Groups",
      para: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <>
      <div className="flex flex-col sm:flex-row items-stretch gap-28 pl-3 sm:pl-32 pr-3 sm:pr-32 pb-8 sm:pb-32 pt-12  ">
        {image.map((aravind) => (
          <div className="hover:shadow-2xl shadow-lg rounded-md  p-3  flex flex-col items-center gap-0 sm:gap-4">
            <img src={aravind.url} alt="" className="w-14" />
            <h3 className="text-xl sm:text-2xl text-gray-600 font-semibold break-words ">
              {aravind.heading}
            </h3>
            <p className="text-center pb-8 sm:pb-12">{aravind.para}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch pb-7 sm:pb-0">
        <div>
          <img
            src={frame}
            alt=""
            className="pl-3 sm:pl-40 pr-3 sm:pr-20  w-[2600px]"
          />
        </div>
        <div className="flex flex-col pl-3 sm:pl-0 pr-3 sm:pr-[200px] pt-0 sm:pt-20 ">
          <h3 className="font-semibold text-3xl sm:text-4xl text-gray-600 ">
            The unseen of spending three years at Pixelgrade
          </h3>
          <p className="text-gray-500 text-justify text-xs sm:text-base pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className="pt-5">
            <button className="w-20 sm:w-36 border-2 text-white bg-green-600 text-xs p-2 sm:text-base sm:p-3  hover:shadow-2xl rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
