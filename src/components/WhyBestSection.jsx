import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const WhyBestSection = () => {
    return (
        <div className="bg-primary">
            <div className="max-w-7xl mx-auto py-24 sm:pt-[7rem] sm:pb-[4rem] pt-[4rem] pb-[2rem] flex sm:flex-row flex-col gap-4  bg-primary sm:px-16 px-5">
                <div className="flex flex-col md:gap-y-4 gap-y-2">
                    <h1 className="md:text-5xl text-3xl font-passionOne tracking-wider w-fit text-white">
                        Why is Jiffy the best insights bot?
                    </h1>
                    {/* <p className="md:text-xl text-lg w-[300px] mb-4 font-montSerrat text-white">
                        Live in over 100 markets globally
                    </p> */}
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:py-24 sm:pt-[0rem] sm:pb-[7rem] pt-[6rem] pb-[5rem] md:flex hidden sm:flex-row flex-col sm:gap-20 gap-[3rem] items-center justify-between bg-primary sm:px-16 px-5">
                <div className="bg-secondary p-6 w-[20rem] h-[20rem] flex flex-col gap-6 border-[3px] border-accentTwo rounded-[0.24rem]">
                    <div className="flex gap-3 items-center">
                        <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-passionOne tracking-wider w-fit text-white">
                            Instant Insights
                        </h3>
                    </div>
                    <p className="text-white font-montSerrat text-lg">
                        Instant access to KPIs & insights. Get brand & category
                        performance instantly at your fingertips. Find answers
                        in a snap.
                    </p>
                </div>
                <div className="bg-secondary p-6 w-[20rem] h-[20rem] flex flex-col gap-6 border-[3px] border-accentTwo rounded-[0.24rem]">
                    <div className="flex gap-3 items-center">
                        <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-passionOne tracking-wider w-fit text-white">
                            Automated Reports
                        </h3>
                    </div>
                    <p className="text-white font-montSerrat text-lg">
                        Get Jiffy to generate KPI reports and Category review
                        presentations while you rest.
                    </p>
                </div>
                <div className="bg-secondary p-6 w-[20rem] h-[20rem] flex flex-col gap-6 border-[3px] border-accentTwo rounded-[0.24rem]">
                    <div className="flex gap-3 items-center">
                        <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-passionOne tracking-wider w-fit text-white">
                            Personal Assistant
                        </h3>
                    </div>
                    <p className="text-white font-montSerrat text-lg">
                        Let Jiffy be your Alexa to run those KPIs. Talk to Jiffy
                        as seamlessly as you do with Siri, and get insights.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto sm:py-24 sm:pt-[0rem] sm:pb-[7rem] pt-[1.5rem] pb-[3.5rem] md:hidden flex sm:flex-row flex-col sm:gap-20 gap-[3rem] items-center justify-between bg-primary sm:px-16 px-5">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-[20rem] flex items-center justify-center z-10"
                >
                    <SwiperSlide className="z-10">
                        <div className="bg-secondary p-6 w-full h-[16rem] flex flex-col gap-6 border-[3px] border-accentTwo rounded-[0.24rem] z-0">
                            <div className="flex gap-3 items-center">
                                <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-passionOne tracking-wider w-fit text-white">
                                    Instant Insights
                                </h3>
                            </div>
                            <p className="text-white font-montSerrat text-base">
                                Instant access to KPIs & insights. Get brand &
                                category performance instantly at your
                                fingertips. Find answers in a snap.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-secondary p-6 w-full h-[16rem] flex flex-col gap-6 border-[3px] border-accentTwo rounded-[0.24rem]">
                            <div className="flex gap-3 items-center">
                                <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-passionOne tracking-wider w-fit text-white">
                                    Automated Reports
                                </h3>
                            </div>
                            <p className="text-white font-montSerrat text-base">
                                Get Jiffy to generate KPI reports and Category
                                review presentations while you rest.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-secondary p-6 w-full h-[16rem] flex flex-col gap-6 border-[3px] border-accentTwo rounded-[0.24rem]">
                            <div className="flex gap-3 items-center">
                                <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-passionOne tracking-wider w-fit text-white">
                                    Personal Assistant
                                </h3>
                            </div>
                            <p className="text-white font-montSerrat text-base">
                                Let Jiffy be your Alexa to run those KPIs. Talk
                                to Jiffy as seamlessly as you do with Siri, and
                                get insights.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* <Carousel>
                <div>
                    <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <div className="text-white bg-primary w-fit p-2 rounded-[0.3rem]">
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
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            <div></div>
        </div>
    );
};

export default WhyBestSection;
