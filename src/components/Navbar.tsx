import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Down from "../assets/downarrow.svg";
import ShimmerButton from "./ui/shimmer-button";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";

type subitem = {
  title: string;
  route: string;
};
type NavItemProps = {
  title: string;
  subItems?: subitem[];
};
export default function Navbar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-white w-full shadow-xl fixed left-0 top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="spider" className="w-8 h-8" />
            <span className="text-xl font-bold text-black">
              Sp
              <span className="text-black text-[24px]">AI</span>der
            </span>
          </div>
          <ul className="hidden md:flex space-x-8">
            <NavItem
              title="Agents"
              subItems={[
                {
                  title: "General Purpose Agents",
                  route: "/generalpurposeagents",
                },
                {
                  title: "Domain Expert Agents",
                  route: "/domainexpertagenst",
                },
                {
                  title: "Customize Your Agent",
                  route: "/customiseyouragent",
                },
              ]}
            />
            <NavItem title="Pricing" />
            <NavItem
              title="Resources"
              subItems={[
                {
                  title: "Blog",
                  route: "blogs",
                },
                {
                  title: "Use Cases",
                  route: "/usecases",
                },
              ]}
            />
          </ul>
          <div className="hidden md:flex">
            <ShimmerButton onClick={() => navigate("/demo")}>
              Book Demo
            </ShimmerButton>
          </div>
          <div className="md:hidden">
            <img
              src={Menu}
              className="w-8 h-8   cursor-pointer"
              alt="menu"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
          </div>
        </div>
      </nav>
      <div className="md:hidden">{openMenu && <MobileMenu />}</div>
    </div>
  );
}

function NavItem({ title, subItems = [] }: NavItemProps) {
  console.log(title, "subtimes");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li className="text-sm font-medium flex items-center space-x-1 cursor-pointer text-black">
        {title === "Pricing" ? (
          <span>
            <Link to="/pricing">{title}</Link>
          </span>
        ) : (
          <span> {title}</span>
        )}

        {subItems.length > 0 && (
          <span className="mt-1">
            <img src={Down} className="w-3 h-3" alt="Expand" />
          </span>
        )}
      </li>

      {isOpen && subItems?.length > 0 && (
        <ul className="absolute capitalize top-full left-0 w-48 space-y-4 bg-white p-5 rounded-md shadow-md">
          {subItems.map((item, index) => (
            <li
              key={index}
              className="text-sm font-medium cursor-pointer text-black hover:text-gray-600 transition-colors"
            >
              <Link to={`/${item.route}`}>{item?.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const MobileMenu = () => {
  const [expandedSections, setExpandedSections] = useState({
    agents: true,
    resources: true,
  });
  const navigate = useNavigate();

  const toggleSection = (section: string) => {
    setExpandedSections((prev: any) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div className="bg-white p-4 w-full max-w-md mx-auto font-sans">
      {/* <button className="absolute top-4 right-4 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}

      <div className="space-y-4">
        <div>
          <button
            className="flex justify-between items-center w-full text-left  font-semibold"
            onClick={() => toggleSection("agents")}
          >
            AGENTS
            {expandedSections.agents ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
          {expandedSections.agents && (
            <ul className="mt-2 space-y-2 pl-[10px]  ">
              <li>
                <Link to="/generalpurposeagents">General Purpose Agents</Link>
              </li>
              <li>
                <Link to="/domainexpertagenst">Domain Expert Agents</Link>
              </li>
              <li>
                <Link to="/customiseyouragent">Customize Your Agent</Link>
              </li>
            </ul>
          )}
        </div>

        <div>
          <button className="text-left w-full    font-semibold">
            <Link to="/pricing">PRICING</Link>
          </button>
        </div>

        <div>
          <button
            className="flex justify-between items-center w-full   font-semibold text-left"
            onClick={() => toggleSection("resources")}
          >
            RESOURCES
            {expandedSections.resources ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
          {expandedSections.resources && (
            <ul className="mt-2 space-y-2  pl-[10px]">
              <li>
                <Link to="/blogs">BLOG</Link>
              </li>
              <li>
                <Link to="/usecases">USECASES</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-4  ">
        <ShimmerButton className="w-full" onClick={() => navigate("/demo")}>
          Book Demo
        </ShimmerButton>
      </div>
    </div>
  );
};
