import React, { useState } from "react";
import { motion } from "framer-motion";
import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";
import HamburgerButton from "./HamburgerButton.jsx";

export default function Navbar({ videoLoaded }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: "Featured Music", href: "featured-music" },
        { name: "About", href: "about" },
        { name: "Catalogue", href: "catalogue" },
        { name: "Contact", href: "contact" },
    ];

    // Variants para las animaciones
    const letterVariant = {
        hover: {
            y: [-30, 30, 0],
            scaleY: [1, 0, 1],
            transition: { duration: 0.4, ease: "easeInOut" },
        },
        initial: { y: 0, scaleY: 1 },
    };
    const linkVariant = { hover: { transition: { staggerChildren: 0.05 } } };
    const mobileMenuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3, ease: "easeIn" },
        },
    };
    const mobileLinkVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -10 },
    };

    const handleScrollAndUrlUpdate = (event, href) => {
        event.preventDefault();
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        const newUrl = `${window.location.origin}/${href}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={videoLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 px-2.5">
                    {/* Logo */}
                    <a href="/">
                        <img
                            src="/MNTRV-Logo-Text.webp"
                            alt="MNTRV Records Logo"
                            className="w-24 lg:w-28 xl:w-32 hover:opacity-80"
                        />
                    </a>

                    {/* Componentes modulares */}
                    <DesktopMenu
                        menuItems={menuItems}
                        linkVariant={linkVariant}
                        letterVariant={letterVariant}
                        handleScrollAndUrlUpdate={handleScrollAndUrlUpdate}
                    />
                    <HamburgerButton
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                    />
                </div>
            </div>

            <MobileMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
                mobileMenuVariants={mobileMenuVariants}
                mobileLinkVariants={mobileLinkVariants}
                handleScrollAndUrlUpdate={handleScrollAndUrlUpdate}
            />
        </motion.nav>
    );
}