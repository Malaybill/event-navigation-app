"use client";

import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface InteractiveMapProps {
    imageSrc: string;
    altText: string;
    color: string;
}

export default function InteractiveMap({ imageSrc, altText, color }: InteractiveMapProps) {
    return (
        <div className="w-full aspect-square md:aspect-video rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm relative group bg-white dark:bg-gray-800">
            <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={4}
                centerOnInit
                wheel={{ step: 0.1 }}
            >
                <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full">
                    <div className="relative w-full h-full flex items-center justify-center min-h-[300px] md:min-h-full">
                        <Image
                            src={imageSrc}
                            alt={altText}
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}
