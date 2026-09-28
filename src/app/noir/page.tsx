import Image from "next/image";
import Link from "next/link";

const studies = [
  {
    label: "Studio Concept 01",
    title: "Silhouette Isolation",
    description:
      "Focusing on sharp verticality within a low-key environment. By precisely controlling the fall-off, the product's profile is defined against a dark void.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-5.jpg",
    align: "left",
  },
  {
    label: "Studio Concept 02",
    title: "Reflective Precision",
    description:
      "Managing specular highlights on complex surfaces. Light is treated as a sculptural tool to trace contours and preserve a tactile sense of depth.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-3.jpg",
    align: "right",
  },
  {
    label: "Studio Concept 03",
    title: "Chromatic Contrast",
    description:
      "Directing focus through localized saturation. Vibrant pigments emerge with higher perceived intensity against deep blacks and cool tonal shadows.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-4.jpg",
    align: "left",
  },
  {
    label: "Studio Concept 04",
    title: "Form Tracing",
    description:
      "Defining the subject solely through luminous edges. Minimalist lighting creates a sculptural, mysterious atmosphere with strong editorial impact.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-1.jpg",
    align: "right",
  },
  {
    label: "Studio Concept 05",
    title: "Atmospheric Depth",
    description:
      "Utilizing linear light paths to create a sense of three-dimensional space. Geometric glow and shadow add depth without sacrificing clarity.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-2.jpg",
    align: "left",
  },
  {
    label: "Studio Concept 06",
    title: "Velvet Shadow",
    description:
      "Rich tonal falloff and softened contrast create a warmer, more tactile visual rhythm. This composition leans into intimacy and mood while staying polished.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Gryninc-13.jpg",
    align: "right",
  },
  {
    label: "Studio Concept 07",
    title: "Soft Light Study",
    description:
      "A cleaner monochrome approach with soft edge contrast and a grounded lighting sculpt. The subject remains clear and premium without losing the low-key mood.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag%20%281%29.jpg",
    align: "left",
  },
  {
    label: "Studio Concept 08",
    title: "Quiet Volume",
    description:
      "A minimalist framing exercise focused on shape, balance and the quiet drama of a shadowed form in a refined studio space.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag%20%282%29.jpg",
    align: "right",
  },
];

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
          {studies.map((study) => (
            <div
              key={study.title}
              className="grid grid-cols-12 gap-8 md:gap-12 items-center"
            >
              <div
                className={`col-span-12 md:col-span-5 ${
                  study.align === "right" ? "order-2 md:order-2" : "order-1"
                }`}
              >
                <span className="text-[10px] tracking-[.4em] text-cyan-500/70 uppercase">
                  {study.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-cyan-100 mt-2 mb-4">
                  {study.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                  {study.description}
                </p>
              </div>

              <div
                className={`col-span-12 md:col-span-7 ${
                  study.align === "right" ? "order-1 md:order-1" : "order-2"
                }`}
              >
                <div className="relative overflow-hidden bg-black/40 shadow-2xl w-full">
                  <div className="relative h-[320px] sm:h-[420px] md:h-[500px]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-contain p-4 md:p-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-32 md:mt-40 border-t border-zinc-800 pt-12 pb-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 text-[10px] uppercase tracking-[.4em]">
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
              <Link
                href="/noir"
                className="text-zinc-500 hover:text-cyan-400 transition-colors"
              >
                Nocturnal Aesthetics
              </Link>
              <Link
                href="/white"
                className="text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                White Form
              </Link>
              <Link
                href="/food"
                className="text-zinc-500 hover:text-amber-400 transition-colors"
              >
                Table Studies
              </Link>
              <Link
                href="/inquire"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Inquire
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
