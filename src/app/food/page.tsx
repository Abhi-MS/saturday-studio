import Image from "next/image";
import Link from "next/link";

const images = [
  "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Food/IMG_0009.jpg",
  "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Food/IMG_0033.jpg",
  "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Food/IMG_0826.jpg",
  "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Food/IMG_0868.jpg",
  "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Food/IMG_1027.jpg",
  "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Food/IMG_9945.jpg",
  "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Food/SImsim-22.jpg",
];

export default function FoodPage() {
  return (
    <main className="magazine-viewport bg-[#110d09] min-h-screen text-[#f3eee8] selection:bg-amber-900/40 font-light overflow-x-hidden">
      <div className="magazine-page container mx-auto px-6 py-12 md:py-16 md:px-10 max-w-6xl">
        <header className="mb-16 md:mb-20">
          <Link
            href="/"
            className="relative z-10 inline-flex items-center text-[10px] uppercase tracking-[.3em] text-amber-400 hover:text-amber-200 transition-colors py-2"
          >
            ← Back to Cover
          </Link>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-white leading-tight">
            Table <br />
            <span className="italic text-amber-200/90">Studies.</span>
          </h1>

          <div className="h-px w-16 bg-amber-500/50 mt-8 mb-6"></div>

          <p className="max-w-xl text-zinc-300 leading-relaxed text-sm md:text-base">
            Food photography shaped by texture, warmth and appetite appeal. The
            approach balances editorial composition with practical commercial
            intent for menus, campaigns and social storytelling.
          </p>
        </header>

        <section className="space-y-8 md:space-y-12">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
            {images.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden bg-[#130d0a] shadow-[0_24px_60px_rgba(0,0,0,0.25)] ${
                  index % 3 === 0
                    ? "col-span-12 md:col-span-7"
                    : "col-span-12 md:col-span-5"
                }`}
              >
                <div className="relative h-[320px] sm:h-[420px] md:h-[500px]">
                  <Image
                    src={image}
                    alt="Food photography detail"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-24 border-t border-zinc-800 pt-12 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 text-[10px] uppercase tracking-[.4em] text-zinc-500">
              <Link href="/" className="hover:text-white transition-colors">
                Main Cover
              </Link>
              <Link
                href="/thematic"
                className="hover:text-amber-500 transition-colors"
              >
                Thematic Environments
              </Link>
              <Link
                href="/noir"
                className="hover:text-cyan-400 transition-colors"
              >
                Nocturnal Aesthetics
              </Link>
              <Link
                href="/white"
                className="hover:text-zinc-200 transition-colors"
              >
                White Form
              </Link>
              <Link
                href="/food"
                className="hover:text-amber-400 transition-colors"
              >
                Table Studies
              </Link>
              <Link
                href="/inquire"
                className="hover:text-white transition-colors"
              >
                Inquire
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-end text-[10px] uppercase tracking-[.4em] text-zinc-600">
              <p>Saturday Studio / Kitchener Waterloo</p>
              <p className="mt-2">Food • Brand Content</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
