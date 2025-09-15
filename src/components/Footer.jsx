import React from "react";
import Logo from "/MNTRV-Logo-Text.webp";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 flex md:block">
            <div className="max-w-6xl mx-auto px-4 flex sm:flex-col md:flex-row justify-between items-start md:items-center">
                {/* Left section: logo + slogan */}
                <div className="mb-6 md:mb-0 flex flex-col items-center w-1/2 justify-center sm:items-start">
                    <img
                        src={Logo}
                        alt="MNTRV Records Logo"
                        className="h-10 md:h-12 mb-1 ml-4"
                    />
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center">Discover your groove</p>
                </div>

                <div className="sm:hidden w-1/2 flex flex-col items-center justify-center h-full">
                    <p className="text-gray-400 text-xs ml-4 text-center">© 2025 MNTRV Records LTD. All rights reserved.</p>
                </div>

                {/* Right section: Location + Contact */}
                <div className="hidden sm:flex sm:flex-col md:flex-row gap-12 text-sm md:text-base">
                    <div className="max-w-48">
                        <h4 className="font-semibold mb-2">Location</h4>
                        <p className="text-gray-400">
                            71-75 Shelton Street London, United Kingdom WC2H 9JQ
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Contact</h4>
                        <p className="text-gray-400">
                            <a
                                href="mailto:info@mntrvrecords.com"
                                className="hover:text-white transition-colors duration-300"
                            >
                                info@mntrvrecords.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
