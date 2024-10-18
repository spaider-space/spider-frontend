// import React from 'react';

// const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
//   <div className="bg-white p-6 rounded-xl shadow-lg">
//     <div className="text-purple-600 mb-4">{icon}</div>
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

// const Resources =()=> {
//   return (
//     <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-2">
//           Spider's AI adoption
//         </h2>
//         <h3 className="text-3xl font-bold text-center mb-12">
//           <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">for enterprises</span>
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           <FeatureCard
//             icon={
//               <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             }
//             title="Data Privacy"
//             description="SDKs can be hosted 100% locally or on your cloud as docker containers. The application logic, sensitive data always remains within customer's infra."
//           />
//           <FeatureCard
//             icon={
//               <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             }
//             title="24*7 Enterprise Support"
//             description="Any production issues? Get 24*7 phone and email support from Lyzr team, ensuring prompt updates within a 30-minute SLA."
//           />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <FeatureCard
//             icon={
//               <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             }
//             title="White Glove Onboarding"
//             description="Get direct help from Lyzr's AI engineers and solutions team to navigate through your AI deployments."
//           />
//           <FeatureCard
//             icon={
//               <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//             }
//             title="AI Management System"
//             description="Monitor all your AI agents in one place with Lyzr's AIMS platform that runs locally on your cloud."
//           />
//           <FeatureCard
//             icon={
//               <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//             }
//             title="Enterprise AI Safety"
//             description="Lyzr's Agent SDKs meet ISO 42001 AI safety standards & SOC2 compliance of the respective cloud platforms."
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Resources




import React from 'react';
import { ShieldCheck, Clock, Users, BarChart3, Lock } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <div className="text-gray-800 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default function Resources() {
  return (
    <div className=" container mx-auto   py-16 px-4 sm:px-4 lg:px-4">
      <div className="border border-gray-300 rounded-xl px-4 pb-4">
        <h2 className="text-3xl font-bold text-center mt-4 mb-2 text-gray-900">
          Spider's AI adoption
        </h2>
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
          for enterprises
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <FeatureCard
            icon={<Lock className="w-8 h-8" />}
            title="Data Privacy"
            description="SDKs can be hosted 100% locally or on your cloud as docker containers. The application logic, sensitive data always remains within customer's infra."
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8" />}
            title="24*7 Enterprise Support"
            description="Any production issues? Get 24*7 phone and email support from Lyzr team, ensuring prompt updates within a 30-minute SLA."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="White Glove Onboarding"
            description="Get direct help from Lyzr's AI engineers and solutions team to navigate through your AI deployments."
          />
          <FeatureCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="AI Management System"
            description="Monitor all your AI agents in one place with Lyzr's AIMS platform that runs locally on your cloud."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-8 h-8" />}
            title="Enterprise AI Safety"
            description="Lyzr's Agent SDKs meet ISO 42001 AI safety standards & SOC2 compliance of the respective cloud platforms."
          />
        </div>
      </div>
    </div>
  );
}