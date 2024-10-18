// import React from 'react'


// import { Link } from 'react-router-dom'
// import Logo from "../assets/logo.svg"

// const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
//   <Link to={href} className="text-gray-400 hover:text-white transition-colors">
//     {children}
//   </Link>
// )

// const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
//   <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
//     {icon}
//   </a>
// )


// const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }> = 
//   ({ children, variant = 'primary', ...props }) => (
//   <button
//     className={`px-4 py-2 rounded-full font-medium ${
//       variant === 'primary'
//         ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
//         : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
//     }`}
//     {...props}
//   >
//     {children}
//   </button>
// )

// const Footer = () => {
//   return (
//     <footer className="  w-full h-[300px] bg-gradient-to-b from-purple-50 to-white  flex  items-center">
//    <div  className=" mx-auto  container ">
//    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="space-y-4">
//         <div className="flex items-center space-x-2">
//             <img src={Logo} alt="spider" className="w-10 h-10"/>
          
//             <span className="text-xl font-bold">Spider</span>
//           </div>
//           <div className="flex space-x-4">
//             <FooterLink href="/terms">Terms of Service</FooterLink>
//             <FooterLink href="/privacy">Privacy Policy</FooterLink>
//           </div>
//           <p className="text-gray-400">© 2024 Spider, Inc.</p>
//         </div>
        
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Subscribe to our engineer newsletter</h3>
//           <p className="text-gray-400">
//             Get ahead in the latest in AI for Mechanical design - 
//             updates on new tools, tips, and best practices. Once a month.
//           </p>
//           {/* <button className="bg-[#4169e1] hover:bg-[#3a5cd1] text-white px-6 py-2 rounded-md transition-colors">
//             Subscribe
//           </button> */}
//           <Button>
//           Subscribe
//           </Button>
//         </div>
        
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Contact us</h3>
//           <address className="text-gray-400 not-italic">
//             160 Alewife Brook Pkwy #1095<br />
//             Cambridge, MA 02138<br /> 
//             United States
//           </address>
//           <p className="text-gray-400">hello@spider.ai</p>
//           <div className="flex space-x-4">
//             <SocialIcon 
//               href="https://linkedin.com" 
//               icon={
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               } 
//             />
//             <SocialIcon 
//               href="https://twitter.com" 
//               icon={
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//               } 
//             />
//           </div>
//         </div>
//       </div>
//    </div>
     
//   </footer>
//   )
// }

// export default Footer



import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Twitter } from 'lucide-react'

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link to={href} className="text-gray-600 hover:text-gray-900 transition-colors">
    {children}
  </Link>
)

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
    {icon}
  </a>
)

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded-full font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors"
    {...props}
  >
    {children}
  </button>
)

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div 
        className="flex justify-between items-start  gap-[10%]"
        // className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="space-y-4 basis-[30%]">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold text-gray-900">Spider</span>
            </div>
            <div className="flex space-x-4">
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </div>
            <p className="text-gray-600">© 2024 Spider, Inc.</p>
          </div>
          
          <div className="space-y-4  basis-[30%]">
            <h3 className="text-lg font-semibold text-gray-900">Subscribe to our engineer newsletter</h3>
            <p className="text-gray-600">
              Get ahead in the latest in AI for Mechanical design - 
              updates on new tools, tips, and best practices. Once a month.
            </p>
            <Button>
              Subscribe
            </Button>
          </div>
          
          <div className="space-y-4  basis-[30%]">
            <h3 className="text-lg font-semibold text-gray-900">Contact us</h3>
            <address className="text-gray-600 not-italic">
              160 Alewife Brook Pkwy #1095<br />
              Cambridge, MA 02138<br /> 
              United States
            </address>
            <p className="text-gray-600">hello@spider.ai</p>
            <div className="flex space-x-4">
              <SocialIcon 
                href="https://linkedin.com" 
                icon={<Linkedin className="w-6 h-6" />}
              />
              <SocialIcon 
                href="https://twitter.com" 
                icon={<Twitter className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer