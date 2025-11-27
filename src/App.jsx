import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import Activities from "./pages/Activities";
import Wellness from "./pages/Wellness";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rooms" element={<Rooms />}/>
        <Route path="/restaurant" element={<Restaurant/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/wellness" element={<Wellness/>} />

      </Routes>
    </Router>
  );
}

export default App;
