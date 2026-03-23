"use client";

import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface InteractiveMapProps {
    imageSrc: string;
    altText: string;
    color: string;
}

export default function InteractiveMap({ imageSrc, altText }: InteractiveMapProps) {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-white dark:bg-black touch-none">
            <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={8}
                centerOnInit
                centerZoomedOut={true}
                limitToBounds={false}
                wheel={{ step: 0.1 }}
                doubleClick={{ mode: "zoomIn" }}
            >
                <TransformComponent
                    wrapperClass="!w-screen !h-screen"
                    contentClass="!w-screen !h-screen"
                >
                    <div className="relative w-screen h-screen">
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
