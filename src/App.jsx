import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Featues";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";

export default function App() {
  const navigate = [
    {
      nav: "/",
      element: <Home />,
    },
    {
      nav: "/features",
      element: <Features />,
    },
    {
      nav: "/community",
      element: <Community />,
    },
    {
      nav: "/blog",
      element: <Blog />,
    },
    {
      nav: "/pricing",
      element: <Pricing />,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {navigate.map((nav) => (
            <Route path={nav.nav} element={nav.element} />
          ))}
        </Routes>
      </BrowserRouter>
      <Home_page />
      <Client />
      <Details />
      <Helping />
      <Customer />
      <Caring />
      <Contact />
    </>
  );
}

// import React from 'react'

// export default function App() {
//   return (
//     <div className='text-rose-700 border-2 p-12 m-96 hover:text-black hover:shadow-2xl'>App</div>
//   )
// }
