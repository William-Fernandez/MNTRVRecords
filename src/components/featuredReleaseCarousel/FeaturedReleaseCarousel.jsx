import { useState, useEffect, useRef } from "react";
import { products } from "../data/data.js";
import Modal from "../animatedButton/Modal.jsx";
import CarouselContent from "./CarouselContent.jsx";
import CarouselNavigation from "./CarouselNavigation.jsx";

export default function FeaturedReleaseCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [direction, setDirection] = useState(1);
    const slideInterval = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    const startSlideShow = () => {
        if (slideInterval.current) clearInterval(slideInterval.current);
        slideInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === products.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
    };

    const stopSlideShow = () => {
        if (slideInterval.current) clearInterval(slideInterval.current);
    };

    useEffect(() => {
        if (!isHovering) {
            startSlideShow();
        }
        return () => stopSlideShow();
    }, [isHovering]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const handleBuyClick = () => {
        stopSlideShow();
        setShowModal(true);
    };

    const currentProduct = products[currentIndex];

    return (
        <section
            id="featured-music"
            className="w-full min-h-dvh relative flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            {/*... Título y background blur ...*/}
            <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-white my-8 z-10 relative">
                Featured Music
            </h2>
            <div className="absolute inset-0">
                <img
                    src={currentProduct.image}
                    alt=""
                    className="w-full h-full object-cover blur-lg opacity-40"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <CarouselContent
                currentProduct={currentProduct}
                direction={direction}
                setIsHovering={setIsHovering}
                onBuyClick={handleBuyClick}
            />

            <CarouselNavigation
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                setIsHovering={setIsHovering}
                currentIndex={currentIndex}
            />

            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                title="Choose Format"
                description={`Select how you want to purchase ${currentProduct.title}.`}
                vinylUrl={currentProduct.vinylUrl}
                digitalUrl={currentProduct.digitalUrl}
            />
        </section>
    );
}
