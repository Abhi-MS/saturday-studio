import Image from "next/image";
import Link from "next/link";

export default function ThematicPage() {
  return (
    <main className="magazine-viewport bg-[#0f0f11] min-h-screen text-[#f5f5f5] selection:bg-amber-900/40 font-light">
      <div className="magazine-page container mx-auto px-6 py-16 md:px-10 max-w-6xl">
        <header className="mb-20">
          {/* Fixed Back Button: added inline-flex and relative z-10 to ensure it's on top and sized correctly */}
          <Link
            href="/"
            className="relative z-10 inline-flex items-center text-[10px] uppercase tracking-[.3em] text-amber-500 hover:text-amber-200 transition-colors py-2"
          >
            ← Back to Cover
          </Link>

          <h1 className="mt-8 text-5xl md:text-7xl font-serif tracking-tight text-white">
            Thematic <br />
            <span className="italic text-amber-200/90">Environments.</span>
          </h1>

          <div className="h-px w-20 bg-amber-500/50 mt-8 mb-6"></div>

          <p className="max-w-xl text-zinc-400 leading-relaxed text-sm md:text-base">
            Strategic visual direction focused on narrative staging. This series
            demonstrates the application of curated tonal palettes and
            environmental depth to build a cohesive character for premium
            products.
          </p>
        </header>

        <section className="space-y-32">
          {/* 01: Duffle walking */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <span className="text-[10px] tracking-[.4em] text-amber-500/70 uppercase">
                Narrative Concept 01
              </span>
              <h3 className="text-3xl font-serif text-amber-100 mt-2 mb-4">
                Kinetic Staging
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Establishing a sense of purposeful motion within a thematic
                landscape. This technique emphasizes the architectural
                silhouette of the product, creating an aspirational lifestyle
                aesthetic.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="magazine-image-container h-auto max-h-[65vh] sm:max-h-[380px] md:h-[500px]">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag-2.jpg"
                  alt="Kinetic Staging Study"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* 02: Duffle on Stone */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-7 order-2 md:order-1">
              <div className="magazine-image-container h-auto max-h-[450px] sm:max-h-[320px] md:h-[450px]">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag-1.jpg"
                  alt="Material Narrative"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 order-1 md:order-2">
              <span className="text-[10px] tracking-[.4em] text-amber-500/70 uppercase">
                Narrative Concept 02
              </span>
              <h3 className="text-3xl font-serif text-amber-100 mt-2 mb-4">
                Material Authenticity
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                A study in texture and environmental contrast. By placing the
                product against organic elements, the material quality is
                emphasized through tactile visual storytelling.
              </p>
            </div>
          </div>

          {/* 03: Backpack */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <span className="text-[10px] tracking-[.4em] text-amber-500/70 uppercase">
                Narrative Concept 03
              </span>
              <h3 className="text-3xl font-serif text-amber-100 mt-2 mb-4">
                Ambient Integration
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Utilizing soft-wrap lighting to create an editorial mood. This
                approach ensures the product feels like a natural extension of
                its intended world rather than a secondary object.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="magazine-image-container h-auto max-h-[65vh] sm:max-h-[340px] md:h-[550px]">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag-5.jpg"
                  alt="Ambient Integration"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* 04: Shoulder Bag */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-7 order-2 md:order-1">
              <div className="magazine-image-container h-auto max-h-[600px] sm:max-h-[360px] md:h-[600px]">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag-3.jpg"
                  alt="Chromatic Harmony"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 order-1 md:order-2">
              <span className="text-[10px] tracking-[.4em] text-amber-500/70 uppercase">
                Narrative Concept 04
              </span>
              <h3 className="text-3xl font-serif text-amber-100 mt-2 mb-4">
                Chromatic Harmony
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Strategic color coordination between product and environment.
                This method reinforces a premium positioning through consistent
                visual unity across the collection.
              </p>
            </div>
          </div>

          {/* 05 & 06: Details */}
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-4">
              <div className="magazine-image-container h-auto min-h-[220px] sm:min-h-[260px] mb-6">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag-6.jpg"
                  alt="Tactile Detail"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-serif text-amber-200 uppercase tracking-widest">
                Tactile Detail
              </h3>
              <p className="text-[10px] text-zinc-500 mt-2 italic tracking-wider">
                Focus on material grain and craftsmanship.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="magazine-image-container h-auto max-h-[65vh] sm:max-h-[360px] md:h-[600px]">
                <Image
                  src="https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag-4.jpg"
                  alt="Thematic Form"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-contain"
                />
              </div>
              <p className="text-zinc-400 mt-6 text-sm italic max-w-sm">
                Exploring form within the narrative. A minimalist approach to
                product presentation, optimized for editorial spreads.
              </p>
            </div>
          </div>
        </section>

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
                href="/noir"
                className="text-zinc-500 hover:text-amber-500 transition-colors"
              >
                Nocturnal Aesthetics
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
