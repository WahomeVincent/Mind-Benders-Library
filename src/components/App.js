import Navbar from "./Navbar"
// import home from "./pages/Pricing"
// import Home from "./Home"
// import About from "./About"
// import Services from "./Services"
// import Contact from "./Contact"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
      <Footer />
    </>
  )
}

export default App;
