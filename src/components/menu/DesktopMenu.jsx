import React from "react";
import { motion } from "framer-motion";

const DesktopMenu = ({
    menuItems,
    linkVariant,
    letterVariant,
    handleScrollAndUrlUpdate,
}) => (
    <div className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
            <motion.a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleScrollAndUrlUpdate(e, item.href)}
                className="relative text-white px-3 rounded-md text-xs md:text-sm font-medium overflow-hidden lg:text-base 2xl:text-lg"
                variants={linkVariant}
                initial="initial"
                whileHover="hover"
                animate="initial"
            >
                {item.name.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        variants={letterVariant}
                    >
                        {letter === " " ? "\u00A0" : letter}{" "}
                    </motion.span>
                ))}
            </motion.a>
        ))}
    </div>
);

export default DesktopMenu;