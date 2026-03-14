import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TemplateDetailsPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0b0f19] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Template <span className="text-yellow-400">{id}</span> Details
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A deep dive into the architecture and features of the selected premium template instance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mock Preview Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
            <Image
              src={`https://via.placeholder.com/800x600/facc15/000000?text=Premium+Template+${id}`}
              alt={`Template ${id}`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Details Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-600 mb-2">
                Modern & Fully Responsive
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                A highly optimized, production-grade template designed for modern startups, freelance developers, and agencies. Engineered with clean architecture, rapid loading speeds, and out-of-the-box technical SEO compliance.
              </p>
            </div>

            <ul className="space-y-4 mb-8 text-gray-300 text-lg">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                Responsive, mobile-first design architecture
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                Framer Motion & Tailwind optimized UI
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                Next.js App Router (React Server Components)
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                High-end dynamic animations
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-auto">
              <a 
                href="#"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all text-center flex-1 sm:flex-none flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                Live Demo
              </a>
              <Link
                href={`/customize?template=${id}`}
                className="px-8 py-3 rounded-full bg-yellow-400 text-[#0b0f19] font-bold hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all flex-1 sm:flex-none text-center flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                Purchase Now
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
