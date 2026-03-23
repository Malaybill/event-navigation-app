import InteractiveMap from '@/components/InteractiveMap';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { zones } from '@/lib/zones';

export async function generateStaticParams() {
    return zones.map((zone) => ({
        slug: zone.slug,
    }));
}

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const zone = zones.find(z => z.slug === slug);

    if (!zone) {
        notFound();
    }

    return (
        <main className="fixed inset-0 bg-gray-50 dark:bg-gray-900 overflow-hidden">

            {/* Fullscreen Map Layer */}
            <InteractiveMap
                imageSrc={zone.image}
                altText={`${zone.name} Map`}
                color={zone.color}
            />

            {/* Floating UI Overlays Layer */}
            <div className="absolute inset-0 pointer-events-none p-4 md:p-6 flex flex-col justify-between z-50">

                {/* Top Header Row */}
                <div className="flex items-center justify-between w-full pt-safe">
                    {/* Circular Glassmorphism Back Button */}
                    <Link
                        href="/"
                        className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-full shadow-lg border border-white/40 dark:border-gray-600 active:scale-90 transition-all hover:bg-white/90 dark:hover:bg-gray-700/90"
                        aria-label="Return to Event Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 dark:text-gray-200">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </Link>
                </div>

                {/* Bottom Floating Pill for Zone Name */}
                <div className="flex justify-center w-full mb-6 pb-safe pointer-events-none">
                    <div className="bg-white/50 dark:bg-gray-800/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 dark:border-gray-700 flex items-center gap-2 shadow-sm">
                        <div
                            className="w-2.5 h-2.5 rounded-full opacity-80"
                            style={{ backgroundColor: zone.color }}
                        />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 tracking-wide">
                            {zone.name}
                        </span>
                    </div>
                </div>

            </div>
        </main>
    );
}
