import { useState, useEffect } from "react"; 
import { Chatbot } from "@/features/Chat";
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
import { FaArrowUp } from "react-icons/fa6";

export default function LandingPage() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progressBar = document.querySelector('.progress-bar') as HTMLElement;
      
      if (progressBar) {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
      }

      if (window.scrollY > 300) {
        setIsScrollTopVisible(true);
      } else {
        setIsScrollTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      <div className="progress-bar"></div>

      <div
        className={`scroll-top ${isScrollTopVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
         <FaArrowUp />
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
        <Chatbot />
      </main>
      <Footer />
    </>
  );
} 