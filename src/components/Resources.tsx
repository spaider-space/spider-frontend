import React from "react";
import { ShieldCheck, Clock, Users, BarChart3, Lock } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
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
