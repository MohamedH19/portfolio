"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Award,
  Terminal,
  Cpu,
  Layers,
  Heart
} from "lucide-react";

export default function About() {
  const { personal, education, certification } = PORTFOLIO_DATA;

  const keyStrengths = [
    {
      title: "Clean Architecture & State Management",
      desc: "Architecting apps using Riverpod, BLoC, and Repository patterns ensuring high maintainability and testability.",
      icon: Layers
    },
    {
      title: "Pixel-Perfect UI & Fluid Motion",
      desc: "Delivering responsive Flutter widgets adhering strictly to Material 3 & Apple Human Interface guidelines.",
      icon: Terminal
    },
    {
      title: "Resilient API & Cloud Systems",
      desc: "Integrating RESTful services, Firebase real-time data sync, JWT security, and push notifications.",
      icon: Cpu
    },
    {
      title: "Solid CS & Algorithmic Foundation",
      desc: "Bachelor's degree from Ain Shams University guaranteeing strong data structures, OOP, and optimization skills.",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-800 text-xs font-semibold tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Crafting Reliable Mobile Experiences
          </h2>
          <p className="max-w-2xl text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Bridging strong computer science theory with modern Flutter application engineering to build intuitive, scalable apps.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 backdrop-blur-sm shadow-xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 flex items-center gap-2">
                <span>Who I Am</span>
                <span className="w-12 h-0.5 bg-yellow-400 light:bg-amber-500 rounded-full" />
              </h3>

              {personal.bio.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10 light:border-slate-200">
                <h4 className="text-xs uppercase tracking-wider font-bold text-yellow-400 light:text-amber-600 mb-2">
                  Professional Philosophy
                </h4>
                <blockquote className="italic text-slate-300 light:text-slate-700 border-l-2 border-yellow-400 light:border-amber-500 pl-4 py-1 text-sm">
                  &ldquo;A great mobile app shouldn&apos;t just function; it should feel effortless, responsive to every touch, and built on architectural foundations that scale gracefully.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Core Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyStrengths.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.02] light:bg-white border border-white/5 light:border-slate-200 hover:border-yellow-400/30 light:hover:border-amber-400 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-yellow-400/10 light:bg-amber-100 flex items-center justify-center text-yellow-400 light:text-amber-700 mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white light:text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Personal Information Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] light:bg-white border border-white/10 light:border-slate-200 shadow-2xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white light:text-slate-900 pb-4 border-b border-white/10 light:border-slate-200 flex items-center justify-between">
                <span>Personal Information</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 light:text-emerald-700 font-semibold border border-emerald-500/20">
                  Ready to Hire
                </span>
              </h3>

              <div className="divide-y divide-white/5 light:divide-slate-100 text-sm mt-2">
                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-400 light:text-amber-600" /> Full Name
                  </span>
                  <span className="font-semibold text-white light:text-slate-900 text-right">
                    {personal.name}
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-yellow-400 light:text-amber-600" /> Role
                  </span>
                  <span className="font-semibold text-white light:text-slate-900 text-right">
                    {personal.title}
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-yellow-400 light:text-amber-600" /> Location
                  </span>
                  <span className="font-semibold text-white light:text-slate-900 text-right">
                    {personal.location}
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-yellow-400 light:text-amber-600" /> Education
                  </span>
                  <span className="font-semibold text-white light:text-slate-900 text-right">
                    {education.institution}
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-400 light:text-amber-600" /> Certification
                  </span>
                  <span className="font-semibold text-yellow-400 light:text-amber-600 text-right">
                    {certification.issuer}
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-2">
                    <Languages className="w-4 h-4 text-yellow-400 light:text-amber-600" /> Languages
                  </span>
                  <span className="font-semibold text-white light:text-slate-900 text-right">
                    Arabic (Native), English
                  </span>
                </div>

                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-yellow-400 light:text-amber-600" /> Email
                  </span>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="font-mono text-xs text-yellow-400 light:text-amber-600 hover:underline text-right"
                  >
                    {personal.email}
                  </a>
                </div>

                <div className="py-3 flex items-center justify-between gap-4">
                  <span className="text-slate-400 light:text-slate-500 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-yellow-400 light:text-amber-600" /> Phone
                  </span>
                  <a 
                    href={`tel:${personal.phoneRaw}`}
                    className="font-mono text-xs text-slate-200 light:text-slate-700 hover:text-yellow-400 light:hover:text-amber-600 text-right"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 p-4 rounded-xl bg-yellow-400/10 light:bg-amber-50 border border-yellow-400/20 light:border-amber-200 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-400 light:text-amber-600 shrink-0" />
                <p className="text-xs text-slate-300 light:text-slate-700">
                  <strong className="text-white light:text-slate-900">Verified Credentials:</strong> ITI Certified Mobile Developer with Ain Shams CS Bachelor Degree.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
