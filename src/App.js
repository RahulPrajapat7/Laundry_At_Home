import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import Price from "./components/Price/Price";
import Footer from "./components/Footer/Footer";
import logo from "./logo.svg";
import Service from "./Sevices/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar title="onlinelLaundary" logo={logo} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/price" element={<Price />} />
          <Route exact path="/service" element={<Service />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
