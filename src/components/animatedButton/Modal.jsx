import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
    show,
    onClose,
    title,
    description,
    vinylUrl,
    digitalUrl,
}) {
    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id="overlay"
                    onClick={handleOverlayClick}
                    className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-3xl p-6 w-96 shadow-2xl"
                    >
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>
                        <p className="text-gray-600 mb-6">{description}</p>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => window.open(vinylUrl, "_blank")}
                                className="px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 cursor-pointer"
                            >
                                Buy Vinyl (Elastic Stage)
                            </button>
                            <button
                                onClick={() =>
                                    window.open(digitalUrl, "_blank")
                                }
                                className="px-5 py-3 border border-black rounded-xl hover:bg-gray-100 cursor-pointer"
                            >
                                Buy Digital (Beatport)
                            </button>
                        </div>
                        <button
                            onClick={onClose}
                            className="mt-6 text-sm text-gray-500 hover:text-black cursor-pointer"
                        >
                            Cancel
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
