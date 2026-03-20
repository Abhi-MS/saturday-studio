import Image from "next/image";
import Link from "next/link";

export default function NocturnalPage() {
  return (
    <main className="magazine-viewport bg-[#090b0f] min-h-screen text-[#f5f5f5] selection:bg-cyan-900/40 font-light">
      <div className="magazine-page container mx-auto px-6 py-16 md:px-10 max-w-6xl">
        <header className="mb-20">
          <Link
            href="/"
            className="relative z-10 inline-flex items-center text-[10px] uppercase tracking-[.3em] text-cyan-400 hover:text-cyan-200 transition-colors py-2"
          >
            ← Back to Cover
          </Link>

          <h1 className="mt-8 text-5xl md:text-7xl font-serif tracking-tight text-white">
            Nocturnal <br />
            <span className="italic text-cyan-400/90">Aesthetics.</span>
          </h1>

          <div className="h-px w-20 bg-cyan-500/50 mt-8 mb-6"></div>

          <p className="max-w-xl text-zinc-400 leading-relaxed text-sm md:text-base">
            Exploring the intersection of shadow and form. This collection
            demonstrates a methodical approach to high-contrast product staging,
            utilizing negative space to isolate silhouettes and create cinematic
            visual depth.
          </p>
        </header>

        <section className="space-y-20">
          {/* Study 01 - Moody 5 - Now spanning 5 cols */}
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Expanded Text Block to 7 columns */}
            <div className="col-span-12 md:col-span-7 md:mt-12">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 01
              </span>
              <h3 className="text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Silhouette Isolation
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Focusing on sharp verticality within a low-key environment. By
                precisely controlling the fall-off, the product's profile is
                defined against a dark void, ideal for high-impact branding.
              </p>
            </div>
            {/* Reduced Image Block to 5 columns */}
            <div className="col-span-12 md:col-span-5">
              <div className="magazine-image-container relative overflow-hidden bg-black/40 shadow-2xl">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-5.jpg"
                  alt="Silhouette Isolation"
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Study 02 - Moody 3 - Now spanning 5 cols */}
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <div className="magazine-image-container relative overflow-hidden bg-black/40 shadow-2xl">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-3.jpg"
                  alt="Reflective Precision"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2 md:mt-12">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 02
              </span>
              <h3 className="text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Reflective Precision
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Managing specular highlights on complex surfaces. In this
                approach, light is treated as a sculptural tool to trace the
                contours and surface quality of the packaging.
              </p>
            </div>
          </div>

          {/* Study 03 - Moody 4 - Now spanning 5 cols */}
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-7 md:mt-12">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 03
              </span>
              <h3 className="text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Chromatic Contrast
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Directing focus through localized saturation. By anchoring the
                composition in deep blacks, vibrant pigments emerge with higher
                perceived intensity, creating a bold visual hierarchy.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="magazine-image-container relative overflow-hidden bg-black/40 shadow-2xl">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-4.jpg"
                  alt="Chromatic Contrast"
                  width={1200}
                  height={1400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Study 04 - Moody 1 - Now spanning 5 cols */}
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-5 order-2 md:order-1">
              <div className="magazine-image-container relative overflow-hidden bg-black/40 shadow-2xl">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-1.jpg"
                  alt="Form Tracing"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 order-1 md:order-2 md:mt-12">
              <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                Studio Concept 04
              </span>
              <h3 className="text-3xl font-serif text-cyan-100 mt-2 mb-4">
                Form Tracing
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                Defining the subject solely through luminous edges. This
                minimalist lighting strategy is designed to create mystery,
                ideal for high-end product launches.
              </p>
            </div>
          </div>
        </section>

        {/* Updated Footer with Links */}
        <footer className="mt-40 border-t border-zinc-800 pt-12 pb-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex gap-12 text-[10px] uppercase tracking-[.4em]">
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
