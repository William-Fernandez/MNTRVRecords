import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "../animatedButton/AnimatedButton.jsx";

export default function CarouselContent({
    currentProduct,
    direction,
    setIsHovering,
    onBuyClick,
}) {
    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-7xl p-8 gap-8">
            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={currentProduct.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="flex flex-col md:flex-row items-center w-full gap-8 justify-center"
                >
                    <motion.img
                        src={currentProduct.image}
                        alt={currentProduct.title}
                        className="w-50 md:ml-8 2xl:ml-0 md:w-60 lg:w-80 object-cover rounded-3xl shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    />

                    <div className="flex flex-col items-center md:items-start text-center md:text-left text-white">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                            {currentProduct.title}
                        </h3>
                        <p className="text-gray-100 text-sm md:text-base md:pr-6 mb-8 max-w-lg">
                            {currentProduct.description ||
                                "No description available."}
                        </p>
                        <div
                            className="flex gap-6"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <AnimatedButton onClick={onBuyClick}>
                                Buy
                            </AnimatedButton>
                            <AnimatedButton
                                onClick={() =>
                                    window.open(
                                        currentProduct.listenUrl,
                                        "_blank"
                                    )
                                }
                                type="secondary"
                            >
                                Listen
                            </AnimatedButton>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
