import Header from "../components/Header"
import AgentCarousel from "../components/AgentCarousel"
import ComingSoon from "../components/ComingSoon"
const Home = () => {

  return (
    <div className="container">
        <Header  />
        <AgentCarousel />
        <ComingSoon  />

    </div>
  )
}

export default Home