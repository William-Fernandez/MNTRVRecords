import { motion } from "framer-motion";
import ShopCard from "./ShopCard";
import { products } from "../data/data.js";
import DiscIcon from "../../assets/icons/disc-3.svg";

export default function ShopSection() {
    return (
        <section
            className="p-6 md:p-8 w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen"
            id="catalogue"
        >
            <motion.div
                initial={{ opacity: 0, x: -110 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} // dispara la animación una vez al entrar 30% del viewport
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-start mb-4 text-white mt-8 pl-2.5">
                        Catalogue
                    </h2>
                    <p className="text-white mb-12 max-w-3xl pl-2.5 text-sm md:text-base text-center md:text-start">
                        <img
                            src={DiscIcon}
                            alt="Disc Icon"
                            className="w-4 h-4 md:w-6 md:h-6 inline-block mr-2 mb-1 bg-white rounded-full p-1"
                        />
                        Stream, collect, and own MNTRV releases in digital or
                        limited vinyl editions.
                    </p>
                </div>
                <div className="flex gap-8 items-center justify-center flex-wrap">
                    {products.map((product) => (
                        <ShopCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            artist={product.artist}
                            vinylUrl={product.vinylUrl}
                            digitalUrl={product.digitalUrl}
                            listenUrl={product.listenUrl}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
