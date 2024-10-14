
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router } from "react-router-dom";
function App() {

  return (
    <div  className="max-w-[1400px] mx-auto px-[20px] flex flex-col ">
      <Router>

      <Home   />

      </Router>
    </div>
  )
}

export default App
