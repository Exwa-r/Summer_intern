import React from "react";
import Home_page from "./components/Home_page.jsx";
import Client from './components/Client.jsx'
import Details from "./components/Details.jsx"
import Helping from "./components/Helping.jsx"
import Customer from "./components/Customer.jsx"
import Caring from "./components/Caring.jsx"
import Contact from "./components/Contact.jsx"
import Navbar from "./components/Navbar";

export default function App() {
  
  return (
    <>
    <Navbar/>
    <Home_page/>
    <Client />
    <Details />
    <Helping/>
    <Customer/>
    <Caring/>
    <Contact/>      
    </>
  );
}

// import React from 'react'

// export default function App() {
//   return (
//     <div className='text-rose-700 border-2 p-12 m-96 hover:text-black hover:shadow-2xl'>App</div>
//   )
// }
