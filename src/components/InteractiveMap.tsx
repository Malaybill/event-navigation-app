"use client";

import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface InteractiveMapProps {
    imageSrc: string;
    altText: string;
    color: string; // Color prop kept if we want to use it for an overlay accent later
}

export default function InteractiveMap({ imageSrc, altText }: InteractiveMapProps) {
    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden bg-gray-50 dark:bg-gray-950 touch-none"
            style={{
                backgroundImage: 'radial-gradient(var(--tw-gradient-stops))', // Fallback
            }}
        >
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20 dark:opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#6b7280 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />
            <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={5}
                centerOnInit
                centerZoomedOut={false}
                limitToBounds={false}
                wheel={{ step: 0.1 }}
                doubleClick={{ mode: "zoomIn" }}
            >
                <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                            src={imageSrc}
                            alt={altText}
                            fill
                            className="object-contain pointer-events-none"
                            priority
                            sizes="100vw"
                        />
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}
