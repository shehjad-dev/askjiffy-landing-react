import React from "react";

const TestimonialCard = () => {
    return (
        <div className="bg-secondary text-white flex flex-col gap-y-6 max-w-[360px] py-6 px-8 rounded-md border-[2.8px] border-accentTwo">
            <p className="font-montSerrat font-semibold">&quot;&quot;</p>
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
                <p className="text-xl font-roboto">
                    Global Director, Analytics
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;
