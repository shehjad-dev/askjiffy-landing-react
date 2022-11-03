import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ClientsSections from "./components/ClientsSections";
import WhyLoveSection from "./components/WhyLoveSection";
import WhyBestSection from "./components/WhyBestSection";
import FeatureSection from "./components/FeatureSection";
import ReqDemoSection from "./components/ReqDemoSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App relative">
            <Navbar />
            <HeroSection />
            <ClientsSections />
            <WhyLoveSection />
            <WhyBestSection />
            <FeatureSection />
            <ReqDemoSection />
            <Footer />
            {/* <div className="">
                <Navbar />
            </div> */}
        </div>
    );
}

export default App;
