// import {useState} from 'react'
// import Logo from "../assets/logo.svg"
// import Down from "../assets/downarrow.svg"
// import { useNavigate } from 'react-router-dom'
// const Navbar =()=> {
//   const navigate = useNavigate()
//   const [isOpen,setIsOpen] = useState(false)
//   const [isResourcesOpen,setIsResourcesOpen] = useState(false)
//   return (
//     <div className="bg-white w-full shadow-xl fixed left-0 top-0 z-[99]">
//       <nav className="container mx-auto px-2 py-4   ">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2  cursor-pointer" onClick={()=>navigate("/")}>
//             <img src={Logo} alt="spider" className="w-10 h-10"/>

//             <span className="text-xl font-bold">Spider</span>
//           </div>
//           <ul className="hidden md:flex space-x-16 uppercase">

//             <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
//   <li className="text-md flex items-center space-x-2 cursor-pointer">
//     <span>Agents</span>
//     <span className="mt-1">
//       <img src={Down} className="w-3 h-3" />
//     </span>
//   </li>

//   {isOpen && (
//     <ul
//       className="absolute capitalize top-[100%] w-[250px] space-y-4 bg-white p-4 z-[999] rounded-md"
//       style={{
//         boxShadow:
//           "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
//       }}
//     >
//       <li  className="cursor-pointer">General Purpose Agents</li>
//       <li    className="cursor-pointer">Domain expert agents</li>
//       <li    className="cursor-pointer">Customize your agent</li>
//     </ul>
//   )}
// </div>

//             <li  className="text-md  cursor-pointer">Pricing</li>

//             <div className="relative" onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)}>
//   <li className="text-md flex items-center space-x-2 cursor-pointer">
//     <span>Resources</span>
//     <span className="mt-1">
//       <img src={Down} className="w-3 h-3" />
//     </span>
//   </li>

//   {isResourcesOpen && (
//     <ul
//       className="absolute capitalize top-[100%] w-[250px] space-y-4 bg-white p-4 z-[999] rounded-md"
//       style={{
//         boxShadow:
//           "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
//       }}
//     >
//       <li  className="cursor-pointer">Blog</li>
//       <li    className="cursor-pointer">Usecases</li>
//     </ul>
//   )}
// </div>

//           </ul>
//           <div className="flex space-x-4 items-center">

//             <button  className="px-4 py-2 rounded-full font-medium  bg-gradient-to-r from-purple-600 to-pink-500 text-white"  >Book Demo</button>
//           </div>
//         </div>
//       </nav>

//     </div>
//   )
// }

// export default Navbar

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Down from "../assets/downarrow.svg";
import ShimmerButton from "./ui/shimmer-button";

export default function Navbar() {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false)
  // const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  return (
    <div className="bg-white w-full shadow-xl fixed left-0 top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="spider" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">
              Sp
              <span className="text-black text-[24px]">AI</span>der
            </span>
          </div>
          <ul className="hidden md:flex space-x-8">
            <NavItem
              title="Agents"
              subItems={[
                "General Purpose Agents",
                "Domain Expert Agents",
                "Customize Your Agent",
              ]}
            />
            <NavItem title="Pricing" />
            <NavItem title="Resources" subItems={["Blog", "Use Cases"]} />
          </ul>
          <div>
            <ShimmerButton>Book Demo</ShimmerButton>
            {/* <button className="px-4 py-2 rounded-full font-medium bg-black text-white hover:bg-gray-800 transition-colors"  onClick={()=>navigate("/demo")}>
              Book Demo
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavItem({ title, subItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li className="text-sm font-medium flex items-center space-x-1 cursor-pointer text-black">
        <span>{title}</span>
        {subItems.length > 0 && (
          <span className="mt-1">
            <img src={Down} className="w-3 h-3" alt="Expand" />
          </span>
        )}
      </li>

      {isOpen && subItems.length > 0 && (
        <ul className="absolute capitalize top-full left-0 w-48 space-y-4 bg-white p-5 rounded-md shadow-md">
          {subItems.map((item, index) => (
            <li
              key={index}
              className="text-sm font-medium cursor-pointer text-black hover:text-gray-600 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
