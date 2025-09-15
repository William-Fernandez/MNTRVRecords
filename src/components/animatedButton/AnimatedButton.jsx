import { motion } from "framer-motion";

export default function AnimatedButton({
    children,
    onClick,
    type = "primary",
}) {
    const letters = children.split("");

    // Variants para cada letra
    const letterVariant = {
        hover: {
            y: [-5, 5, 0], // desplazamiento vertical leve
            scaleY: [1, 0.85, 1], // estiramiento suave
            transition: {
                duration: 0.25, // rápido pero sutil
                ease: "easeInOut",
            },
        },
        initial: { y: 0, scaleY: 1 },
    };

    // Container variant para stagger
    const containerVariant = {
        hover: {
            transition: {
                staggerChildren: 0.02, // animación muy ligera por letra
            },
        },
    };

    const baseStyle =
        type === "primary"
            ? "px-7 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl cursor-pointer relative overflow-hidden transition-colors duration-200"
            : "px-5 py-2 border border-black rounded-xl cursor-pointer relative overflow-hidden hover:bg-gray-100/10 transition-colors duration-200";

    return (
        <motion.button
            onClick={onClick}
            className={baseStyle}
            variants={containerVariant}
            initial="initial"
            whileHover="hover"
            style={{ display: "inline-block" }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={letterVariant}
                >
                    {letter}
                </motion.span>
            ))}

            {/* Glow muy tenue */}
            <motion.span
                className="absolute inset-0 rounded-xl pointer-events-none"
                whileHover={{
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)", // glow muy sutil
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            />
        </motion.button>
    );
}
