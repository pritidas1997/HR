import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/style.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Payroll from "./pages/Payroll";
import Polices from "./pages/Polices";
import Recruitment from "./pages/Recruitment";
import Compliance from "./pages/Compliance";
import Training from "./pages/Training";
import Development from "./pages/Development";
import Testimonial from "./pages/Testimonial";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/payroll" element={<Payroll></Payroll>}></Route>
          <Route path="/Compliance" element={<Compliance></Compliance>}></Route>
          <Route path="/Polices" element={<Polices></Polices>}></Route>
          <Route
            path="/Testimonial"
            element={<Testimonial></Testimonial>}
          ></Route>

          <Route
            path="/Development"
            element={<Development></Development>}
          ></Route>
          <Route path="/Training" element={<Training></Training>}></Route>

          <Route
            path="/Recruitment"
            element={<Recruitment></Recruitment>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
