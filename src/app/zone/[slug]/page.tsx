import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { zones } from '@/lib/zones';

export default async function ZonePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const zone = zones.find(z => z.slug === slug);

    if (!zone) {
        notFound();
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 dark:border-gray-700/50 flex flex-col items-center transition-all overflow-hidden relative">

                <div
                    className="absolute top-0 left-0 w-full h-2 opacity-80"
                    style={{ backgroundColor: zone.color }}
                />

                <div className="w-full aspect-video rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm relative transition-opacity group">
                    <Image
                        src={zone.image}
                        alt={`${zone.name} Map`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>

                <h1 className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80" style={{ color: zone.color }}>
                    Current Location
                </h1>

                <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800 dark:text-white">
                    {zone.name}
                </h2>

                <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-5 w-full mb-8 border border-gray-100 dark:border-gray-600 shadow-sm">
                    <p className="text-base text-center text-gray-700 dark:text-gray-300">
                        You are currently viewing the <span className="font-semibold" style={{ color: zone.color }}>{zone.name}</span> zone. You can navigate back to the main menu to select a different area.
                    </p>
                </div>

                <Link
                    href="/"
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-semibold text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group"
                    style={{ backgroundColor: zone.color }}
                >
                    <span className="group-hover:-translate-x-1 transition-transform mr-2">←</span> Return to Events
                </Link>
            </div>
        </main>
    );
}
