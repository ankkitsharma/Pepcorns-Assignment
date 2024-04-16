// import "./styles.css";
import { Link } from "react-scroll";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Invest from "./components/Invest";
import Scrollspy from "./components/Scrollspy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col items-center mb-32 md:mb-0">
      <Navbar />
      <Hero />
      <Invest />
      <Scrollspy />
      <Footer />
    </div>
  );
}
