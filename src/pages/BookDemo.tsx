import { useState, ChangeEvent, FormEvent } from 'react'

type ButtonProps = {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
)

type InputProps = {
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 ${className}`}
    {...props}
  />
)

// type CheckboxProps = {
//   id: string
//   label: string
// } & React.InputHTMLAttributes<HTMLInputElement>

// const Checkbox: React.FC<CheckboxProps> = ({ id, label, ...props }) => (
//   <div className="flex items-center">
//     <input
//       type="checkbox"
//       id={id}
//       className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
//       {...props}
//     />
//     <label htmlFor={id} className="ml-2 text-sm text-gray-600">
//       {label}
//     </label>
//   </div>
// )

type SelectProps = {
  children: React.ReactNode
  className?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>

const Select: React.FC<SelectProps> = ({ children, className, ...props }) => (
  <select
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 ${className}`}
    {...props}
  >
    {children}
  </select>
)

const CheckCircle: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

type FormData = {
  name: string
  company: string
  email: string
  usecases: string[]
  source: string
}

const BookDemo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    usecases: [],
    source: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Send the data to the server or handle it as needed
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex justify-center items-start w-full h-full">
        <div className="basis-[40%] flex flex-col justify-start">
          <h1 className="text-4xl font-bold mb-6">
            We'd love to <span className="text-gray-600">show you around!</span>
          </h1>
          <ul className="space-y-4">
            {[
              "No sales pitches - just a quick tour.",
              "See real results in action.",
              "Personalized for your needs.",
              "Answers to your questions, live.",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-[50%] max-w-[400px]  bg-gray-50 p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div  className="">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="eg: Jack Sparrow"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company name
              </label>
              <Input
                id="company"
                name="company"
                placeholder="eg: spider"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Work Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="eg: spider@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="source" className="block text-sm font-medium text-gray-700">
                Agent you are interested in?
              </label>
              <Select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleInputChange}
              >
                <option value="">Please Select</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="other">Other</option>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-700 text-white"
            >
              Book Demo
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookDemo;
