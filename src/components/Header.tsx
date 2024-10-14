import React from 'react'
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

// const FeatureItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
//   <div className="flex items-center space-x-2 bg-white rounded-lg p-3 shadow-sm">
//     {icon}
//     <span className="text-sm font-medium text-gray-800">{text}</span>
//   </div>
// )



const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)
const Header = () => {
  return (
          <main 
          className="container h-screen mx-auto px-4 ">
       
          <div 
          
          className="flex items-center justify-center flex-col h-full  space-y-14"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7.8L12 3L21 7.8V16.2L12 21L3 16.2V7.8Z" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L21 7.8" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12V21" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L3 7.8" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-semibold text-purple-800">Introducing Spider - The enterprise agent framework</span>
            </div>
            <h1 className="text-4xl md:text-5xl  text-center font-bold text-gray-900 mb-4">
            Revolutionizing Aerospace Intelligence with AI-Driven Precision
            </h1>
            <p className="text-xl text-gray-600 mb-6">Our Mission: Developing the most advanced AI for aerospace professionals accelerating innovation and informed decision-making</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button>
                Book a Demo <ChevronRight className="inline-block ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline">
                Explore Pre-built Agents <ChevronRight className="inline-block ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          
      </main>
  )
}

export default Header