"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  typeOfShoot: "",
  location: "",
  projectDescription: "",
};

export default function InquirePage() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const response = await fetch("/api/inquire", {
      method: "POST",
      body: new FormData(event.currentTarget),
    });

    if (!response.ok) {
      setErrorMessage(
        "Your message was not sent yet. Please email saturdaystudio.visuals@gmail.com directly instead.",
      );
      return;
    }

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <main className="magazine-viewport min-h-screen bg-transparent text-[#f0f0f0] selection:bg-amber-900/40">
      <div className="magazine-page container mx-auto max-w-5xl px-4 py-8 md:px-8 lg:px-10">
        <header className="mb-10 border-b border-white/8 pb-8">
          <Link
            href="/"
            className="inline-flex items-center text-[10px] uppercase tracking-[.35em] text-amber-500/80 hover:text-amber-200"
          >
            ← Back to home
          </Link>
          <h1 className="mt-8 text-4xl md:text-6xl font-serif text-white leading-tight">
            Inquire / Book a Session
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-400 leading-relaxed">
            Share a few details and I’ll be in touch with next steps,
            availability, and a tailored quote.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-white/8 bg-white/[0.02] p-5 md:p-7"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm text-zinc-300">
                <span className="mb-2 block text-[10px] uppercase tracking-[.3em] text-zinc-500">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none transition focus:border-amber-500/60"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm text-zinc-300">
                <span className="mb-2 block text-[10px] uppercase tracking-[.3em] text-zinc-500">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none transition focus:border-amber-500/60"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm text-zinc-300">
                <span className="mb-2 block text-[10px] uppercase tracking-[.3em] text-zinc-500">
                  Type of shoot
                </span>
                <select
                  name="typeOfShoot"
                  value={formData.typeOfShoot}
                  onChange={handleChange}
                  required
                  className="w-full border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none transition focus:border-amber-500/60"
                >
                  <option value="">Select one</option>
                  <option value="Product">Product</option>
                  <option value="Portraits & Couples">
                    Portraits & Couples
                  </option>
                  <option value="Brand Content">Brand Content</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="block text-sm text-zinc-300">
                <span className="mb-2 block text-[10px] uppercase tracking-[.3em] text-zinc-500">
                  Location
                </span>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none transition focus:border-amber-500/60"
                  placeholder="Kitchener, Toronto..."
                />
              </label>
            </div>

            <label className="block text-sm text-zinc-300">
              <span className="mb-2 block text-[10px] uppercase tracking-[.3em] text-zinc-500">
                Project description
              </span>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                rows={6}
                required
                className="w-full border border-white/10 bg-[#0d0d10] px-4 py-3 text-white outline-none transition focus:border-amber-500/60"
                placeholder="Tell me about your project, timeline, and what you need captured."
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-amber-500/60 bg-amber-500/10 px-6 py-3 text-sm uppercase tracking-[0.2em] text-amber-100 transition-colors hover:bg-amber-500/15"
              >
                Submit Inquiry
              </button>

              <p className="text-[10px] uppercase tracking-[.3em] text-zinc-500">
                Response time: usually within 1–2 business days
              </p>
            </div>

            {isSubmitted && (
              <div className="rounded-sm border border-emerald-500/30 bg-emerald-500/5 p-4 text-sm text-emerald-100">
                Thanks. Your inquiry has been sent successfully.
              </div>
            )}

            {errorMessage && (
              <div className="rounded-sm border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-100">
                {errorMessage}
              </div>
            )}
          </form>

          <aside className="border border-white/8 bg-white/[0.02] p-6">
            <p className="text-[10px] uppercase tracking-[.35em] text-zinc-500">
              Quick contact
            </p>
            <a
              href="mailto:saturdaystudio.visuals@gmail.com"
              className="mt-5 block text-sm font-serif italic text-amber-200/80 hover:text-amber-100"
            >
              saturdaystudio.visuals@gmail.com
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}
