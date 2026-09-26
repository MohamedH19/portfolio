"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Smartphone, 
  CheckCircle2, 
  Code,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  const handleDownloadCV = (e: React.MouseEvent) => {
    // Generate an automatic CV download / print action
    window.open(`mailto:${personal.email}?subject=Requesting%20CV%20-%20Mohamed%20Hesham&body=Hi%20Mohamed,%20I%20would%20like%20to%20review%20your%20full%20curriculum%20vitae%20for%20a%20mobile%20developer%20role.`, '_blank');
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-yellow-500/10 via-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Identity & Bio */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 light:bg-amber-100/80 border border-yellow-400/25 light:border-amber-300 text-yellow-400 light:text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire & Contract Projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.15]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 light:from-amber-600 light:to-yellow-600">
                  {personal.name}
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 text-xs sm:text-sm font-medium text-slate-200 light:text-slate-700">
                  <Smartphone className="w-3.5 h-3.5 text-yellow-400 light:text-amber-600" />
                  {personal.title}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 text-xs sm:text-sm font-medium text-slate-200 light:text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400 light:text-amber-600" />
                  {personal.location}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed">
              Specializing in engineering high-performance, pixel-perfect iOS & Android applications using <strong className="text-white light:text-slate-900 font-semibold">Flutter</strong> and <strong className="text-white light:text-slate-900 font-semibold">Dart</strong>. Backed by solid Computer Science foundations from <strong className="text-yellow-400 light:text-amber-600">Ain Shams University</strong> and intensive professional training from <strong className="text-yellow-400 light:text-amber-600">ITI</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-yellow-400 hover:bg-yellow-300 light:bg-amber-500 light:hover:bg-amber-400 text-slate-950 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-white light:text-slate-800 border border-white/10 light:border-slate-300 transition-all transform hover:-translate-y-0.5"
                title="Download CV / Send Request"
              >
                <Download className="w-4 h-4 text-yellow-400 light:text-amber-600" />
                <span>Download CV</span>
              </button>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 transition-colors"
              >
                <span>Let's Talk</span>
              </Link>
            </div>

            {/* Social links & quick contacts */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 light:border-slate-200 w-full justify-center lg:justify-start">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-yellow-400 light:hover:text-amber-600 transition-all border border-white/10 light:border-slate-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-yellow-400 light:hover:text-amber-600 transition-all border border-white/10 light:border-slate-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-yellow-400 light:hover:text-amber-600 transition-all border border-white/10 light:border-slate-200"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <div className="h-4 w-px bg-white/15 light:bg-slate-300 mx-1" />
              <span className="text-xs text-slate-400 light:text-slate-500 font-mono">
                {personal.email}
              </span>
            </div>

          </div>

          {/* Right Column: Visual Avatar & Tech Floaties */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              
              {/* Decorative Glow Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-yellow-400/20 via-sky-500/10 to-amber-500/20 blur-xl transform -rotate-3 scale-105" />

              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-yellow-400/30 light:border-amber-400/50 bg-[#0b152d] shadow-2xl">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-transparent opacity-60" />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#070d1e]/85 backdrop-blur-md border border-white/10">
                  <p className="text-xs text-yellow-400 font-bold tracking-wider uppercase">Cross-Platform Specialist</p>
                  <p className="text-sm font-semibold text-white truncate">Mohamed Hesham</p>
                </div>
              </div>

              {/* Floating Pill: Flutter Expert */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#0b152d]/95 light:bg-white/95 backdrop-blur-md border border-yellow-400/30 light:border-amber-300 shadow-xl flex items-center gap-2 animate-float">
                <div className="w-7 h-7 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-400 font-bold text-xs">
                  FL
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 light:text-slate-500 font-semibold uppercase">Framework</p>
                  <p className="text-xs font-bold text-white light:text-slate-900">Flutter 3.x & Dart</p>
                </div>
              </div>

              {/* Floating Pill: Riverpod & Clean Arch */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-[#0b152d]/95 light:bg-white/95 backdrop-blur-md border border-yellow-400/30 light:border-amber-300 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-yellow-400/20 light:bg-amber-100 flex items-center justify-center text-yellow-400 light:text-amber-700">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 light:text-slate-500 font-semibold uppercase">State & Architecture</p>
                  <p className="text-xs font-bold text-white light:text-slate-900">Riverpod & Clean Arch</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white/[0.03] light:bg-slate-100/70 border border-white/10 light:border-slate-200 backdrop-blur-sm">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 py-1">
              <span className="text-xs sm:text-sm font-medium text-slate-400 light:text-slate-500">
                {stat.label}
              </span>
              <span className="text-base sm:text-xl font-extrabold text-yellow-400 light:text-amber-600 mt-1">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
