import Header from "../components/Header"
import ComingSoon from "../components/ComingSoon"
import ListAgents from "../components/Agents"
import PricingSection from "../components/Pricing"
import Resources from "../components/Resources"
import Blogs from "../components/Blog"
import NewHeader from "@/components/NewHeader"
const Home = () => {

  return (
    <div className="container">
      <NewHeader  />
        {/* <Header  /> */}
        <Blogs />
        <ListAgents />
        <PricingSection  />
        <Resources  />
        <ComingSoon  />

    </div>
  )
}

export default Home