import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import MainBody from "./MainBody.tsx";
import StatsSection from "./StatsSection.tsx";
import StoriesHome from "./stories-home.tsx";
import GetInvolved from "./Get-Involved.tsx";
import OurMission from "./Our-Mission.tsx";

function Home() {
  const backgroundImage = "../src/assets/blue-stars.jpg";

  return (
    <>
      <Header />
      <MainBody 
        background={backgroundImage}
        title={"Welcome to Dream it Medicine"}
        caption={"A space curated to support minority pre-med students in medicine"}
      />
      <div id="mission">
        <OurMission />
      </div>
      <StatsSection />
      <div id="stories">
        <StoriesHome />
      </div>
      <div id="get-involved">
        <GetInvolved />
      </div>
      <Footer />
    </>
  )
}

export default Home
