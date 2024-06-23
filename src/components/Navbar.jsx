import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../assets/Icon.png";
import Home_page from "./Home_page";
import Client from "./Client";
import Details from "./Details";
import Helping from "./Helping";
import Customer from "./Customer";
import Caring from "./Caring";
import Contact from "./Contact";

export default function Navbar() {
  const navigate = [
    {
      nav: "/",
      page: "Home",
    },
    {
      nav: "/features",
      page: "Features",
    },
    {
      nav: "/community",
      page: "Community",
    },
    {
      nav: "/blog",
      page: "Blog",
    },
    {
      nav: "/pricing",
      page: "Pricing",
    },
  ];

  const [menuopen, setmenuopen] = useState(false);

  return (
    <>
      <div className="flex w-full p-5 items-center">
        <div className="flex w-full items-center pl-3 sm:pl-12">
          <img src={logo} alt="" className="h-5" />
          <h1 className="font-bold text-2xl">Nexcent</h1>
        </div>

        <div className="hidden sm:flex w-full justify-end gap-5 pr-12">
          {navigate.map((nav, index) => (
            <div id={index}>
              <Link to={nav.nav}>{nav.page}</Link>
            </div>
          ))}
        </div>
        <button className="hidden sm:block w-20 sm:w-80  m-2 sm:m-0 border-2 text-white bg-green-600 p-1.5 sm:p-3 hover:shadow-2xl rounded-md text-[6px] sm:text-base">
          Register Now
        </button>

        <div
          className="size-7 flex sm:hidden"
          onClick={() => setmenuopen(!menuopen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-category"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4h6v6h-6z" />
            <path d="M14 4h6v6h-6z" />
            <path d="M4 14h6v6h-6z" />
            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          </svg>
        </div>
      </div>
      {menuopen && (
        <div className="flex flex-col p-3 items-end ml-52 shadow-xl text-left rounded-lg  bg-white absolute animate-bounce">
          {navigate.map((nav, index) => (
            <div id={index}>
              <Link to={nav.nav}>{nav.page}</Link>
            </div>
          ))}
          <button className=" w-20 sm:w-80  m-2 sm:m-0 border-2 text-white bg-green-600 p-1.5 sm:p-3 hover:shadow-2xl rounded-md text-[6px] sm:text-base">
            Register Now
          </button>
        </div>
      )}
    </>
  );
}
