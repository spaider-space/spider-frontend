import { useNavigate } from "react-router-dom"

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
const ComingSoon = () => {
  const navigate = useNavigate()
  return (
  

  <div className=" container mx-auto px-4 py-8 ">
    <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-xl py-8">
    <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Join the waiting list
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold">
          Be the first to experience our revolutionary product.
        </h3>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Early access to cutting-edge features. Priority onboarding.
          Exclusive insights from our team.
        </p>
        <Button 
        onClick={()=>navigate("/waitinglist")}
        className="bg-white text-gray-900 hover:bg-gray-200 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
          Join Waitlist
        </Button>
      </div>
    </div>
    
    </div>
  )
}

export default ComingSoon