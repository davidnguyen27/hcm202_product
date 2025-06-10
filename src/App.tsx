import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { ArticleDetailPage } from "./features/Articles";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article" element={<ArticleDetailPage />} />
      </Routes>
    </Router>
  );
}
