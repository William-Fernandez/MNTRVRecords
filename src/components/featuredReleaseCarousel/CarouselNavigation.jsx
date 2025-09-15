import { motion } from "framer-motion";

export default function CarouselNavigation({
    nextSlide,
    prevSlide,
    setIsHovering,
    currentIndex,
}) {
    return (
        <>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-black/80 z-20"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <motion.span
                    key={`left-${currentIndex}`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                >
                    &#8592;
                </motion.span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-4 rounded-full hover:bg-black/80 z-20"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <motion.span
                    key={`right-${currentIndex}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                >
                    &#8594;
                </motion.span>
            </button>
        </>
    );
}
