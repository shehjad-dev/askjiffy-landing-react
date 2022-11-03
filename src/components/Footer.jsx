import React, { useState } from "react";
import AskJiffyLogo from "../assets/AskJiffyLogo.svg";
import BrandScapesLogo from "../assets/BrandScapesLogo.png";

const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [org, setOrg] = useState("");
    const [country, setCountry] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, org, country, msg);
        /* const data = {
            Name: name.toString(),
            Phone: phone.toString(),
            Email: email.toString(),
            Date: date,
            Time: time,
        };

        axios
            .post(
                `https://sheetdb.io/api/v1/${API_KEY}
            `,
                {
                    data,
                }
            )
            .then((response) => {
                //console.log(response.data);
                setName("");
                setPhone("");
                setEmail("");
                setDate("");
                setTime("");
                setForcedTime("");
                notyf.success("We will contact you soon");
            })
            .catch((err) => {
                //console.log(err);
                setName("");
                setPhone("");
                setEmail("");
                setDate("");
                setTime("");
                setForcedTime("");
                notyf.error("There was an error!");
            }); */
    };
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-24 sm:pt-[6rem] sm:pb-[6rem] pt-[4rem] pb-[2rem] flex sm:flex-row flex-col-reverse gap-4 items-center justify-between bg-white sm:px-16 px-5">
                <div className="flex flex-col gap-4  sm:mt-0 mt-20 sm:mb-0 mb-20">
                    <a>
                        <img
                            src={AskJiffyLogo}
                            alt="Ask Jiffy Main Logo"
                            className="md:w-[135px] w-[95px]"
                        />
                    </a>
                    <div className="flex gap-4">
                        <p className="md:text-xl text-lg font-montSerrat font-bold text-primary">
                            Powered by
                        </p>
                        <a
                            href="https://brandscapesworldwide.com/"
                            target="_blank"
                        >
                            <img
                                src={BrandScapesLogo}
                                alt="Brand Scapes Worldwide Logo"
                                className="md:w-[235px] w-[150px]"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex gap-4 mt-5">
                            <div className="bg-secondary text-white p-2 rounded-md w-fit h-fit">
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
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                            </div>
                            <div className="text-primary font-montSerrat font-bold sm:text-xl text-base leading-8">
                                USA - +1 (404) 431-3336 <br />
                                India - +91-9820695957 <br />
                                Singapore - +65 8235 1063 <br />
                                UK - +44 7742 276562 <br />
                                UAE - +971529596804
                            </div>
                        </div>
                        <div className="flex gap-4 mt-8 items-center">
                            <div className="bg-secondary text-white p-2 rounded-md w-fit h-fit">
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
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </div>
                            <div className="text-primary font-montSerrat font-bold sm:text-xl text-base leading-8">
                                <a href="mailto:jiffy@brand-scapes.com">
                                    jiffy@brand-scapes.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[500px] w-[90vw]">
                    <form className="bg-primary h-full sm:py-8 sm:px-12 py-6 px-4 rounded-md">
                        <h3 className="text-center font-passionOne text-2xl text-white tracking-widest">
                            Book A Demo
                        </h3>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 sm:text-lg text-base font-medium text-white font-montSerrat"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="text"
                                className="bg-gray-50 border border-white text-primary text-lg rounded-lg block w-full sm:p-2.5 p-1 outline-none focus:outline-accentTwo"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 sm:text-lg text-base font-medium text-white font-montSerrat"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-white text-primary text-lg rounded-lg block w-full sm:p-2.5 p-1 outline-none focus:outline-accentTwo"
                                placeholder="jiffy@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 sm:text-lg text-base font-medium text-white font-montSerrat"
                            >
                                Organization
                            </label>
                            <input
                                type="text"
                                id="organization"
                                className="bg-gray-50 border border-white text-primary text-lg rounded-lg block w-full sm:p-2.5 p-1 outline-none focus:outline-accentTwo"
                                placeholder="Organization name"
                                value={org}
                                onChange={(e) => setOrg(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 sm:text-lg text-base font-medium text-white font-montSerrat"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                className="bg-gray-50 border border-white text-primary text-lg rounded-lg block w-full sm:p-2.5 p-1 outline-none focus:outline-accentTwo"
                                placeholder="Country Name"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 sm:text-lg text-base font-medium text-white font-montSerrat"
                            >
                                Message
                            </label>
                            <textarea
                                type="message"
                                id="message"
                                className="bg-gray-50 border border-white text-primary text-lg rounded-lg block w-full sm:p-2.5 p-1 outline-none focus:outline-accentTwo"
                                placeholder="Your Message"
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="bg-secondary text-white  border-[2.6px] border-primary text-xl md:font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-secondary hover:border-white hover:bg-opacity-100 transition-all ease-in duration-100 mx-auto font-roboto"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-primary text-white text-center sm:text-xl text-base font-montSerrat font-bold py-6 px-4">
                <p>
                    Copyright © 2022 Ask Jiffy. All rights reserved by
                    Brandscapes Worlwide
                </p>
            </div>
        </div>
    );
};

export default Footer;
