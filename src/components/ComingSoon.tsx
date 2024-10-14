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
  return (
    <section className=" text-white h-[500px]">
   
        <div className=" flex justify-center items-center flex-col space-y-10">
        <span className="text-purple-600  text-2xl">Coming soon...</span>
         
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Generate custom parts
            </h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Describe the functionality or geometry of the required component and get an editable CAD part with its feature tree
          </p>
        
          <Button>
          Join waitlist
          </Button>
        </div>
      
  </section>
  )
}

export default ComingSoon