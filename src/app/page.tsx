import Link from "next/link";

const services = [
  {
    title: "Product",
    description:
      "Editorial product photography for brands, launches and campaigns.",
  },
  {
    title: "Portraits & Couples",
    description:
      "Cinematic portraits and couple sessions with an editorial feel.",
  },
  {
    title: "Brand Content",
    description:
      "Visual assets for small businesses, websites and social media.",
  },
];

const packages = [
  {
    name: "Essential",
    price: "$75",
    note: "A simple product package for a few strong images.",
    features: ["1 product", "3 final edits", "1 setup", "5–7 day turnaround"],
    accent: "amber",
  },
  {
    name: "Launch",
    price: "$175",
    note: "A fuller package for a new product or small line.",
    features: [
      "Up to 3 products",
      "9 final edits",
      "Up to 3 images per product",
      "5–7 day turnaround",
    ],
    accent: "rose",
  },
  {
    name: "Collection",
    price: "$325",
    note: "A larger content package for ongoing product work.",
    features: [
      "Up to 6 products",
      "18 final edits",
      "Multiple compositions",
      "5–7 day turnaround",
    ],
    accent: "cyan",
  },
];

const chapters = [
  {
    title: "Thematic Environments",
    subtitle: "Editorial Narrative",
    href: "/thematic",
    image: "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/bag-2.jpg",
    tone: "amber",
    textClass: "text-white",
    labelClass: "text-zinc-300",
    overlayClass: "bg-black/40",
  },
  {
    title: "Nocturnal Aesthetics",
    subtitle: "Controlled Low-Key",
    href: "/noir",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/moody-3.jpg",
    tone: "cyan",
    textClass: "text-white",
    labelClass: "text-zinc-300",
    overlayClass: "bg-black/40",
  },
  {
    title: "White Form",
    subtitle: "Clean Product Studies",
    href: "/white",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/IMG_9244.jpg",
    tone: "slate",
    textClass: "text-zinc-950",
    labelClass: "text-zinc-800",
    overlayClass: "bg-white/20",
  },
  {
    title: "Table Studies",
    subtitle: "Food & Tabletop",
    href: "/food",
    image:
      "https://qllrjgjfx9hjelru.public.blob.vercel-storage.com/Food/IMG_0009.jpg",
    tone: "rose",
    textClass: "text-white",
    labelClass: "text-zinc-300",
    overlayClass: "bg-black/40",
  },
] as const;

const chapterStyles = {
  amber: "hover:border-amber-500/30",
  cyan: "hover:border-cyan-500/30",
  slate: "hover:border-zinc-500/30",
  rose: "hover:border-rose-500/30",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Saturday Studio",
  image: "https://saturday-studio.vercel.app/icon.svg",
  description:
    "Cinematic photography for products, brands, and people in the Kitchener-Waterloo and Toronto area.",
  areaServed: ["Kitchener", "Waterloo", "Toronto", "Greater Toronto Area"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  url: "https://saturday-studio.vercel.app",
  email: "mailto:saturdaystudio.visuals@gmail.com",
  sameAs: [],
  priceRange: "$$",
  keywords:
    "Kitchener photographer, Waterloo photographer, Toronto product photography, Kitchener couple photographer",
};

export default function Home() {
  return (
    <main className="magazine-viewport min-h-screen bg-transparent text-[#f0f0f0] selection:bg-amber-900/40 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="magazine-page container mx-auto flex min-h-screen flex-col justify-center px-4 py-6 md:px-8 lg:px-10 relative">
        <header className="relative z-10 mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-amber-500/50" />
            <span className="text-[10px] uppercase tracking-[.55em] text-amber-500/80 font-medium">
              Saturday Studio • Kitchener-Waterloo / Toronto
            </span>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            <div>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter text-white leading-[0.82]"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                Saturday
                <span className="block text-amber-200/90 italic tracking-tighter md:ml-6">
                  Studio.
                </span>
              </h1>
            </div>

            <div className="max-w-2xl space-y-5">
              <p className="text-xl md:text-2xl font-light text-zinc-100 leading-snug">
                Cinematic photography for products, brands & people.
              </p>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
                Editorial imagery for businesses, personal brand work, and
                intimate portrait stories across the Kitchener-Waterloo and
                Toronto area.
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              href="/inquire"
              className="inline-flex items-center justify-center rounded-full border border-amber-500/60 bg-amber-500/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-amber-100 transition-colors hover:bg-amber-500/15"
            >
              Inquire / Book a Session
            </Link>
            <Link
              href="/thematic"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/0 px-6 py-3 text-sm uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/3"
            >
              View Work
            </Link>
          </div>
        </header>

        <section id="work" className="relative z-10 mb-14 md:mb-20">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[.45em] text-zinc-500">
                Selected work
              </p>
            </div>
            <Link
              href="/inquire"
              className="text-[10px] uppercase tracking-[.3em] text-amber-200/80 hover:text-amber-100"
            >
              Inquire →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {chapters.map((chapter, index) => (
              <Link
                key={chapter.href}
                href={chapter.href}
                prefetch={false}
                className={`group relative overflow-hidden border border-white/5 p-8 rounded-sm transition-all duration-700 bg-cover bg-center bg-no-repeat ${chapterStyles[chapter.tone]}`}
                style={{ backgroundImage: `url(${chapter.image})` }}
              >
                <div
                  className={`absolute inset-0 ${chapter.overlayClass} group-hover:opacity-90 transition-all duration-700`}
                />
                <div className="relative z-10">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 group-hover:text-amber-500/40 transition-all text-4xl font-serif italic">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span
                    className={`text-[9px] uppercase tracking-[.4em] ${chapter.labelClass} transition-colors`}
                  >
                    {chapter.subtitle}
                  </span>
                  <h3
                    className={`mt-4 text-4xl font-serif tracking-tight ${chapter.textClass}`}
                  >
                    {chapter.title.split(" ").slice(0, -1).join(" ")}
                    <br />
                    {chapter.title.split(" ").slice(-1)[0]}
                  </h3>
                  <p
                    className={`mt-6 text-sm leading-relaxed max-w-xs ${chapter.textClass}`}
                  >
                    {chapter.title === "Thematic Environments" &&
                      "Clean product imagery with atmosphere, depth, and a strong visual story."}
                    {chapter.title === "Nocturnal Aesthetics" &&
                      "Moody product photography using light, shadow, and contrast to make forms stand out."}
                    {chapter.title === "White Form" &&
                      "Minimal product shots for clean ecommerce, catalog, and brand visuals."}
                    {chapter.title === "Table Studies" &&
                      "Food photography for menus, campaigns, and content that feels warm and appetizing."}
                  </p>
                  <div className="mt-10 h-[1px] w-0 bg-amber-500/40 group-hover:w-full transition-all duration-700" />
                  <div
                    className={`absolute bottom-4 right-4 transition-colors text-lg ${chapter.textClass}`}
                  >
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative z-10 mb-14 md:mb-20">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[.45em] text-zinc-500">
              Services
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white">
              Photography built for real work.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-white/8 bg-white/[0.02] p-6 md:p-7"
              >
                <div className="mb-5 h-px w-12 bg-amber-500/40" />
                <h3 className="text-2xl font-serif text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative z-10 mb-14 md:mb-20">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[.45em] text-zinc-500">
              Packages
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif text-white">
              Choose your package.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`border p-6 md:p-7 flex h-full flex-col ${
                  pkg.accent === "amber"
                    ? "border-amber-500/20 bg-[#14120f]"
                    : pkg.accent === "rose"
                      ? "border-rose-500/20 bg-[#140d0f]"
                      : "border-cyan-500/20 bg-[#0d1117]"
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[.35em] text-zinc-400">
                    {pkg.name}
                  </p>
                  <span className="text-[10px] uppercase tracking-[.3em] text-amber-200/80">
                    {pkg.price}
                  </span>
                </div>

                <h3 className="text-3xl font-serif text-white">{pkg.price}</h3>

                <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                  {pkg.note}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-2 leading-relaxed">
                      <span className="mt-1 text-amber-300">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/8 pt-8 pb-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[.45em] text-zinc-500">
                Service area
              </p>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                Saturday Studio serves clients in Kitchener, Waterloo, the
                Greater Toronto Area, and surrounding communities. The studio
                works with brands, founders, couples, and small businesses
                looking for a premium editorial approach without unnecessary
                friction.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-[.45em] text-zinc-500">
                Contact
              </p>
              <a
                href="mailto:saturdaystudio.visuals@gmail.com"
                className="mt-4 inline-block text-sm font-serif italic text-amber-200/80 hover:text-amber-100"
              >
                saturdaystudio.visuals@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
