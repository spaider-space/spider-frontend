import React from "react";
import { useNavigate } from "react-router-dom";
import Blog from "../assets/blog.webp";
import Porter from "../assets/porter.webp";
interface BlogCardProps {
  imageSrc: string;
  title: string;
  id: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, title, id }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[300px] bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300  z-[2] hover:shadow-xl">
      <div className="relative">
        <img src={imageSrc} alt="blog" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <button
          className="px-4 py-2 bg-white text-black font-medium rounded-full border border-black hover:bg-gray-100 transition duration-300"
          onClick={() => navigate(`/blogs/${id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};
const Blogs = () => {
  return (
    <div className="container h-screen mx-auto px-4 mt-[120px] ">
      <h1 className="text-center mb-10  text-4xl font-bold">
        Blogs- tech insights
      </h1>
      <div className="flex justify-center h-auto  items-center gap-10">
        <BlogCard
          imageSrc={Porter}
          title="Porter AI: Your Autonomous Space Industry Analyst"
          id="2"
        />
        <BlogCard
          imageSrc={Blog}
          title="Harnessing the Future: The Rise of AI Engineering Agents"
          id="1"
        />
        <BlogCard
          imageSrc={Porter}
          title="Porter AI: Your Autonomous Space Industry Analyst"
          id="2"
        />
      </div>
    </div>
  );
};

export default Blogs;
