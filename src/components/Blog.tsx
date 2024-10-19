// import React from 'react';
// import Blog from "../assets/blog.webp"
// import { useNavigate } from 'react-router-dom';

// const Blogs = ()=> {
//   const navigate = useNavigate()
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//            <h1 className="text-center  text-4xl my-4">Know more about AI Agents</h1>
//       <div className="bg-purple-50 rounded-3xl overflow-hidden shadow-xl">

//         <div className="md:flex">
//           <div className="md:w-1/2 bg-purple-100 p-8 flex flex-col items-center justify-center space-y-6">
//             <img src={Blog} />
//           </div>
//           <div className="md:w-1/2 p-8">
//             <div className="inline-block bg-purple-100 rounded-full px-3 py-1 text-sm font-semibold text-purple-600 mb-4">
//               Blog
//             </div>
//             <h2 className="text-3xl font-bold mb-4">
//             Harnessing the Future: The Rise of AI Engineering Agents

//             </h2>
//             <div className="mb-6">
//             In the rapidly evolving landscape of artificial intelligence, AI engineering agents are emerging as a transformative force, reshaping how we approach complex engineering tasks and problem-solving. This article explores the concept of AI engineering agents, their capabilities, and their potential impact on various industries.
//             </div>
//             <button className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-full border border-purple-600 hover:bg-purple-50 transition duration-300"  onClick={()=>navigate("/blogs")}>
//         Read More
//       </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blogs

import { useNavigate } from "react-router-dom";
import Blog from "../assets/blog.webp";

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <div className=" container mx-auto px-4 sm:px-6 lg:px-4 py-4">
      <h1 className="text-center text-3xl font-bold text-black mb-8">
        Know more about AI Agents
      </h1>
      <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-md border border-gray-200">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gray-100 p-8 flex flex-col items-center justify-center">
            <img
              src={Blog}
              alt="AI Agents Blog"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mb-4">
              Blog
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">
              Harnessing the Future: The Rise of AI Engineering Agents
            </h2>
            <p className="text-base text-gray-700 mb-6">
              In the rapidly evolving landscape of artificial intelligence, AI
              engineering agents are emerging as a transformative force,
              reshaping how we approach complex engineering tasks and
              problem-solving. This article explores the concept of AI
              engineering agents, their capabilities, and their potential impact
              on various industries.
            </p>
            <button
              className="px-4 py-2 bg-white text-black font-medium rounded-full border border-black hover:bg-gray-100 transition duration-300"
              onClick={() => navigate("/blogs")}
            >
              Read More
            </button>
            {/* <ShinyButton   onClick={() => navigate("/blogs")}>Read More</ShinyButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}
