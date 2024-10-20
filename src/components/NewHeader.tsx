import { useState } from "react";
import { Network, CheckSquare, Cloud } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShimmerButton from "./ui/shimmer-button";
import RetroGrid from "./ui/retro-grid";
import { MagicCard } from "./ui/magic-card";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "./ui/animated-shiny-text";
import GradualSpacing from "./ui/gradual-spacing";
const FeatureItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  tooltipText: string;
}> = ({ icon, text, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    // <div
    //   className="relative flex items-center space-x-2 bg-white rounded-lg p-3 h-[60px]  shadow-sm border border-gray-200  w-[400px]"
    //   onMouseEnter={() => setShowTooltip(true)}
    //   onMouseLeave={() => setShowTooltip(false)}
    // >
    //   {icon}
    //   <span className="text-sm font-medium text-gray-800">{text}</span>

    //   {showTooltip && (
    //     <div className="absolute top-[-20px] right-[-150px] transform -translate-x-1/2 px-3 py-2 rounded-lg bg-gray-800 text-white text-xs shadow-lg z-50">
    //       {tooltipText}
    //     </div>
    //   )}
    // </div>

    <div
      className="relative flex items-center space-x-2 bg-white rounded-lg p-3 h-[60px] shadow-sm border border-gray-200  w-[350px]"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {icon}
      <span className="text-sm font-medium text-gray-800">{text}</span>

      {showTooltip && (
        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg bg-gray-800 text-white text-xs shadow-lg z-50 w-max">
          {tooltipText}
        </div>
      )}
    </div>
  );
};
const NewHeader = () => {
  const navigate = useNavigate();

  return (
    // <div className="relative flex  flex-col md:flex-row h-[500px]  mt-[130px] w-full items-center justify-between overflow-hidden rounded-lg border bg-background px-4">
    //   <div className="basis-[50%] w-full h-full flex flex-col justify-center space-y-12">
    //     <div
    //       className="max-w-[300px]   "
    //       // className="z-10 flex min-h-64 items-center justify-center"
    //     >
    //       <div
    //         className={cn(
    //           "group rounded-full  py-2 border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    //         )}
    //       >
    //         <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
    //           <strong className="text-xl">
    //             ✨ Introducing Sp
    //             <span className="text-black text-[28px]">AI</span>der
    //           </strong>
    //           {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
    //         </AnimatedShinyText>
    //       </div>
    //     </div>
    //     <h1
    //       className="text-3xl md:text-4xl font-bold text-gray-600  flex flex-col items-start"
    //       style={{ lineHeight: "1.3" }}
    //     >
    //       Build reliable, private <br /> and self-learning <br />{" "}
    //       <GradualSpacing
    //         className="  text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl "
    //         text="AI Agents"
    //       />
    //       {/* <span className="text-gray-700">AI agents.</span> */}
    //     </h1>
    //     <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    //       {/* <button className="px-4 py-2 rounded-full font-medium bg-black text-white hover:bg-gray-800 transition-colors
    //       cursor-pointer" onClick={()=>navigate("/demo")}>
    //         Book Demo
    //       </button> */}

    //       <ShimmerButton onClick={() => navigate("/demo")}>
    //         Book Demo
    //       </ShimmerButton>
    //     </div>
    //   </div>

    //   <MagicCard
    //     gradientColor={"#66666655 "}
    //     className="basis-[40%]  flex items-center justify-center h-[350px] bg-gray-200 "
    //   >
    //     <div className="space-y-8 flex justify-center flex-col   w-full h-full">
    //       <FeatureItem
    //         icon={<Network className="h-5 w-5 text-gray-600" />}
    //         text="Multi-agent orchestration"
    //         tooltipText="Orchestrate multiple agents to work together seamlessly."
    //       />
    //       <FeatureItem
    //         icon={<CheckSquare className="h-5 w-5 text-gray-600" />}
    //         text="Inbuilt Agent evaluation"
    //         tooltipText="Evaluate agent performance with built-in tools."
    //       />
    //       <FeatureItem
    //         icon={<Cloud className="h-5 w-5 text-gray-600" />}
    //         text="Runs locally on cloud"
    //         tooltipText="Deploy and run agents on your local cloud infrastructure."
    //       />
    //     </div>
    //   </MagicCard>

    //   <RetroGrid />
    // </div>

    <div className="relative container flex flex-col md:flex-row min-h-[500px] mt-[60px] md:mt-[130px] w-full items-center justify-between overflow-hidden rounded-lg border bg-background px-4 py-8 md:py-0 ">
      <div className="w-full md:basis-[50%] flex flex-col justify-center space-y-8 md:space-y-12 mb-8 md:mb-0">
        <div className="max-w-[300px] mx-auto md:mx-0">
          <div
            className={cn(
              "group rounded-full py-2 border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <strong className="text-lg md:text-xl">
                ✨ Introducing Sp
                <span className="text-black text-[22px] md:text-[28px]">
                  AI
                </span>
                der
              </strong>
            </AnimatedShinyText>
          </div>
        </div>
        <h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 flex flex-col items-center md:items-start text-center md:text-left"
          style={{ lineHeight: "1.3" }}
        >
          Build reliable, private <br /> and self-learning <br />{" "}
          <GradualSpacing
            className="text-3xl md:text-4xl lg:text-5xl font-bold -tracking-widest text-black dark:text-white"
            text="AI Agents"
          />
        </h1>
        <div className="flex justify-center md:justify-start">
          <ShimmerButton onClick={() => navigate("/demo")}>
            Book Demo
          </ShimmerButton>
        </div>
      </div>

      <MagicCard
        gradientColor={"#66666655"}
        className="w-full md:basis-[40%] flex items-center justify-center h-[350px] bg-gray-200"
      >
        <div className="space-y-4 md:space-y-8 flex justify-center flex-col w-full h-full px-4 md:px-0">
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
      </MagicCard>

      <RetroGrid />
    </div>
  );
};

export default NewHeader;
