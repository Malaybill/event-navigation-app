import Link from "next/link";
import { zones } from "@/lib/zones";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 dark:border-gray-700/50">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          Event Navigation
        </h1>

        <div className="flex flex-col gap-4">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
            Welcome to the event navigator. Please select a zone below:
          </p>

          {zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zone/${zone.slug}`}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-600 group hover:-translate-y-1 active:scale-95 relative overflow-hidden"
              style={{ borderLeftColor: zone.color, borderLeftWidth: '4px' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: zone.color }}
              />
              <span className="font-semibold text-gray-700 dark:text-gray-200 transition-colors z-10">
                {zone.name}
              </span>
              <span
                className="group-hover:translate-x-1 transition-transform z-10 font-bold"
                style={{ color: zone.color }}
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
