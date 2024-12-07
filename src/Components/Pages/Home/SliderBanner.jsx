import React, { useState } from 'react';

const SliderBanner = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-white shadow dark:bg-gray-900">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        {/* Logo */}
                        <div className="flex items-center justify-between">


                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                                    aria-label="Toggle navigation menu"
                                >
                                    {isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Menu Links */}

                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div
                className="w-full bg-center bg-cover h-[38rem]"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                            Build your new <span className="text-blue-400">Saas</span> Project
                        </h1>
                        <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Start Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBanner;
