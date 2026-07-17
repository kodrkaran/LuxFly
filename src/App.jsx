import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Tour from "./Pages/Tour";
import Guide from "./Pages/Guide";
import Flight from "./Pages/Flight";
import Footer from "./Components/Footer";



import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
      
      <Footer />

    </>
  );
}

export default App;