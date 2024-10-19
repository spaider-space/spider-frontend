import React, { useState, useEffect } from "react";
import agentOne from "../assets/agent-one.webp";
import agentTwo from "../assets/agent-two.jpg";
import agentThree from "../assets/agent-three.jpg";
import { useNavigate } from "react-router-dom";
// const carouselData = [
//   {
//     id: 1,
//     image:agentOne,
//     title: 'Zephyr',
//     description: 'Intelligent Search Engine Agent'
//   },
//   {
//     id: 2,
//     image: agentTwo,
//     title: 'SYNTRA',
//     description: 'Data Collection and Integration Agent'
//   },
//   {
//     id: 3,
//     image: agentThree,
//     title: 'Vigilis',
//     description: 'Risk Assessment and Management Agent'
//   },
//   // {
//   //   id: 4,
//   //   image: '/placeholder.svg?height=200&width=200',
//   //   title: 'Fourth Card',
//   //   description: 'And finally, we wrap up with the fourth and final card of our carousel.'
//   // }
// ]

const cardsData = [
  {
    id: 1,
    image: agentOne,
    title: "Zephyr",
    description: "Intelligent Search Engine Agent",
  },
  {
    id: 2,
    image: agentTwo,
    title: "Syntra",
    description: "Data Collection and Integration Agent",
  },
  {
    id: 3,
    image: agentThree,
    title: "Vigilis",
    description: "Risk Assessment and Management Agent",
  },
];

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline";
  }
> = ({ children, variant = "primary", ...props }) => (
  <button
    className={`px-4 py-2 rounded-full font-medium ${
      variant === "primary"
        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
    }`}
    {...props}
  >
    {children}
  </button>
);

const OButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline";
  }
> = ({ children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-full font-medium ${"border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
    {...props}
  >
    {children}
  </button>
);

const AgentCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };
  return (
    <div className="h-screen flex justify-start items-center space-y-10 flex-col">
      <h1 className="text-4xl md:text-5xl  text-center font-bold text-gray-900 mb-4 ">
        Meet SPAIDER’s AI Agents
      </h1>
      <div className="relative w-full  max-w-[860px] mx-auto">
        <div className="overflow-hidden   rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out  "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="w-full flex justify-center  flex-shrink-0"
              >
                <div className="bg-[#F3F0FF] p-6 rounded-lg    shadow-md">
                  <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                  <div className="relative rounded-lg overflow-hidden mb-4 h-[500px] w-[700px] ">
                    <img
                      src={card.image}
                      alt="AI assistant"
                      className="w-full  h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-xl  text-gray-900 mb-4">
                    {card.description}
                  </p>
                  <div className="flex space-x-10">
                    <OButton>Learn More</OButton>

                    <Button onClick={() => navigate("/")}>Book Demo</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
      </div>
    </div>
  );
};

export default AgentCarousel;
