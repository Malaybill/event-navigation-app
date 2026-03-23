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
                smooth={true}
                wheel={{ step: 0.25 }}
                doubleClick={{ mode: "zoomIn", step: 1.0, animationTime: 120 }}
                panning={{ velocityDisabled: false, lockAxisX: false, lockAxisY: false }}
                alignmentAnimation={{ disabled: false, sizeX: 0.1, animationTime: 180, animationType: "easeOut" }}
                velocityAnimation={{ disabled: false, sensitivity: 1, animationTime: 180, animationType: "easeOut" }}
                zoomAnimation={{ disabled: false, animationTime: 120, animationType: "easeOut" }}
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
