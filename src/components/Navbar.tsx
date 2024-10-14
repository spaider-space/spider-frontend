import React from "react";
import {Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="min-h-screen bg-[#1c1b22] text-white relative overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/placeholder.svg?height=1080&width=1920"
        alt="Engineering parts background"
        // layout="fill"
        // objectFit="cover"
        className="opacity-50"
      />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <header className="flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <span className="text-[#1c1b22] text-2xl font-bold">L</span>
          </div>
          <span className="text-xl font-semibold">Leo</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/about">About us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button className="bg-white text-[#1c1b22] hover:bg-gray-200">
          Try It Now
        </button>
      </header>

      <main className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          The world's first<br />engineering design copilot.
        </h1>
        <button className="bg-[#4169e1] hover:bg-[#3a5cd1] text-white px-8 py-3 text-lg">
          Get Started with Leo
        </button>

        {/* <div className="mt-16">
          <p className="text-gray-400 mb-4">Trusted by Mechanical Engineers at</p>
          <div className="flex justify-center items-center space-x-8 flex-wrap">
            {['Scania', 'HP', 'Philips', 'MIT', 'Elbit Systems'].map((company) => (
              <img
                key={company}
                src="/placeholder.svg?height=40&width=80"
                alt={company}
                width={80}
                height={40}
                className="opacity-70"
              />
            ))}
          </div>
        </div> */}
      </main>
    </div>
  </div>
  )
}

export default Navbar