import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({
    isMenuOpen,
    setIsMenuOpen,
    menuItems,
    mobileMenuVariants,
    mobileLinkVariants,
    handleScrollAndUrlUpdate,
}) => (
    <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                className="md:hidden bg-black/95 backdrop-blur-md absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8"
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
            >
                {menuItems.map((item) => (
                    <motion.a
                        key={item.name}
                        href={`#${item.href}`}
                        onClick={(e) => handleScrollAndUrlUpdate(e, item.href)}
                        className="text-white text-3xl underline underline-offset-4 decoration-orange-500 font-bold"
                        variants={mobileLinkVariants}
                    >
                        {item.name}
                    </motion.a>
                ))}
            </motion.div>
        )}
    </AnimatePresence>
);

export default MobileMenu;
