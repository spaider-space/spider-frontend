import React from 'react';
interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  ctaLink: string;
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
}
const CheckIcon = () => (
  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const PricingCard: React.FC<PricingCardProps> = ({ title, price, period, features, cta, ctaLink, }) => (
  <div className={`rounded-2xl shadow-lg flex flex-col justify-between `}   style={{
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
  }}>
    <div className="px-6 py-8">
      <h3 className={`text-2xl font-bold mb-2 `}>{title}</h3>
      <div className={`text-4xl font-bold mb-2 `}>{price}</div>
      <div className={`text-sm mb-6 `}>{period}</div>
      <ul className="mb-6">
        {features.map((feature:string, index:number) => (
          <li key={index} className="flex items-center mb-2">
            <CheckIcon />
            <span className={`ml-2 `}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 pb-8">
      <a
        href={ctaLink}
        className={`block w-full px-4 py-2 text-center font-bold text-white rounded-lg bg-purple-500 hover:opacity-90 transition duration-150`}
      >
        {cta}
      </a>
    </div>
  </div>
);

export default function PricingSection() {
  return (
    <div className="  my-4 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Pricing</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transparent and fixed <span className="text-purple-600">Pricing</span>
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            No throttling, no surprises
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <PricingCard
            title="Pilot Program"
            price="Free"
            period="for 3 months"
            features={[
              "Use Case Discovery",
              "Proof of concept",
              "Up to 3 use cases",
              "Custom Integrations",
              "Available as SaaS or hosted on your cloud"
            ]}
            cta="Book a Demo"
            ctaLink="#"
            bgColor="bg-purple-600"
            textColor="text-white"
            buttonColor="bg-white text-purple-600"
          />

          <PricingCard
            title="Custom AI Agents"
            price="$399"
            period="/ agent / month"
            features={[
              "Powerful multi-task agents",
              "Inbuilt agent evaluation",
              "Complex workflow orchestration",
              "Multiple agent UI options",
              "Available as SaaS or hosted on your cloud"
            ]}
            cta="Build now"
            ctaLink="#"
          />

          <PricingCard
            title="Pre-built Agents"
            price="$1999"
            period="/ pre-built agent / month"
            features={[
              "Customizable backend workflows",
              "World class agent UI",
              "100% data privacy",
              "Enterprise integrations",
              "24/7 technical support",
              "White glove onboarding"
            ]}
            cta="Learn More"
            ctaLink="#"
          />
        </div>
      </div>
    </div>
  );
}