
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {

  return (
//     <div  className="bg-white">
// <div  className="max-w-[1400px] mx-auto px-[20px] flex flex-col    ">
      <Router>
<Navbar  />

<Routes>
  <Route path="/" element={  <Home   />} />
</Routes>
    
<Footer />
      </Router>
    // </div>
    // </div>
    
  )
}

export default App
