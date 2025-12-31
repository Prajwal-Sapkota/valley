import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import Wellness from "./pages/Wellness";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BackToTop from "./components/BackToTop";
import RoomDetail from "./pages/Rooms/RoomDetail";
import Experiences from "./pages/Experiences";
import ExperienceDetail from "./pages/Experiences/ExperienceDetail";
import WellnessDetail from "./pages/Wellness/WellnessDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:slug" element={<ExperienceDetail />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/wellness/:slug" element={<WellnessDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />


      </Routes>
      <BackToTop/>
    </Router>
  );
}

export default App;
