import React from "react";
import ReactPlayer from "react-player";

// Render a YouTube video player

const HeroSection = () => {
    return (
        <div className="max-w-7xl mx-auto py-24 flex md:flex-row flex-col-reverse gap-4 items-center justify-around md:pt-[200px] pt-[120px] sm:pb-[8rem] pb-[70px] sm:px-6 px-0">
            <div className="flex flex-col md:gap-y-4 gap-y-2 sm:px-0 px-5">
                <h1 className="md:text-6xl text-3xl font-passionOne tracking-wider md:w-[600px] w-fit text-primary">
                    Data Democratization in a Jiffy
                </h1>
                <p className="md:text-xl text-lg w-[300px] mb-4 font-montSerrat text-primary">
                    Fast-track your organisation's data democratisation. Get
                    Jiffy, your personalised AI insights bot, today.
                </p>
                <div className="flex sm:gap-6 gap-3 font-roboto">
                    <a
                        className="bg-accentOne text-primary border-[2.6px] border-primary sm:text-xl text-lg md:font-medium xs:px-4 xs:py-2 px-2 py-2 rounded-md cursor-pointer hover:bg-primary hover:bg-opacity-100 hover:text-white transition-all ease-in duration-100"
                        href="#usecases"
                    >
                        How it works
                    </a>
                    <a
                        className="bg-primary text-white  border-[2.6px] border-primary text-xl md:font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-secondary hover:border-secondary hover:bg-opacity-100 transition-all ease-in duration-100"
                        href="#bookdemo"
                    >
                        Book a Demo
                    </a>
                </div>
            </div>
            <div className="aspect-video border-4 sm:w-[560px] w-[85vw] h-auto border-primary flex items-center justify-center bg-accentOne rounded-sm">
                {/* <p>Video</p> */}
                {/* <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Br713Ri2bO4"
                ></iframe> */}
                <ReactPlayer
                    url="https://www.youtube.com/embed/A8abU30Dw_k"
                    width="100%"
                    height="100%"
                    controls="true"
                    /* playing={true} */
                />
            </div>
        </div>
    );
};

export default HeroSection;
