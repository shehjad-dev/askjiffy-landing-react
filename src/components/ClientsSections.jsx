import React from "react";
/* import CocacolaImg from "../assets/CocacolaImg.png"; */
import CocacolaImg from "../assets/cokeImg2.png";
import TestimonialCard from "./TestimonialCard";

const ClientsSections = () => {
    return (
        <div className="bg-primary scroll-m-4" id="testimonials">
            <div className="max-w-7xl mx-auto py-24 sm:pt-[6rem] sm:pb-[2.5rem] pt-[4rem] pb-[1.4rem] flex sm:flex-row flex-col gap-4 items-center justify-around bg-primary sm:px-0 px-5">
                <div className="flex flex-col md:gap-y-4 gap-y-2">
                    {/* <h1 className="md:text-5xl text-3xl font-passionOne tracking-wider md:w-[600px] w-fit text-white">
                        Trusted by the biggest in the business
                    </h1> */}
                    <h1 className="md:text-5xl text-3xl font-passionOne tracking-wider md:w-[600px] w-fit text-white">
                        Implemented at a Leading Global Beverages Company,
                        across top 40 markets.
                    </h1>
                </div>
                <div className="bg-white flex items-center justify-center rounded-md border-[2.8px] border-accentTwo">
                    {/* <div className="bg-white flex items-center justify-center py-16 px-8 rounded-md border-[2.8px] border-accentTwo"> */}
                    <img
                        src={CocacolaImg}
                        alt=""
                        className="w-full sm:w-[320px] rounded-md"
                    />
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:py-24 sm:pt-[1rem] sm:pb-[6rem] pt-[2.5rem] pb-[5rem] flex sm:flex-row flex-col sm:gap-20 gap-[3rem] items-center justify-center bg-primary sm:px-0 px-5">
                {/* <TestimonialCard />
                <TestimonialCard /> */}
                <div className="bg-secondary text-white flex flex-col gap-y-6 max-w-[360px] sm:h-[200px] h-[220px] justify-between py-6 sm:px-8 px-4 rounded-md border-[2.8px] border-accentTwo">
                    <p className="font-montSerrat font-semibold">
                        &quot;This is amazing. Big congratulations to the
                        team.&quot;
                    </p>
                    <div className="flex gap-x-3 items-center">
                        <div className="p-2 border-[2.7px] border-accentTwo rounded-full w-fit bg-white text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                        <p className="sm:text-xl text-lg font-roboto">
                            Global Director, Analytics
                        </p>
                    </div>
                </div>
                <div className="bg-secondary text-white flex flex-col gap-y-6 max-w-[360px] sm:h-[200px] h-[220px] justify-between py-6 sm:px-8 px-4 rounded-md border-[2.8px] border-accentTwo">
                    <p className="font-montSerrat font-semibold">
                        &quot;Yippy for Jiffy! Jiffy and I are going to be Best
                        Buddies!! Thanks for pushing us into the 21st
                        century.&quot;
                    </p>
                    <div className="flex gap-x-3 items-center">
                        <div className="p-2 border-[2.7px] border-accentTwo rounded-full w-fit bg-white text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                        <p className="sm:text-xl text-lg font-roboto">
                            Global Strategy Director
                        </p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default ClientsSections;
