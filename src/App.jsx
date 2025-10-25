import "./App.css";
import React, { useState } from "react";
import Video from "./components/home/Video.jsx";
import Navbar from "./components/menu/Navbar.jsx";
import ShopSection from "./components/catalogueSection/ShopSection.jsx";
import AboutSection from "./components/aboutSection/AboutSection.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FeaturedReleaseCarousel from "./components/featuredReleaseCarousel/FeaturedReleaseCarousel.jsx";

function App() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    return (
        <>
            <Navbar videoLoaded={videoLoaded} />
            <Video onVideoLoaded={() => setVideoLoaded(true)} />
            <FeaturedReleaseCarousel />
            <AboutSection />
            <ShopSection />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
