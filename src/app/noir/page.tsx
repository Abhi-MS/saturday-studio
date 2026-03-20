import Image from "next/image";
import Link from "next/link";

export default function NocturnalPage() {
  return (
    <main className="magazine-viewport bg-[#090b0f] min-h-screen text-[#f5f5f5] selection:bg-cyan-900/40 font-light overflow-x-hidden">
      <div className="magazine-page container mx-auto px-6 py-12 md:py-16 md:px-10 max-w-6xl">
        <header className="mb-16 md:mb-24">
          <Link
            href="/"
            className="relative z-10 inline-flex items-center text-[10px] uppercase tracking-[.3em] text-cyan-400 hover:text-cyan-200 transition-colors py-2"
          >
            ← Back to Cover
          </Link>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-white leading-tight">
            Nocturnal <br />
            <span className="italic text-cyan-400/90">Aesthetics.</span>
          </h1>

          <div className="h-px w-16 bg-cyan-500/50 mt-8 mb-6"></div>

          <p className="max-w-xl text-zinc-400 leading-relaxed text-sm md:text-base">
            Exploring the intersection of shadow and form. This collection
            demonstrates a methodical approach to high-contrast product staging,
            utilizing negative space to isolate silhouettes.
          </p>
        </header>

        <section className="space-y-24 md:space-y-32">
          {/* Study 01 - Silhouette Isolation */}
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-7">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 01
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Silhouette Isolation
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Focusing on sharp verticality within a low-key environment. By
                precisely controlling the fall-off, the product's profile is
                defined against a dark void.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="relative overflow-hidden bg-black/40 shadow-2xl aspect-[4/5] md:h-[400px] w-full">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-5.jpg"
                  alt="Silhouette Isolation"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-4 md:p-0"
                />
              </div>
            </div>
          </div>

          {/* Study 02 - Reflective Precision (Reversed on Desktop) */}
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <div className="relative overflow-hidden bg-black/40 shadow-2xl aspect-[4/5] md:h-[500px] w-full">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-3.jpg"
                  alt="Reflective Precision"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-4 md:p-0"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 02
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Reflective Precision
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Managing specular highlights on complex surfaces. Light is
                treated as a sculptural tool to trace contours.
              </p>
            </div>
          </div>

          {/* Study 03 - Chromatic Contrast */}
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-7">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 03
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Chromatic Contrast
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Directing focus through localized saturation. Vibrant pigments
                emerge with higher perceived intensity against deep blacks.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="relative overflow-hidden bg-black/40 shadow-2xl aspect-[4/5] md:h-[540px] w-full">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-4.jpg"
                  alt="Chromatic Contrast"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-4 md:p-0"
                />
              </div>
            </div>
          </div>

          {/* Study 04 - Form Tracing (Reversed on Desktop) */}
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <div className="relative overflow-hidden bg-black/40 shadow-2xl aspect-[4/5] md:h-[520px] w-full">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-1.jpg"
                  alt="Form Tracing"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-4 md:p-0"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 04
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Form Tracing
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Defining the subject solely through luminous edges. Minimalist
                lighting strategy designed to create mystery.
              </p>
            </div>
          </div>

          {/* Study 05 - Atmospheric Depth */}
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-5 order-1">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 05
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Atmospheric Depth
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Utilizing linear light paths to create a sense of
                three-dimensional space. By anchoring the product amidst glowing
                geometric vectors, the composition achieves a futuristic,
                high-fidelity atmosphere.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7 order-2">
              {/* Change: Swapped aspect-[16/9] to aspect-[4/3] (or your photo's actual ratio) */}
              {/* Added p-4 on mobile to give it that "gallery" breathing room */}
              <div className="relative overflow-hidden bg-black/40 shadow-2xl aspect-[4/3] md:aspect-auto md:h-[400px] w-full">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-2.jpg"
                  alt="Atmospheric Depth"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain p-2 md:p-0"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-32 md:mt-40 border-t border-zinc-800 pt-12 pb-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 text-[10px] uppercase tracking-[.4em]">
              <Link
                href="/"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Main Cover
              </Link>
              <Link
                href="/thematic"
                className="text-zinc-500 hover:text-amber-500 transition-colors"
              >
                Thematic Environments
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-end text-[10px] uppercase tracking-[.4em] text-zinc-600">
              <p>Saturday Studio / Kitchener Waterloo</p>
              <p className="mt-2">Visual Strategy 2026</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
