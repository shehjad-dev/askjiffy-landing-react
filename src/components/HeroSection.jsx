import React from "react";

const HeroSection = () => {
    return (
        <div className="max-w-7xl mx-auto py-24 flex gap-4 items-center justify-around pt-[200px]">
            <div className="flex flex-col gap-y-4">
                <h1 className="text-4xl font-bold">
                    Data Democratization in a Jiffy
                </h1>
                <p className="text-xl w-[300px] mb-4">
                    Fast-track your organisation's data democratisation. Get
                    Jiffy, your personalised AI-ML insights bot, today.
                </p>
                <div className="flex gap-3">
                    <a className="bg-white text-blue-900 border-[2.6px] border-blue-900 text-xl font-medium px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 hover:text-white transition-all ease-in duration-100">
                        How it works
                    </a>
                    <a className="bg-blue-600 text-white  border-[2.6px] border-blue-600 text-xl font-medium px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition-all ease-in duration-100">
                        Book a Demo
                    </a>
                </div>
            </div>
            <div className="w-[350px] h-[290px] border-4 border-black flex items-center justify-center">
                <p>Video</p>
            </div>
        </div>
    );
};

export default HeroSection;
