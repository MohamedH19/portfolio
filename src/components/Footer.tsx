"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  ArrowUp, 
  Mail, 
  Smartphone,
  Heart
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 light:border-slate-200 bg-[#050a18] light:bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#hero" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-yellow-500/20">
                M
              </div>
              <span className="font-bold text-lg text-white light:text-slate-900">
                {personal.shortName}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              {personal.title} specialized in building high-performance cross-platform Flutter applications. Graduated from Ain Shams University & ITI Certified.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 light:text-emerald-700 text-xs font-semibold border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available for worldwide remote roles & Cairo onsite
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-yellow-400 light:text-amber-600">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <Link href="#about" className="text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors">
                About Me
              </Link>
              <Link href="#skills" className="text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors">
                Skills Stack
              </Link>
              <Link href="#projects" className="text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors">
                Featured Projects
              </Link>
              <Link href="#experience" className="text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors">
                Career & ITI
              </Link>
              <Link href="#education" className="text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors">
                Ain Shams Degree
              </Link>
              <Link href="#services" className="text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors">
                Services
              </Link>
              <Link href="#contact" className="text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Col 3: Social Hub & Back To Top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-yellow-400 light:text-amber-600">
              Follow & Connect
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 light:bg-slate-200 hover:bg-white/15 text-slate-300 light:text-slate-700 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 light:bg-slate-200 hover:bg-white/15 text-slate-300 light:text-slate-700 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-white/5 light:bg-slate-200 hover:bg-white/15 text-slate-300 light:text-slate-700 hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 light:bg-slate-200 hover:bg-yellow-400 hover:text-slate-950 text-xs font-semibold text-slate-300 light:text-slate-700 transition-all mt-2 group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with Next.js, TypeScript & Flutter Passion.
          </p>
        </div>

      </div>
    </footer>
  );
}
