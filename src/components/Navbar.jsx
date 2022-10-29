import React from "react";
import AskJiffyLogo from "../assets/AskJiffyLogo.svg";

const Navbar = () => {
    return (
        <div className=" border-b-2 border-blue-300 w-full fixed bg-white">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
                <a>
                    <img
                        src={AskJiffyLogo}
                        alt="Ask Jiffy Main Logo"
                        className="w-[160px]"
                    />
                </a>
                <div>
                    <ul className="flex gap-x-4 items-center text-lg">
                        <li>
                            <a className="cursor-pointer hover:border-b-2 hover:border-blue-900 border-white hover:text-blue-900 transition-all ease-in duration-100 pb-1 text-blue-600">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:border-b-2 hover:border-blue-900 border-white hover:text-blue-900 transition-all ease-in duration-100 pb-1 text-blue-600">
                                Use Cases
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:border-b-2 hover:border-blue-900 border-white hover:text-blue-900 transition-all ease-in duration-100 pb-1 text-blue-600">
                                Why Jiffy?
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:border-b-2 hover:border-blue-900 border-white hover:text-blue-900 transition-all ease-in duration-100 pb-1 text-blue-600">
                                Features
                            </a>
                        </li>
                    </ul>
                </div>
                <a className="bg-blue-600 text-white text-xl font-medium px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 hover:bg-opacity-90 transition-all ease-in duration-100">
                    Free Demo
                </a>
            </nav>
        </div>
    );
};

export default Navbar;
