import React from 'react'
import { Link } from 'react-router-dom'

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-sm text-gray-600 hover:text-gray-900">
    {children}
  </Link>
)

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }> = 
  ({ children, variant = 'primary', ...props }) => (
  <button
    className={`px-4 py-2 rounded-full font-medium ${
      variant === 'primary'
        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    }`}
    {...props}
  >
    {children}
  </button>
)
const OButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }> = 
  ({ children,  ...props }) => (
  <button
    className={`px-4 py-2 rounded-full font-medium ${
    
        'border border-gray-300 text-gray-700 hover:bg-gray-50'
    }`}
    {...props}
  >
    {children}
  </button>
)



const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)



const Navbar =()=> {
  return (
    <div className="bg-white w-full shadow-xl fixed left-0 top-0 z-[99]">
      <nav className="container mx-auto px-4 py-4   ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold">Spider</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavItem to="#">
              PRE-BUILT AGENTS <ChevronDown className="inline ml-1 w-4 h-4" />
            </NavItem>
            <NavItem to="#">AGENT API</NavItem>
            <NavItem to="#">PRICING</NavItem>
            <NavItem to="#">
              RESOURCES <ChevronDown className="inline ml-1 w-4 h-4" />
            </NavItem>
          </div>
          <div className="flex space-x-4 items-center">
            <OButton>
            Agent API Studio
            </OButton>
            <Button>Book Demo</Button>
          </div>
        </div>
      </nav>

    
    </div>
  )
}



export default Navbar