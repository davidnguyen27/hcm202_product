import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import BiographySection from "./features/Biography/components/BiographySection";
import Timeline from "./layouts/Timeline";
import Articles from "./layouts/Articles";
import Quotes from "./layouts/Quotes";
import VideoSection from "./layouts/VideoSection";
import ArticleDetail from "./pages/ArticleDetail";
import Legacy from "./layouts/Legacy";
import Resources from "./layouts/Resources";
// import './styles/App.css';
import "./styles/ArticleDetail.scss";
import Chatbot from "./features/Chat/components/Chatbot";
import Footer from "./layouts/Footer";
import Thoughts from "./layouts/Thoughts";
import Events from "./layouts/Events";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <BiographySection />
                  <Legacy />
                  <Timeline />
                  <Quotes />
                  <VideoSection />
                  <Thoughts />
                  <Articles />
                  <Resources />
                  <Events />
                  <Footer />
                  <Chatbot />
                </main>
              </>
            }
          />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
