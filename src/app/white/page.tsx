import Image from "next/image";
import Link from "next/link";

const studies = [
  {
    label: "Studio Concept 01",
    title: "Material Precision",
    description:
      "A crisp visual rhythm shaped by form, texture, and restraint. The product sits confidently within a clean frame without losing its tactile character.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Gryninc-16.jpg",
    align: "left",
  },
  {
    label: "Studio Concept 02",
    title: "Quiet Balance",
    description:
      "Negative space and tonal control create a premium, easy-to-shop presentation. Every element is allowed to breathe while the object remains central.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Gryinc%20-%20-20.jpg",
    align: "right",
  },
  {
    label: "Studio Concept 03",
    title: "Bottle Study",
    description:
      "Carefully managed highlights and a soft neutral backdrop keep the packaging feeling elevated, clinical, and ready for brand use.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/IMG_9244.jpg",
    align: "left",
  },
  {
    label: "Studio Concept 04",
    title: "Drop & Detail",
    description:
      "Close attention to the product silhouette and finish gives the image a sense of quality that translates cleanly across ecommerce and editorial placements.",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/IMG_9338.jpg",
    align: "right",
  },
];

export default function WhiteFormPage() {
  return (
    <main className="magazine-viewport bg-[#f4f3f0] min-h-screen text-[#111111] selection:bg-zinc-400/40 font-light overflow-x-hidden">
      <div className="magazine-page white-form-page container mx-auto px-6 py-12 md:py-16 md:px-10 max-w-6xl">
        <header className="mb-16 md:mb-20">
          <Link
            href="/"
            className="relative z-10 inline-flex items-center text-[10px] uppercase tracking-[.3em] text-zinc-700 hover:text-zinc-900 transition-colors py-2"
          >
            ← Back to Cover
          </Link>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight text-zinc-900 leading-tight">
            White <br />
            <span className="italic text-zinc-700">Form.</span>
          </h1>

          <div className="h-px w-16 bg-zinc-400 mt-8 mb-6"></div>

          <p className="max-w-xl text-zinc-700 leading-relaxed text-sm md:text-base">
            Clean product photography built for clarity, precision, and premium
            retail presentation. A minimal white space approach keeps the
            product feeling confident, elevated and ready for commerce.
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
                <span className="text-[10px] tracking-[.4em] text-zinc-500 uppercase">
                  {study.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-zinc-800 mt-2 mb-4">
                  {study.title}
                </h3>
                <p className="text-zinc-700 leading-relaxed text-sm max-w-lg">
                  {study.description}
                </p>
              </div>

              <div
                className={`col-span-12 md:col-span-7 ${
                  study.align === "right" ? "order-1 md:order-1" : "order-2"
                }`}
              >
                <div className="relative overflow-hidden bg-white shadow-[0_24px_60px_rgba(0,0,0,0.06)] w-full">
                  <div className="relative h-[320px] sm:h-[420px] md:h-[500px]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-contain p-4 md:p-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-24 border-t border-zinc-300 pt-12 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 text-[10px] uppercase tracking-[.4em] text-zinc-600">
              <Link href="/" className="hover:text-zinc-900 transition-colors">
                Main Cover
              </Link>
              <Link
                href="/thematic"
                className="hover:text-zinc-900 transition-colors"
              >
                Thematic Environments
              </Link>
              <Link
                href="/noir"
                className="hover:text-zinc-900 transition-colors"
              >
                Nocturnal Aesthetics
              </Link>
              <Link
                href="/white"
                className="hover:text-zinc-900 transition-colors"
              >
                White Form
              </Link>
              <Link
                href="/food"
                className="hover:text-zinc-900 transition-colors"
              >
                Table Studies
              </Link>
              <Link
                href="/inquire"
                className="hover:text-zinc-900 transition-colors"
              >
                Inquire
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-end text-[10px] uppercase tracking-[.4em] text-zinc-600">
              <p>Saturday Studio / Kitchener Waterloo</p>
              <p className="mt-2">Editorial Product • Brand Content</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
