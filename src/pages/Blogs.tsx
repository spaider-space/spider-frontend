import { useState, useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import Blog from ".././assets/blog.webp"
const sections = [
    { id: 'understanding', title: 'Understanding AI Engineering Agents' },
    { id: 'capabilities', title: 'Key Capabilities' },
    { id: 'trends', title: 'Current Trends' },
    { id: 'applications', title: 'Applications Across Industries' },
    { id: 'future', title: 'Future Outlook' },
    { id: 'challenges', title: 'Challenges and Considerations' },
    { id: 'conclusion', title: 'Conclusion' },
  ]
const Blogs = () => {

   

  const [activeSection, setActiveSection] = useState<string>('');
  const [readProgress, setReadProgress] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const contentElement = contentRef.current;
    if (contentElement) {
      const sectionElements = contentElement.querySelectorAll('section');
      sectionElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const contentElement = contentRef.current;
//       if (contentElement) {
//         const scrollPosition = window.scrollY;
//         const windowHeight = window.innerHeight;
//         const fullHeight = contentElement.offsetHeight;
//         const progress = (scrollPosition / (fullHeight - windowHeight)) * 100;
//         setReadProgress(Math.min(progress, 100));
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

 // Scroll event listener to calculate read progress
 useEffect(() => {
    const handleScroll = () => {
      const fullHeight = document.body.scrollHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = (scrollPosition / (fullHeight - windowHeight)) * 100;
      setReadProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to smoothly scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust for header or padding
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="min-h-screen ">
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
      <div
        className="h-full bg-blue-500 transition-all duration-300 ease-out"
        style={{ width: `${readProgress}%` }}
      ></div>
    </div>

    <header className="w-full h-[500px] bg-cover bg-top" style={{backgroundImage: `url(${Blog})`}}>
      <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white">Harnessing the Future: The Rise of AI Engineering Agents</h1>
      </div>
    </header>

    <div className="container mx-auto px-4 py-8 flex flex-col  justify-between md:flex-row">
      <nav 
    //   className="w-full md:w-1/4 mb-8 md:mb-0"
    className="basis-[30%] w-full max-w-[350px]  max-h-[400px] sticky top-[100px] self-start"

    style={{
        boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    }}
      >
        <ul className="sticky top-20 space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center w-full text-left p-2 rounded transition-colors ${
                  activeSection === section.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'
                }`}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main ref={contentRef} 
      className="basis-[60%]"
    //   className="w-full md:w-3/4"
      >
        <section id="understanding" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Understanding AI Engineering Agents</h2>
          <p className="text-[18px]">AI engineering agents are advanced AI systems designed to autonomously perform engineering tasks, make decisions, and solve complex problems. These agents leverage machine learning, deep neural networks, and other cutting-edge AI technologies to operate with a level of independence and problem-solving ability that rivals human engineers in specific domains.</p>
        </section>

        <section id="capabilities" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Capabilities of AI Engineering Agents</h2>
          <p className="text-[18px]">To fully grasp the potential of AI engineering agents, it's crucial to understand their core capabilities
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-[18px]"><strong>Autonomous Problem-Solving</strong>:AI engineering agents can analyze complex engineering challenges, formulate solutions, and execute them without constant human intervention</li>
            <li  className="text-[18px]"><strong>Adaptive Learning</strong>:These agents continuously learn from their experiences, improving their performance over time and adapting to new engineering scenarios</li>
            <li  className="text-[18px]"><strong>Multi-Domain Expertise</strong>:Advanced AI engineering agents can integrate knowledge from various engineering disciplines, enabling holistic problem-solving approaches</li>
            <li  className="text-[18px]"><strong>Predictive Analysis</strong>:By leveraging historical data and current trends, these agents can forecast potential issues and propose preemptive solutions</li>
            <li  className="text-[18px]"><strong>Collaborative Intelligence</strong>:AI engineering agents can work alongside human engineers, augmenting their capabilities and enhancing overall productivity</li>
          </ul>
        </section>

        <section id="trends" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Current Trends in AI Engineering Agents</h2>
          <p className="text-[18px]">The field of AI engineering agents is rapidly evolving, with several key trends shaping its development:

          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-[18px]"><strong>Integration of Large Language Models (LLMs)</strong>:LLMs are being incorporated into AI engineering agents, enhancing their ability to understand and generate human-like engineering documentation and communications</li>
            <li className="text-[18px]"><strong>Explainable AI in Engineering</strong>:There's a growing focus on making AI engineering agents' decision-making processes more transparent and interpretable to human engineers</li>
            <li className="text-[18px]"><strong>Edge Computing for Real-time Processing</strong>:AI engineering agents are increasingly leveraging edge computing to process data and make decisions in real time, crucial for time-sensitive engineering applications</li>
            <li className="text-[18px]"><strong>Quantum-Enhanced AI Agents</strong>:The integration of quantum computing with AI engineering agents is opening new frontiers in solving complex engineering problems that were previously intractable</li>
          </ul>
        </section>

        <section id="applications" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Applications Across Industries</h2>
          <p className="text-[18px]">AI engineering agents are finding applications across various sectors
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li   className="text-[18px]"><strong>Aerospace Engineering</strong>:In aircraft design, AI agents optimize aerodynamics, structural integrity, and fuel efficiency, significantly reducing development time and costs</li>
            <li  className="text-[18px]"><strong>Civil Engineering</strong>:AI agents assist in urban planning, structural analysis, and infrastructure maintenance, predicting potential issues before they occur</li>
            <li  className="text-[18px]"><strong>Software Engineering</strong>:In the realm of software development, AI agents are revolutionizing code generation, bug detection, and system architecture design</li>
            <li  className="text-[18px]"><strong>Environmental Engineering</strong>:AI agents are being employed to model climate change impacts, design sustainable systems, and optimize resource management</li>
          </ul>
        </section>

        <section id="future" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Future Outlook</h2>
          <p className="text-[18px]">As AI technology continues to advance, we can expect AI engineering agents to become more sophisticated and integral to engineering processes. Some predictions for the future include
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li  className="text-[18px]"><strong>Hyper-Personalized Engineering Solutions</strong>:AI agents will be able to tailor engineering solutions to highly specific contexts and requirements</li>
            <li  className="text-[18px]"><strong>Autonomous Engineering Systems</strong>:We may see fully autonomous engineering systems capable of designing, testing, and implementing solutions with minimal human oversight</li>
            <li  className="text-[18px]"><strong>Autonomous Engineering Systems</strong>:AI engineering agents will increasingly bridge gaps between different engineering disciplines, fostering innovative solutions that transcend traditional boundaries</li>
          </ul>
        </section>

        <section id="challenges" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Challenges and Considerations</h2>
          <p className="text-[18px]">While the potential of AI engineering agents is immense, several challenges need to be addressed:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li  className="text-[18px]"><strong>Ethical Considerations</strong>:Ensuring that AI agents make decisions aligned with human values and moral standards</li>
            <li  className="text-[18px]"><strong>Regulatory Frameworks</strong>: Developing appropriate regulations to govern the use of AI in critical engineering applications</li>
            <li  className="text-[18px]"><strong>Human-AI Collaboration</strong>:Optimizing the interaction between human engineers and AI agents to maximize both benefits</li>
            <li  className="text-[18px]"><strong>Data Privacy and Security</strong>:Protecting sensitive engineering data and intellectual property in AI-driven processes</li>
          </ul>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          
          <p className="text-[18px]">AI engineering agents represent a paradigm shift in how we approach engineering challenges. By harnessing the power of artificial intelligence, these agents are poised to revolutionize industries, accelerate innovation, and solve complex problems that were once thought impossible. As we continue to develop and refine these technologies, the future of engineering looks increasingly intelligent, efficient, and boundlessly creative.</p>
        </section>
      </main>
    </div>
  </div>
  )
}

export default Blogs