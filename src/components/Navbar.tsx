import {useState} from 'react'
import Logo from "../assets/logo.svg"
import Down from "../assets/downarrow.svg"
import { useNavigate } from 'react-router-dom'
const Navbar =()=> {
  const navigate = useNavigate()
  const [isOpen,setIsOpen] = useState(false)
  const [isResourcesOpen,setIsResourcesOpen] = useState(false)
  return (
    <div className="bg-white w-full shadow-xl fixed left-0 top-0 z-[99]">
      <nav className="container mx-auto px-2 py-4   ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2  cursor-pointer" onClick={()=>navigate("/")}>
            <img src={Logo} alt="spider" className="w-10 h-10"/>
          
            <span className="text-xl font-bold">Spider</span>
          </div>
          <ul className="hidden md:flex space-x-16 uppercase">
           

            <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
  <li className="text-md flex items-center space-x-2 cursor-pointer">
    <span>Agents</span>
    <span className="mt-1">
      <img src={Down} className="w-3 h-3" />
    </span>
  </li>

  {isOpen && (
    <ul
      className="absolute capitalize top-[100%] w-[250px] space-y-4 bg-white p-4 z-[999] rounded-md"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <li  className="cursor-pointer">General Purpose Agents</li>
      <li    className="cursor-pointer">Domain expert agents</li>
      <li    className="cursor-pointer">Customize your agent</li>
    </ul>
  )}
</div>

          

           
            <li  className="text-md  cursor-pointer">Pricing</li>
          
            <div className="relative" onMouseEnter={() => setIsResourcesOpen(true)} onMouseLeave={() => setIsResourcesOpen(false)}>
  <li className="text-md flex items-center space-x-2 cursor-pointer">
    <span>Resources</span>
    <span className="mt-1">
      <img src={Down} className="w-3 h-3" />
    </span>
  </li>

  {isResourcesOpen && (
    <ul
      className="absolute capitalize top-[100%] w-[250px] space-y-4 bg-white p-4 z-[999] rounded-md"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <li  className="cursor-pointer">Blog</li>
      <li    className="cursor-pointer">Usecases</li>
    </ul>
  )}
</div>
           
          </ul>
          <div className="flex space-x-4 items-center">
           
            <button  className="px-4 py-2 rounded-full font-medium  bg-gradient-to-r from-purple-600 to-pink-500 text-white"  >Book Demo</button>
          </div>
        </div>
      </nav>

    
    </div>
  )
}



export default Navbar