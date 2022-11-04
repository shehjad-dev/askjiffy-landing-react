import React from "react";

const ReqDemoSection = () => {
    return (
        <div className="bg-primary py-20">
            <div className="md:w-[50rem] sm:w-[35rem] mx-auto  flex flex-col items-center bg-secondary sm:px-10 px-5 m-auto rounded-lg w-[300px]">
                {/* <div className="md:w-[50rem] sm:w-[35rem] mx-auto  flex flex-col items-center bg-secondary sm:px-5 px-5 absolute top-8 left-0 right-0 m-auto rounded-lg w-[300px]"> */}
                <div className="flex md:flex-row flex-col w-full md:justify-between justify-around  items-center h-[180px]">
                    <h1 className="sm:text-3xl text-2xl  font-passionOne tracking-wider text-white sm:text-left text-center ">
                        Request a demo to know more
                    </h1>
                    <a
                        className="bg-primary text-white  border-[2.6px] border-primary text-xl md:font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-secondary hover:border-white hover:bg-opacity-100 transition-all ease-in duration-100 w-fit h-fit"
                        href="#bookdemo"
                    >
                        Book a Demo
                    </a>
                </div>
            </div>
            {/* <div className="bg-primary h-[150px] w-full"></div>
            <div className="bg-primary h-[150px] w-full"></div> */}
        </div>
    );
};

export default ReqDemoSection;
