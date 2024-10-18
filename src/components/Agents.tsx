// import React, { useState } from 'react';
// import agentOne from "../assets/agent-one.webp"
// import agentTwo from "../assets/agent-two.jpg"
// import agentThree from "../assets/agent-three.jpg"
// type AgentListItemProps = {
//     name: string;
//     role: string;
//     isActive: boolean;
//     onClick: () => void;
//   };

//   type AgentCardProps = {
//     name: string;
//     role: string;
//     description: string;
//     videoSrc: string;
//   };

//   type Agent = {
//     name: string;
//     role: string;
//     description: string;
//     image:string
//   };
  
  
// const AgentListItem: React.FC<AgentListItemProps> = ({ name, role, isActive, onClick }) => (
//   <button
//     className={`flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-colors ${
//       isActive ? 'bg-purple-600 text-white' : 'bg-white text-gray-800 hover:bg-purple-100'
//     }`}
//     onClick={onClick}
//   >
//     <span>{name} - {role}</span>
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//     </svg>
//   </button>
// );

// // const AgentCard: React.FC<AgentCardProps> = ({ name, role, description, videoSrc }) => (
// //   <div className="bg-white rounded-lg overflow-hidden shadow-lg  ">
// //     <div className="p-6">
// //       <h3 className="text-2xl font-bold mb-2">See {name} in action</h3>
// //       <div className="aspect-w-16 aspect-h-9 mb-4  ">
// //         <img src={videoSrc} alt={`${name} in action`} className="object-cover rounded-lg" />
// //       </div>
// //       <h4 className="text-xl font-semibold mb-2">{name} - {role}</h4>
// //       <p className="text-gray-600 mb-4">{description}</p>
// //       <div className="flex space-x-4">
// //         <button className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-full border border-purple-600 hover:bg-purple-50 transition duration-300">
// //           Learn More
// //         </button>
// //         <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-600 transition duration-300">
// //           Book Demo
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // );
// const AgentCard: React.FC<AgentCardProps> = ({ name, role, description, videoSrc }) => (
//   <div 
//   className="bg-white rounded-lg overflow-hidden shadow-lg w-full flex flex-col"
//   >
//     <div 
//     className="py-2 px-4 flex-grow h-full"
//     >
//       <h3 className="text-xl font-bold mb-2">See {name} in action</h3>
//       <div 
//       className="aspect-w-16   aspect-h-9 mb-3  "
//       >
//         <img src={videoSrc} alt={`${name} in action`} className="object-cover rounded-lg " />
//       </div>
//       <h4 className="text-lg font-semibold mb-2">{name} - {role}</h4>
//       <p className="text-gray-600 mb-2 text-sm">{description}</p>
//     </div>
//     <div className="px-4 py-2 flex space-x-4">
//       <button className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-full border border-purple-600 hover:bg-purple-50 transition duration-300">
//         Learn More
//       </button>
//       <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-600 transition duration-300">
//         Book Demo
//       </button>
//     </div>
//   </div>
// );

// const ListAgents =() => {
//   const [activeAgent, setActiveAgent] = useState('Jazon');
//   // const [activeTab, setActiveTab] = useState('pre-built');

//   const agents: Agent[] = [
//     { name: 'Jazon', role: 'AI SDR', description: 'The ultimate AI SDR that handles outreach, follows up, and drives sales effortlessly.', 
//         image:agentOne
//     },
//     { name: 'Skott', role: 'AI Marketer', description: 'An AI-powered marketing assistant that optimizes campaigns and boosts engagement.',image:agentTwo },
//     { name: 'Diane', role: 'AI HR', description: 'Streamline your HR processes with AI-driven recruitment and employee management.',image:agentThree },
//     { name: 'Devi', role: 'AI Data Analyzer', description: 'Unlock insights from your data with advanced AI analysis and visualization.',image:agentOne },
//   ];

//   return (
//     <div className="bg-gray-100 py-4 px-4 sm:px-4 lg:px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-center mb-8">
//            Spider agents 
//         </h2>
//         {/* <div className="flex justify-center mb-8">
//           <div className="inline-flex rounded-full p-1 bg-purple-100">
//             <button
//               className={`px-4 py-2 rounded-full ${
//                 activeTab === 'pre-built' ? 'bg-purple-600 text-white' : 'text-purple-600'
//               }`}
//               onClick={() => setActiveTab('pre-built')}
//             >
//               Pre-built agents
//             </button>
//             <button
//               className={`px-4 py-2 rounded-full ${
//                 activeTab === 'custom' ? 'bg-purple-600 text-white' : 'text-purple-600'
//               }`}
//               onClick={() => setActiveTab('custom')}
//             >
//               Custom agents
//             </button>
//           </div>
//         </div> */}
       
//         <div 
//         // className="grid grid-cols-1 lg:grid-cols-3 gap-8"

//         className="flex justify-between items-start "
//         >
//           <div 
//           className="basis-[40%]"
//           // className="lg:col-span-1"
//           >
//             <div className="bg-purple-50 rounded-lg p-4 space-y-2">
//               {agents.map((agent) => (
//                 <AgentListItem
//                   key={agent.name}
//                   name={agent.name}
//                   role={agent.role}
//                   isActive={activeAgent === agent.name}
//                   onClick={() => setActiveAgent(agent.name)}
//                 />
//               ))}
//             </div>
//           </div>
//           <div 
//           // className="lg:col-span-2"
//           className="basis-[55%] w-full "
//           >
//             <AgentCard
//               name={activeAgent}
//               role={agents.find(a => a.name === activeAgent)?.role || ''}
//               description={agents.find(a => a.name === activeAgent)?.description || ''}
//               videoSrc={agents.find(a => a.name === activeAgent)?.image || ''}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default ListAgents


import React, { useState } from 'react';
import agentOne from "../assets/agent-one.webp"
import agentTwo from "../assets/agent-two.jpg"
import agentThree from "../assets/agent-three.jpg"
import { useNavigate } from 'react-router-dom';

type AgentListItemProps = {
  name: string;
  role: string;
  isActive: boolean;
  onClick: () => void;
};

type AgentCardProps = {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
};

type Agent = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const AgentListItem: React.FC<AgentListItemProps> = ({ name, role, isActive, onClick }) => (
  <button
    className={`flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-colors ${
      isActive ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    <span className="text-sm font-medium">{name} - {role}</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </button>
);

// const AgentCard: React.FC<AgentCardProps> = ({ name, role, description, imageSrc }) => (
//   <div className="bg-white rounded-lg overflow-hidden shadow-md w-full flex flex-col h-[520px]">
//     <div className="relative w-full pb-[56.25%]">
//       <img src={imageSrc} alt={`${name} in action`} className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//       <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">See {name} in action</h3>
//     </div>
//     <div className="p-6 flex-grow flex flex-col">
//       <h4 className="text-base font-semibold mb-2 text-gray-800">{name} - {role}</h4>
//       <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
//       <div className="flex space-x-2">
//         <button className="flex-1 py-2 bg-white text-gray-800 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition duration-300">
//           Learn More
//         </button>
//         <button className="flex-1 py-2 bg-gray-800 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition duration-300">
//           Book Demo
//         </button>
//       </div>
//     </div>
//   </div>
// );



// const AgentCard: React.FC<AgentCardProps> = ({ name, role, description, imageSrc }) => (
//   <div className="bg-white rounded-lg overflow-hidden shadow-md w-full flex flex-col h-auto">
//     {/* Image with 16:9 Aspect Ratio */}
//     <div className="relative w-full pb-[56.25%]">
//       <img src={imageSrc} alt={`${name} in action`} className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//       <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">See {name} in action</h3>
//     </div>
    
//     {/* Agent Info Section */}
//     <div className="p-6 flex-grow flex flex-col">
//       <h4 className="text-base font-semibold mb-2 text-gray-800">{name} - {role}</h4>
//       <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>

//       {/* Buttons Section */}
//       <div className="flex space-x-2">
//         <button className="flex-1 py-2 bg-white text-gray-800 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition duration-300">
//           Learn More
//         </button>
//         <button className="flex-1 py-2 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition duration-300">
//           Book Demo
//         </button>
//       </div>
//     </div>
//   </div>
// );


const AgentCard: React.FC<AgentCardProps> = ({ name, role, description, imageSrc }) => {

  const navigate = useNavigate()
  return (<div className="bg-white rounded-lg overflow-hidden shadow-md w-full flex flex-col h-auto">
    {/* Image with 16:9 Aspect Ratio */}
    <div className="relative w-full pb-[56.25%]">  {/* 16:9 Aspect Ratio */}
      <img src={imageSrc} alt={`${name} in action`} className="absolute inset-0 w-full h-full object-contain" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">See {name} in action</h3>
    </div>
    
    {/* Agent Info Section */}
    <div className="p-6 flex-grow flex flex-col">
      <h4 className="text-base font-semibold mb-2 text-gray-800">{name} - {role}</h4>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>

      {/* Buttons Section */}
      <div className="flex space-x-2">
        <button className="flex-1 py-2 bg-white text-gray-800 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition duration-300">
          Learn More
        </button>
        <button className="flex-1 py-2 bg-gray-900 text-white
         text-sm font-medium rounded-full hover:bg-gray-700 transition duration-300"  
         onClick={()=>navigate("/demo")}
         >
          Book Demo
        </button>
      </div>
    </div>
  </div>
  )
}

export default function ListAgents() {
  const [activeAgent, setActiveAgent] = useState('Jazon');

  const agents: Agent[] = [
    { name: 'Jazon', role: 'AI SDR', description: 'The ultimate AI SDR that handles outreach, follows up, and drives sales effortlessly.', image: agentOne },
    { name: 'Skott', role: 'AI Marketer', description: 'An AI-powered marketing assistant that optimizes campaigns and boosts engagement.', image: agentTwo },
    { name: 'Diane', role: 'AI HR', description: 'Streamline your HR processes with AI-driven recruitment and employee management.', image: agentThree },
    { name: 'Devi', role: 'AI Data Analyzer', description: 'Unlock insights from your data with advanced AI analysis and visualization.', image: agentOne },
  ];

  return (
    <div className="  container mx-auto py-8 px-4 sm:px-4 lg:px-4">
      <div className="border border-gray-300  rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Spider Agents
        </h2>
        <div className="flex flex-col md:flex-row justify-between py-4  px-4 items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-2/5">
            <div className="bg-gray-100 rounded-lg px-2 py-4 mx-2 space-y-2">
              {agents.map((agent) => (
                <AgentListItem
                  key={agent.name}
                  name={agent.name}
                  role={agent.role}
                  isActive={activeAgent === agent.name}
                  onClick={() => setActiveAgent(agent.name)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <AgentCard
              name={activeAgent}
              role={agents.find(a => a.name === activeAgent)?.role || ''}
              description={agents.find(a => a.name === activeAgent)?.description || ''}
              imageSrc={agents.find(a => a.name === activeAgent)?.image || ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
}