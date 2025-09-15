import { useState } from "react";
import AnimatedButton from "../animatedButton/AnimatedButton.jsx";
import Modal from "../animatedButton/Modal.jsx";

export default function ShopCard({
    image,
    title,
    artist,
    vinylUrl,
    digitalUrl,
    listenUrl,
}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center w-60">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500 mb-4">{artist}</p>
            <div className="flex gap-4">
                <AnimatedButton onClick={() => setShowModal(true)}>
                    Buy
                </AnimatedButton>
                <AnimatedButton
                    onClick={() => window.open(listenUrl, "_blank")}
                    type="secondary"
                >
                    Listen
                </AnimatedButton>
            </div>

            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                title="Choose Format"
                description={`Select how you want to purchase ${title}.`}
                vinylUrl={vinylUrl}
                digitalUrl={digitalUrl}
            />
        </div>
    );
}
