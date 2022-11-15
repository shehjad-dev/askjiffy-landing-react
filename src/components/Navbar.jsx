import React, { useState } from "react";
import AskJiffyLogo from "../assets/AskJiffyLogo.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const closeMenuOnNavClick = () => {
        setIsOpen(false);
    };

    return (
        <div className=" border-b-2 border-primary border-opacity-30 fixed w-full bg-white z-50">
            <nav className="flex justify-between items-center py-3 max-w-7xl w-full  mx-auto md:px-0 px-4 z-50">
                <a href="/">
                    <img
                        src={AskJiffyLogo}
                        alt="Ask Jiffy Main Logo"
                        className="md:w-[135px] w-[95px]"
                    />
                </a>
                <div className="md:block hidden font-montSerrat">
                    <ul className="flex gap-x-6 items-center text-xl">
                        <li>
                            <a
                                className="cursor-pointer hover:border-b-2 hover:border-primary border-white transition-all ease-in duration-100 pb-1 text-primary px-2"
                                href="#testimonials"
                            >
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer hover:border-b-2 hover:border-primary border-white transition-all ease-in duration-100 pb-1 text-primary px-2"
                                href="#usecases"
                            >
                                Use Cases
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer hover:border-b-2 hover:border-primary border-white transition-all ease-in duration-100 pb-1 text-primary px-2"
                                href="#whyjiffy"
                            >
                                Why Jiffy?
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer hover:border-b-2 hover:border-primary border-white transition-all ease-in duration-100 pb-1 text-primary px-2"
                                href="#features"
                            >
                                Features
                            </a>
                        </li>
                    </ul>
                </div>
                <a
                    className="bg-secondary text-white text-xl font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-primary hover:bg-opacity-90 transition-all ease-in duration-120 md:block hidden font-roboto"
                    href="#bookdemo"
                >
                    Free Demo
                </a>
                <a
                    className="p-[4px] text-primary cursor-pointer border-2 border-white rounded-md hover:border-primary transition-all ease-in duration-100 md:hidden block"
                    onClick={() => handleMenuClick()}
                >
                    {isOpen ? (
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
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
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                            />
                        </svg>
                    )}
                    {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.0}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg> */}
                </a>
            </nav>
            {isOpen ? (
                <div className="md:hidden block animate-fade-in-down z-20 font-montSerrat">
                    <ul className="flex flex-col gap-y-6 items-center text-lg pb-8">
                        <li>
                            <a
                                className="cursor-pointer hover:border-b-2 hover:border-primary border-white transition-all ease-in duration-100 pb-1 text-primary px-2"
                                href="#testimonials"
                                onClick={() => closeMenuOnNavClick()}
                            >
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer hover:border-b-2 hover:border-primary border-white transition-all ease-in duration-100 pb-1 text-primary px-2"
                                href="#usecases"
                                onClick={() => closeMenuOnNavClick()}
                            >
                                Use Cases
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer hover:border-b-2 hover:border-primary border-white transition-all ease-in duration-100 pb-1 text-primary px-2"
                                href="#whyjiffy"
                                onClick={() => closeMenuOnNavClick()}
                            >
                                Why Jiffy?
                            </a>
                        </li>
                        <li>
                            <a
                                className="cursor-pointer hover:border-b-2 hover:border-primary border-white transition-all ease-in duration-100 pb-1 text-primary px-2"
                                href="#features"
                                onClick={() => closeMenuOnNavClick()}
                            >
                                Features
                            </a>
                        </li>
                        <li className="w-full px-6 font-roboto">
                            <a
                                className="bg-secondary text-white text-ld font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-primary hover:bg-opacity-90 transition-all ease-in duration-120 md:hidden block w-full text-center"
                                href="#bookdemo"
                                onClick={() => closeMenuOnNavClick()}
                            >
                                Free Demo
                            </a>
                        </li>
                    </ul>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Navbar;
