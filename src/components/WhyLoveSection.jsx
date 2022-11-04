import React from "react";
import WhyImgOne from "../assets/WhyImgOne.svg";
import WhyImgTwo from "../assets/WhyImgTwo.svg";
import WhyImgThree from "../assets/WhyImgThree.svg";
import WhyImgFour from "../assets/WhyImgFour.svg";

const WhyLoveSection = () => {
    return (
        <div className="bg-white scroll-m-4" id="usecases">
            <div className="max-w-7xl mx-auto py-24 sm:pt-[6rem] sm:pb-[4rem] pt-[4rem] pb-[2rem] flex sm:flex-row flex-col gap-4 items-center justify-around bg-white sm:px-0 px-5">
                <div className="flex flex-col md:gap-y-4 gap-y-2">
                    <h1 className="md:text-5xl text-3xl font-passionOne tracking-wider md:w-[600px] w-fit text-primary">
                        Why Professionals Love Jiffy?
                    </h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto sm:pt-[0rem] sm:pb-[6rem] pt-[1rem] pb-[3rem] flex flex-col sm:gap-4 gap-8 items-center justify-around bg-white sm:px-10 px-5">
                <div className="flex sm:flex-row flex-col items-center justify-center gap-x-16">
                    <div className="w-fit">
                        <img
                            src={WhyImgOne}
                            alt="Leadership teams need Jiffy"
                            className="w-[30rem]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 bg-blue-40 w-fit max-w-[430px]">
                        <h3 className="md:text-4xl text-2xl font-passionOne tracking-wider md:w-[600px] w-fit text-primary">
                            Leadership Teams
                        </h3>
                        <p className="md:text-xl text-lg mb-4 font-montSerrat text-primary font-medium">
                            Instant access to KPI{"'"}s for all. Stop waiting
                            for monthly reports from data analysts. Jiffy helps
                            you understand the key drivers of your business and
                            how to improve them.{" "}
                        </p>
                    </div>
                </div>
                <div className="flex sm:flex-row-reverse flex-col items-center justify-center gap-x-16">
                    <div className="w-fit">
                        <img
                            src={WhyImgTwo}
                            alt="Leadership teams need Jiffy"
                            className="w-[30rem]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 bg-blue-40 w-fit max-w-[430px]">
                        <h3 className="md:text-4xl text-2xl font-passionOne tracking-wider md:w-[600px] w-fit text-primary">
                            Marketing Teams
                        </h3>
                        <p className="md:text-xl text-lg mb-4 font-montSerrat text-primary font-medium">
                            Get instant access to your brand and category
                            performance. Understand the levers to drive your
                            brand growth. Get deep dive insights into the 6Ps.
                        </p>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-center gap-x-16">
                    <div className="w-fit">
                        <img
                            src={WhyImgThree}
                            alt="Leadership teams need Jiffy"
                            className="w-[30rem]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 bg-blue-40 w-fit max-w-[430px]">
                        <h3 className="md:text-4xl text-2xl font-passionOne tracking-wider md:w-[600px] w-fit text-primary">
                            Sales Teams
                        </h3>
                        <p className="md:text-xl text-lg mb-4 font-montSerrat text-primary font-medium">
                            Empower your frontline team to quickly find answers.
                            Instant snapshot of sales vs targets. Jiffy helps
                            you to quickly identify which stocks to push among
                            which channels and stores.
                        </p>
                    </div>
                </div>
                <div className="flex sm:flex-row-reverse flex-col items-center justify-center gap-x-16">
                    <div className="w-fit">
                        <img
                            src={WhyImgFour}
                            alt="Leadership teams need Jiffy"
                            className="w-[30rem]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 bg-blue-40 w-fit max-w-[430px]">
                        <h3 className="md:text-4xl text-2xl font-passionOne tracking-wider md:w-[600px] w-fit text-primary">
                            CI Teams
                        </h3>
                        <p className="md:text-xl text-lg mb-4 font-montSerrat text-primary font-medium">
                            Free up your time from mundane data extraction and
                            reporting. Let Jiffy burn the midnight oil while you
                            rest.
                        </p>
                    </div>
                </div>
            </div>

            <div></div>
        </div>
    );
};

export default WhyLoveSection;
