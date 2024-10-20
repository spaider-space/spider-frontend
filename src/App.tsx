import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogOne from "./pages/blogs/BlogOne";
import BlogTwo from "./pages/blogs/BlogTwo";
import WaitingList from "./pages/WaitingList";
import BookDemo from "./pages/BookDemo";
import Pricings from "./pages/Pricings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    //     <div  className="bg-white">
    // <div  className="max-w-[1400px] mx-auto px-[20px] flex flex-col    ">
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/1" element={<BlogOne />} />
        <Route path="/blogs/2" element={<BlogTwo />} />
        <Route path="/waitinglist" element={<WaitingList />} />
        <Route path="/demo" element={<BookDemo />} />
        <Route path="/pricing" element={<Pricings />} />
      </Routes>

      <Footer />
    </Router>
    // </div>
    // </div>
  );
}

export default App;
