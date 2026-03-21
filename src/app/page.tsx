import Link from "next/link";

export default function Home() {
  return (
    <main className="magazine-viewport min-h-screen bg-transparent text-[#f0f0f0] selection:bg-amber-900/40 overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="magazine-page container mx-auto flex min-h-screen flex-col justify-center px-8 py-12 md:px-20 relative">
        <header className="relative z-10 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-amber-500/50"></div>
            <span className="text-[10px] uppercase tracking-[.6em] text-amber-500/80 font-medium">
              Volume 2026 • Visual Strategy
            </span>
          </div>

          <h1
            className="text-7xl md:text-9xl font-serif tracking-tighter text-white leading-[0.85]"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Saturday <br />
            <span className="text-amber-200/90 ml-4 md:ml-12 italic tracking-tighter">
              Studio.
            </span>
          </h1>

          <h2 className="mt-12 text-lg md:text-xl font-light leading-relaxed text-zinc-400 max-w-xl">
            A specialized lens on{" "}
            <span className="text-white">
              product architecture and tonal depth.
            </span>{" "}
            Translating physical goods into cinematic assets through precise
            lighting and editorial pacing.
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 relative z-10 mb-24">
          {/* Card 01 - Thematic Environments */}
          <Link
            href="/thematic"
            prefetch={false}
            className="group relative overflow-hidden border border-white/5 p-8 rounded-sm hover:border-amber-500/30 hover:scale-105 transition-all duration-700 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/maple.jpg)" }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 group-hover:text-amber-500/40 transition-all text-4xl font-serif italic">
                01
              </div>
              <span className="text-[9px] uppercase tracking-[.4em] text-zinc-300 group-hover:text-amber-400 transition-colors">
                Editorial Narrative
              </span>
              <h3 className="mt-4 text-4xl font-serif text-white tracking-tight">
                Thematic <br />
                Environments
              </h3>
              <p className="mt-6 text-sm text-zinc-300 leading-relaxed font-light max-w-xs group-hover:text-zinc-100 transition-colors">
                Visual storytelling through curated staging. Creating cohesive
                thematic worlds that utilize texture and landscape to define
                brand character.
              </p>
              <div className="mt-10 h-[1px] w-0 bg-amber-500/40 group-hover:w-full transition-all duration-700"></div>
              <div className="absolute bottom-4 right-4 text-zinc-300 group-hover:text-amber-400 transition-colors text-lg">
                →
              </div>
            </div>
          </Link>

          {/* Card 02 - Nocturnal Aesthetics */}
          <Link
            href="/noir"
            prefetch={false}
            className="group relative overflow-hidden border border-white/5 p-8 rounded-sm hover:border-cyan-500/30 hover:scale-105 transition-all duration-700 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/coffee.jpg)" }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 group-hover:text-cyan-500/40 transition-all text-4xl font-serif italic">
                02
              </div>
              <span className="text-[9px] uppercase tracking-[.4em] text-zinc-300 group-hover:text-cyan-400 transition-colors">
                Controlled Low-Key
              </span>
              <h3 className="mt-4 text-4xl font-serif text-white tracking-tight">
                Nocturnal <br />
                Aesthetics
              </h3>
              <p className="mt-6 text-sm text-zinc-300 leading-relaxed font-light max-w-xs group-hover:text-zinc-100 transition-colors">
                Where shadow defines the form. High-contrast staging utilizing
                cinematic silhouettes and luxe specular highlights to isolate
                product architecture.
              </p>
              <div className="mt-10 h-[1px] w-0 bg-cyan-500/40 group-hover:w-full transition-all duration-700"></div>
              <div className="absolute bottom-4 right-4 text-zinc-300 group-hover:text-cyan-400 transition-colors text-lg">
                →
              </div>
            </div>
          </Link>
        </div>

        {/* Enhanced Footer Section */}
        <footer className="relative z-10 pt-12 border-t border-white/5 pb-12">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-[.2em] max-w-md">
                Saturday Studio operates at the intersection of{" "}
                <span className="text-zinc-300 underline underline-offset-8 decoration-amber-500/40">
                  visual journalism and commercial art.
                </span>{" "}
                Dedicated to delivering intentional, high-fidelity imagery.
              </p>
              <p className="mt-8 text-[10px] text-zinc-500 uppercase tracking-[.5em] font-semibold">
                Kitchener Waterloo • Canada
              </p>
            </div>

            <div className="md:text-right flex flex-col md:items-end gap-4">
              <span className="text-[9px] uppercase tracking-[.4em] text-zinc-600">
                Available for commissions
              </span>
              <a
                href="mailto:saturdaystudio.visuals@gmail.com"
                className="relative z-50 pointer-events-auto text-sm font-serif italic text-amber-200/70 hover:text-amber-200 transition-colors border-b border-amber-200/20 pb-1"
              >
                Inquire via Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
