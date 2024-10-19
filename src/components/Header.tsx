// import {useState} from 'react'
// import {  Network, CheckSquare, Cloud } from 'lucide-react'



// const FeatureItem: React.FC<{ icon: React.ReactNode; text: string; tooltipText: string }> = ({ icon, text, tooltipText }) => {
//   const [showTooltip, setShowTooltip] = useState(false);

//   return (
//     <div 
//       className="relative flex items-center space-x-2 bg-white rounded-lg p-3 h-[60px] shadow-sm"
//       onMouseEnter={() => setShowTooltip(true)}
//       onMouseLeave={() => setShowTooltip(false)}
//     >
//       {icon}
//       <span className="text-sm font-medium text-gray-800">{text}</span>

//       {/* Tooltip */}
//       {showTooltip && (
//         <div className="absolute  top-[-20px] right-[-150px] transform -translate-x-1/2 px-3 py-2 rounded-lg bg-gray-800 text-white text-xs shadow-lg z-50">
//           {tooltipText}
//         </div>
//       )}
//     </div>
//   );
// };


// const Header = () => {
//   return (
     
//        <div 
//       className=" h-[600px] flex   items-center justify-between flex-col md:flex-row  mt-[20px]"
   
//       >
//         <div 
        
//         className=" basis-[50%] w-full h-full flex  flex-col justify-center space-y-8  "
//         >
//           <div 
//           className=" flex  space-x-3 h-[60px] items-center px-4 bg-purple-100 rounded-full"
       
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M3 7.8L12 3L21 7.8V16.2L12 21L3 16.2V7.8Z" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M12 12L21 7.8" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M12 12V21" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M12 12L3 7.8" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             <span className="text-sm font-semibold text-purple-800"><span className="text-black font-bold text-lg ">Introducing Spider</span> - The enterprise agent framework</span>
//           </div>
//           <h1 className="text-[46px] md:text-5xl font-bold text-gray-900 mb-4    " style={{lineHeight:"1.3"}}>
//             Build reliable, private <br></br>  and self-learning <br></br> <span className="text-purple-600">AI agents.</span>
//           </h1>
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//           <button  className="px-4 py-2 rounded-full font-medium  bg-gradient-to-r from-purple-600 to-pink-500 text-white"  >Book Demo</button>
           
//           </div>
//         </div>
//         <div 
//         className="basis-[40%] h-full w-full flex items-center justify-center"
//         >
//           <div className="bg-gradient-to-br  w-full h-[350px] from-purple-100 to-pink-100 rounded-3xl p-8 relative z-10">
//             <div className="space-y-8  flex  justify-center flex-col w-full h-full">
//               <FeatureItem 
//                 icon={<Network className="h-5 w-5 text-purple-600" />} 
//                 text="Multi-agent orchestration" 
//                 tooltipText="Orchestrate multiple agents to work together seamlessly."
//               />
//               <FeatureItem 
//                 icon={<CheckSquare className="h-5 w-5 text-purple-600" />} 
//                 text="Inbuilt Agent evaluation" 
//                 tooltipText="Orchestrate multiple agents to work together seamlessly."
//               />
//               <FeatureItem 
//                 icon={<Cloud className="h-5 w-5 text-purple-600" />} 
//                 text="Runs locally on cloud" 
//                 tooltipText="Orchestrate multiple agents to work together seamlessly."
//               />
//             </div>
//           </div>
//           <div className="absolute inset-0 bg-grid-gray-100 z-0"></div>
//         </div>



//       </div>
//   )
// }

// export default Header


import { useState } from 'react'
import { Network, CheckSquare, Cloud } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import ShimmerButton from './ui/shimmer-button';

const FeatureItem: React.FC<{ icon: React.ReactNode; text: string; tooltipText: string }> = ({ icon, text, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative flex items-center space-x-2 bg-white rounded-lg p-3 h-[60px] shadow-sm border border-gray-200"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {icon}
      <span className="text-sm font-medium text-gray-800">{text}</span>

      {showTooltip && (
        <div className="absolute top-[-20px] right-[-150px] transform -translate-x-1/2 px-3 py-2 rounded-lg bg-gray-800 text-white text-xs shadow-lg z-50">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const navigate = useNavigate()
  return (
    <div  className="container mt-[100px] mx-auto px-4 py-4">

   
    <div className=" flex items-center justify-between flex-col md:flex-row ">
      {/* new  */}

  
      <div className="basis-[50%] w-full h-full flex flex-col justify-center space-y-8">
        <div className="flex space-x-3 h-[60px] max-w-[500px] items-center px-4 bg-gray-100 rounded-full">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7.8L12 3L21 7.8V16.2L12 21L3 16.2V7.8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12L21 7.8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12V21" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12L3 7.8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-medium text-gray-800">
            <strong className="text-black  text-xl font-bold">Introducing Spider</strong> - The enterprise agent framework
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-black" style={{lineHeight: "1.3"}}>
          Build reliable, private <br /> and self-learning <br /> <span className="text-gray-700">AI agents.</span>
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {/* <button className="px-4 py-2 rounded-full font-medium bg-black text-white hover:bg-gray-800 transition-colors  
          cursor-pointer" onClick={()=>navigate("/demo")}>
            Book Demo
          </button> */}

          <ShimmerButton  onClick={()=>navigate("/demo")}>Book Demo</ShimmerButton>
        </div>
      </div>
      <div className="basis-[40%] h-full w-full flex items-center justify-center">
        <div className="bg-gray-100 w-full h-[350px] rounded-3xl p-8 relative z-10">
          <div className="space-y-8 flex justify-center flex-col w-full h-full">
            <FeatureItem 
              icon={<Network className="h-5 w-5 text-gray-600" />} 
              text="Multi-agent orchestration" 
              tooltipText="Orchestrate multiple agents to work together seamlessly."
            />
            <FeatureItem 
              icon={<CheckSquare className="h-5 w-5 text-gray-600" />} 
              text="Inbuilt Agent evaluation" 
              tooltipText="Evaluate agent performance with built-in tools."
            />
            <FeatureItem 
              icon={<Cloud className="h-5 w-5 text-gray-600" />} 
              text="Runs locally on cloud" 
              tooltipText="Deploy and run agents on your local cloud infrastructure."
            />
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}