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
        <main className="fixed inset-0 w-screen h-screen bg-black overflow-hidden m-0 p-0">

            {/* Map Layer - Absolutely Fullscreen */}
            <div className="absolute inset-0 w-full h-full z-0">
                <InteractiveMap
                    imageSrc={zone.image}
                    altText={`${zone.name} Map`}
                    color={zone.color}
                />
            </div>

            {/* Floating UI Layer */}
            <div className="relative w-full h-full pointer-events-none z-10">

                {/* Back Button: Top-Left (16px, 16px) */}
                <div className="absolute top-4 left-4 pointer-events-auto">
                    <Link
                        href="/"
                        className="flex items-center justify-center w-11 h-11 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full shadow-xl border border-white/20 active:scale-90 transition-transform"
                        aria-label="Back to home"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-gray-100">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </Link>
                </div>

                {/* Zone Label: Bottom Center (24px) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="bg-gray-900/80 dark:bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-lg flex items-center gap-2">
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: zone.color }}
                        />
                        <span className="text-sm font-medium text-white tracking-wide">
                            {zone.name}
                        </span>
                    </div>
                </div>

            </div>
        </main>
    );
}
