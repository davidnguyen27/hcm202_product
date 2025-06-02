import Articles from "@/layouts/Articles";
import Biography from "@/layouts/Biography";
import Events from "@/layouts/Events";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Legacy from "@/layouts/Legacy";
import Quotes from "@/layouts/Quotes";
import Resources from "@/layouts/Resources";
import Thoughts from "@/layouts/Thoughts";
import Timeline from "@/layouts/Timeline";
import VideoSection from "@/layouts/VideoSection";

export default function LandingPage() {
  return (
    <>
      <div className="progress-bar"></div>
      <div className="scroll-top">
        <i className="fas fa-arrow-up"></i>
      </div>
      <Header />
      <main>
        <Biography />
        <Thoughts />
        <Legacy />
        <Quotes />
        <VideoSection />
        <Timeline />
        <Articles />
        <Resources />
        <Events />
      </main>
      <Footer />
    </>
  );
}
