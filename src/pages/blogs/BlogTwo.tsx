import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Porter from "../../assets/porter.webp";
const sections = [
  {
    id: "understanding",
    title: "Porter AI: Your Autonomous Space Industry Analyst",
  },
  { id: "capabilities", title: "What Does a Space Industry Analyst Do?" },
  {
    id: "trends",
    title: "How Porter AI Revolutionizes Space Industry Analysis",
  },
  {
    id: "applications",
    title: "Benefits of Porter AI for Space Industry Stakeholders",
  },
  { id: "future", title: "How Porter AI Benefits Different Stakeholders" },
  { id: "conclusion", title: "The Future of Space Industry Analysis" },
];
const BlogTwo = () => {
  const [activeSection, setActiveSection] = useState<string>("");
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
      const sectionElements = contentElement.querySelectorAll("section");
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to smoothly scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust for header or padding
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="min-h-screen ">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-gray-500 transition-all duration-300 ease-out"
          style={{ width: `${readProgress}%` }}
        ></div>
      </div>

      <header
        className="w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Porter})` }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">
            Porter AI: Your Autonomous Space Industry Analyst
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col  justify-between md:flex-row">
        <nav
          //   className="w-full md:w-1/4 mb-8 md:mb-0"
          className="basis-[30%] w-full max-w-[350px]  max-h-[400px] sticky top-[100px] self-start"
          style={{
            boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <ul className="sticky top-20 space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center w-full text-left p-2 rounded transition-colors ${
                    activeSection === section.id
                      ? "bg-gray-100 text-gray-700"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main
          ref={contentRef}
          className="basis-[60%]"
          //   className="w-full md:w-3/4"
        >
          <section id="understanding" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Porter AI: Your Autonomous Space Industry Analyst
            </h2>
            <p className="text-[18px]">
              In the rapidly evolving aerospace sector, staying informed and
              making data-driven decisions is crucial for investors and venture
              capitalists. Enter Porter, your AI-powered business analyst
              specializing in the space industry.
            </p>
          </section>

          <section id="capabilities" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              What Does a Space Industry Analyst Do?
            </h2>
            <p className="text-[18px]">
              Space industry analysts play a vital role in helping companies and
              investors understand the complex landscape of aerospace and
              space-related markets. Their key responsibilities include
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-[18px]">
                <strong>Market Research</strong>:Gathering data on space
                technologies, satellite communications, launch services, and
                emerging trends
              </li>
              <li className="text-[18px]">
                <strong>Company Analysis</strong>:Evaluating space companies'
                financial health, technological capabilities, and market
                positioning
              </li>
              <li className="text-[18px]">
                <strong>Investment Opportunities</strong>:Identifying promising
                startups and established players in the space sector
              </li>
              <li className="text-[18px]">
                <strong>Regulatory Insights</strong>:Monitoring space policies
                and regulations that impact the industry. Traditionally, these
                tasks have been time-consuming and expensive, often requiring
                specialized knowledge and extensive resources
              </li>
            </ul>
          </section>

          <section id="trends" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              How Porter AI Revolutionizes Space Industry Analysis
            </h2>
            <p className="text-[18px]">
              Porter AI transforms the space industry analysis process through
              automation and advanced AI algorithms. Here's how Porter works:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-[18px]">
                <strong>Comprehensive Data Collection</strong>
                :Porter continuously gathers data from a wide array of sources,
                including space industry news, company reports, scientific
                publications, patent filings, and space agency announcements
              </li>
              <li className="text-[18px]">
                <strong>Automated Analysis</strong>:Using sophisticated AI
                algorithms, Porter analyzes the collected data to identify
                trends, opportunities, and potential risks in the space sector
              </li>
              <li className="text-[18px]">
                <strong>Detailed Reports</strong>:Porter compiles its analysis
                into comprehensive reports, available through an interactive
                dashboard and downloadable in various formats
              </li>
              <li className="text-[18px]">
                <strong>Real-Time Updates</strong>:Users receive daily briefings
                on the latest developments in the space industry, ensuring they
                stay informed without manual effort
              </li>
              <li className="text-[18px]">
                <strong>Investment Recommendations</strong>:Porter doesn't just
                provide data; it offers actionable investment recommendations
                based on analyzed information, helping investors make informed
                decisions in the space sector
              </li>
              <li className="text-[18px]">
                <strong>Interactive Queries</strong>:Users can engage in
                chat-like interactions with Porter to get detailed insights on
                specific companies, technologies, or market segments within the
                space industry
              </li>
              <li className="text-[18px]">
                <strong>Historical Trend Analysis</strong>:Porter can analyze
                historical data to identify long-term trends in the space
                sector, crucial for strategic investment planning
              </li>
            </ul>
          </section>

          <section id="applications" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Benefits of Porter AI for Space Industry Stakeholders
            </h2>
            <p className="text-[18px]">
              Porter AI offers numerous advantages over traditional analysis
              methods:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-[18px]">
                <strong>Cost-Effective Insights</strong>:Access high-quality
                space industry analysis without the need for expensive
                consultants or specialized tools
              </li>
              <li className="text-[18px]">
                <strong>Time Efficiency</strong>:Automated data collection and
                analysis save countless hours, allowing investors to focus on
                strategy and decision-making
              </li>
              <li className="text-[18px]">
                <strong>Comprehensive Coverage</strong>:Porter can process vast
                amounts of data across the entire space industry ecosystem,
                providing a holistic view of the market
              </li>
              <li className="text-[18px]">
                <strong>Scalability</strong>:Suitable for both niche space
                startups and large aerospace corporations, Porter can adapt its
                analysis to various scales and focuses within the industry
              </li>
              <li className="text-[18px]">
                <strong>Scalability</strong>:Suitable for both niche space
                startups and large aerospace corporations, Porter can adapt its
                analysis to various scales and focuses within the industry
              </li>
              <li className="text-[18px]">
                <strong>Democratized Access</strong>: Porter makes sophisticated
                space industry analysis accessible to a wider range of investors
                and businesses, not just large corporations with extensive
                resources.
              </li>
            </ul>
          </section>

          <section id="future" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              How Porter AI Benefits Different Stakeholders
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li className="text-[18px]">
                <strong>Aerospace Companies</strong>:Stay informed about
                competitors, market trends, and technological advancements in
                the space sector
              </li>
              <li className="text-[18px]">
                <strong>Government Agencies</strong>:Monitor private sector
                developments and global trends in space technology and
                exploration
              </li>
              <li className="text-[18px]">
                <strong>Research Institutions</strong>: Keep track of the latest
                advancements and potential collaboration opportunities in space
                science and technology
              </li>
            </ul>
          </section>

          <section id="conclusion" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              The Future of Space Industry Analysis
            </h2>

            <p className="text-[18px]">
              As AI technology continues to advance, tools like Porter AI are
              set to become indispensable in the fast-paced and complex world of
              space industry analysis. By automating data collection, providing
              real-time insights, and offering actionable recommendations,
              Porter AI can effectively augment or even replace traditional
              business analysts in the space sector. Don't miss the opportunity
              to revolutionize your approach to space industry intelligence.
              Book a demo today and see how Porter AI can transform your
              understanding of the aerospace market. Experience the power of
              AI-driven space industry analysis with Porter AI. Visit our
              website to learn more and schedule your demo now. Let Porter AI
              navigate the complexities of the space sector, so you can focus on
              making stellar investment decisions.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BlogTwo;
