import React, { useState } from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";




function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
	return (
        <nav className=" shadow-lg fixed w-full z-10 bg-white">
            <div className="w-full">
                <div className="flex items-center h-20 w-full">
                    <div className="flex items-center  mx-20  justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0 ">
                            
                            <h1 className=" font-bold text-xl cursor-pointer -ml-12 font-Zen Dots">
                                <span className="">Wediah</span>
                                <span className="text-cyan-500">Emmanuel</span>
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                
                                <Link
                                    activeClass="portfolio"
                                    to="portfolio"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:text-cyan-600 text-black  px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    activeClass="about"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer  text-black hover:text-cyan-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About
                                </Link>

                                <Link
                                    activeClass="contact"
                                    to="contact"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer  text-black hover:text-cyan-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </Link>
                                <a className="cursor-pointer bg-cyan-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black" href="">Download my resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="mr-10 flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-cyan-500 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-500 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div
                            ref={ref}
                            className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        >
                            <Link
                                href="/portfolio"
                                activeClass="portfolio"
                                to="portfolio"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:bg-cyan-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/about"
                                activeClass="about"
                                to="about"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:bg-cyan-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                About
                            </Link>

                            <Link
                                href="/contact"
                                activeClass="contact"
                                to="contact"
                                smooth={true}
                                offset={50}
                                duration={500}
                                className="cursor-pointer hover:bg-cyan-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                            >
                                Contact
                            </Link>
                            
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
	);
}

export default Navbar;

