import React from "react";

export default function Video({ onVideoLoaded }) {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                // Se establece la ruta directamente a la carpeta `public`
                src="/mntrvBackgroundVideo.webm"
                autoPlay
                loop
                muted
                playsInline // Crucial para la reproducción en línea en iOS
                onLoadedData={onVideoLoaded}
            >
                {/* Fallback para navegadores que no soportan el formato .webm */}
                <source src="/mntrvBackgroundVideo.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}