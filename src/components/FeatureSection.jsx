import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const FeatureSection = () => {
    return (
        <div className="bg-white scroll-m-4" id="features">
            <div
                className="max-w-7xl mx-auto py-24 sm:pt-[6rem] sm:pb-[6rem] pt-[4rem] pb-[2rem] flex md:flex-row justify-between flex-col gap-4  bg-white sm:px-16 px-5"
                id="featuresBox"
            >
                <div className="flex flex-col md:gap-y-4 gap-y-2 max-w-[20rem]">
                    <h1 className="md:text-5xl text-3xl font-passionOne tracking-wider md:w-[600px] w-fit text-primary">
                        Features
                    </h1>
                    <p className="md:text-xl text-lg w-[300px] mb-4 font-montSerrat text-primary">
                        <span className="text-secondary font-semibold">
                            Jiffy
                        </span>{" "}
                        is ready to help you by letting you take better &
                        efficient decisions for your use case.
                    </p>
                </div>
                <div
                    className="md:flex flex-col gap-4 hidden"
                    id="featuresBoxOne"
                >
                    <div className="flex gap-4">
                        <div className="bg-primary p-6 w-[20rem] h-[20rem] flex flex-col gap-6 border-[3px] border-primary rounded-[0.24rem]">
                            <div className="flex gap-3 items-center">
                                <div className="text-white bg-secondary w-fit p-2 rounded-[0.3rem]">
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
                                            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-passionOne tracking-wider w-fit text-white">
                                    Machine Learning
                                </h3>
                            </div>
                            <p className="text-white font-montSerrat text-lg">
                                Jiffy is based on a self learning ML model which
                                is developing itself on the fly based on real
                                time user feedback. At the same time reducing
                                the possiblities of human error.
                            </p>
                        </div>
                        <div className="bg-primary p-6 w-[20rem] h-[20rem] flex flex-col gap-6 border-[3px] border-primary rounded-[0.24rem]">
                            <div className="flex gap-3 items-center">
                                <div className="text-white bg-secondary w-fit p-2 rounded-[0.3rem]">
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
                                            d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-passionOne tracking-wider w-fit text-white">
                                    Easy Integration
                                </h3>
                            </div>
                            <p className="text-white font-montSerrat text-lg">
                                Get answers to your queries in form of charts,
                                graphs & Powerpoints etc. Access datasets from
                                multiple sources.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-primary p-6 w-[20rem] h-[20rem] flex flex-col gap-6 border-[3px] border-primary rounded-[0.24rem]">
                            <div className="flex gap-3 items-center">
                                <div className="text-white bg-secondary w-fit p-2 rounded-[0.3rem]">
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
                                            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-passionOne tracking-wider w-fit text-white">
                                    Intuitive Promts
                                </h3>
                            </div>
                            <p className="text-white font-montSerrat text-lg">
                                Jiffy suggests relevant questions based on your
                                business needs and usage. And prompts you with
                                logical follow up question.
                            </p>
                        </div>
                        <div className="bg-primary p-6 w-[20rem] h-[20rem] flex flex-col gap-6 border-[3px] border-primary rounded-[0.24rem]">
                            <div className="flex gap-3 items-center">
                                <div className="text-white bg-secondary w-fit p-2 rounded-[0.3rem]">
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
                                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-passionOne tracking-wider w-fit text-white">
                                    Deploy anywhere
                                </h3>
                            </div>
                            <p className="text-white font-montSerrat text-lg">
                                Deploy to any backend server or cloud
                                deployment. Also get security and protected
                                access from anywhere.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:hidden block pb-[3.5rem] pt-[1.5rem]">
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
                            <div className="bg-primary p-6 w-full h-[16rem] flex flex-col gap-6 border-[3px] border-primary rounded-[0.24rem] z-0">
                                <div className="flex gap-3 items-center">
                                    <div className="text-white bg-secondary w-fit p-2 rounded-[0.3rem]">
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
                                                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-passionOne tracking-wider w-fit text-white">
                                        Machine Learning
                                    </h3>
                                </div>
                                <p className="text-white font-montSerrat text-base">
                                    Jiffy is based on a self learning ML model
                                    which is developing itself on the fly based
                                    on real time user feedback. At the same time
                                    reducing the possiblities of human error.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="z-10">
                            <div className="bg-primary p-6 w-full h-[16rem] flex flex-col gap-6 border-[3px] border-primary rounded-[0.24rem] z-0">
                                <div className="flex gap-3 items-center">
                                    <div className="text-white bg-secondary w-fit p-2 rounded-[0.3rem]">
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
                                                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-passionOne tracking-wider w-fit text-white">
                                        Easy Integration
                                    </h3>
                                </div>
                                <p className="text-white font-montSerrat text-base">
                                    Get answers to your queries in form of
                                    charts, graphs & Powerpoints etc. Access
                                    datasets from multiple sources.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="z-10">
                            <div className="bg-primary p-6 w-full h-[16rem] flex flex-col gap-6 border-[3px] border-primary rounded-[0.24rem] z-0">
                                <div className="flex gap-3 items-center">
                                    <div className="text-white bg-secondary w-fit p-2 rounded-[0.3rem]">
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
                                                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-passionOne tracking-wider w-fit text-white">
                                        Intuitive Promts
                                    </h3>
                                </div>
                                <p className="text-white font-montSerrat text-base">
                                    Jiffy suggests relevant questions based on
                                    your business needs and usage. And prompts
                                    you with logical follow up question.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="z-10">
                            <div className="bg-primary p-6 w-full h-[16rem] flex flex-col gap-6 border-[3px] border-primary rounded-[0.24rem] z-0">
                                <div className="flex gap-3 items-center">
                                    <div className="text-white bg-secondary w-fit p-2 rounded-[0.3rem]">
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
                                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-passionOne tracking-wider w-fit text-white">
                                        Deploy anywhere
                                    </h3>
                                </div>
                                <p className="text-white font-montSerrat text-base">
                                    Deploy to any backend server or cloud
                                    deployment. Also get security and protected
                                    access from anywhere.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* <div className="max-w-7xl mx-auto sm:py-24 sm:pt-[6rem] sm:pb-[6rem] pt-[6rem] pb-[5rem] flex sm:flex-row flex-col sm:gap-20 gap-[3rem] items-center justify-center bg-primary sm:px-0 px-5"></div> */}
        </div>
    );
};

export default FeatureSection;
