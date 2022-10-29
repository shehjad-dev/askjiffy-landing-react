import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App relative">
            <div className="">
                <Navbar />
            </div>

            <HeroSection />
            <h1 className="text-3xl font-bold underline bg-purple-50 mb-[700px]">
                Hello world!
            </h1>
            <h1 className="text-3xl font-bold underline bg-purple-50">
                Hello world!
            </h1>
            <h1 className="text-3xl font-bold underline bg-purple-50">
                Hello world!
            </h1>
            <h1 className="text-3xl font-bold underline bg-purple-50">
                Hello world!
            </h1>
        </div>
    );
}

export default App;
