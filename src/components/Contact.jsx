import React from "react";
import social from "../assets/furniture website landing page (Community)/Footer/Big/Social Icons.png";
import social1 from "../assets/furniture website landing page (Community)/Footer/Big/Social Icons-1.png";
import social2 from "../assets/furniture website landing page (Community)/Footer/Big/Social Icons-2.png";
import social3 from "../assets/furniture website landing page (Community)/Footer/Big/Social Icons-3.png";
import send from "../assets/furniture website landing page (Community)/Footer/Big/Essential Icons/send.png";
import logo from "../assets/footer/Footer/Big/Icon.png";

export default function Contact() {
  const socialmedia = [
    {
      url: social,
    },
    {
      url: social1,
    },
    {
      url: social2,
    },
    {
      url: social3,
    },
  ];
  const company = [
    {
      name: "About us",
    },
    {
      name: "Blog",
    },
    {
      name: "Contact us",
    },
    {
      name: "Pricing",
    },
    {
      name: "Testimonials",
    },
  ];
  const support = [
    {
      name: "Help center",
    },
    {
      name: "Terms of service",
    },
    {
      name: "Legal",
    },
    {
      name: "Privacy policy",
    },
    {
      name: "Status",
    },
  ];
  return (
    <>
      <div className="bg-[#263238] text-white flex sm:flex-row flex-col pb-8">
        <div className="pl-5 sm:pl-32 pt-7 sm:pt-20">
          <div className="flex">
            <img src={logo} alt="" className="w-[40px]" />
            <h1 className="font-bold text-3xl ">Nexcent</h1>
          </div>
          <div className="py-8  text-gray-200">
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex w-[90%] sm:w-60 gap-4">
            {socialmedia.map((aravind) => (
              <div>
                <img src={aravind.url} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="pl-5 sm:pl-80 pt-16">
            <h1 className="font-semibold text-xl">Company</h1>
            <div className="pt-5">
              {company.map((aravind) => (
                <div className="py-1 text-gray-200">
                  <p>{aravind.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pl-20 sm:pl-32 pt-16">
            <h1 className="font-semibold text-xl">Support</h1>
            <div className="pt-5">
              {support.map((jeya) => (
                <div className="py-1 text-gray-200">
                  <p>{jeya.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pl-5 sm:pl-32 pt-16">
          <h1 className="font-semibold text-xl pb-10">Stay up to date</h1>
          <div className="flex bg-gray-600 p-2 mr-28 sm:mr-0 rounded-lg">
            <p className="pl-2 text-xs sm:text-base">Your email address</p>
            <img src={send} alt="" className="pl-10 sm:pl-16 pt-1 sm:pt-2" />
          </div>
          {/* <form>
            <input type="text" className="bg-gray-300" />
            <img src={send} alt="" />
          </form> */}
        </div>
      </div>
    </>
  );
}
