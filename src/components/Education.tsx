"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import CertificateModal from "./CertificateModal";
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function Education() {
  const { education, certification } = PORTFOLIO_DATA;
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-800 text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Education & Certifications
          </h2>
          <p className="max-w-2xl text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Verified academic rigor from Ain Shams University combined with intensive industry-recognized mobile development training.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certification on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Ain Shams University Bachelor Degree */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 hover:border-yellow-400/30 light:hover:border-amber-400 shadow-xl backdrop-blur-sm">
            <div className="space-y-6">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 light:border-slate-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-700 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-yellow-400 light:text-amber-600">
                      Higher Education
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
                      {education.institution}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-xl bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 text-xs font-mono text-slate-300 light:text-slate-700 shrink-0">
                  {education.period}
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-white light:text-slate-900">
                  {education.degree}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 light:text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400 light:text-amber-600" />
                  {education.location}
                </p>
              </div>

              <p className="text-slate-300 light:text-slate-600 text-xs sm:text-sm leading-relaxed">
                {education.description}
              </p>

              {/* Coursework */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 light:text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-yellow-400 light:text-amber-600" />
                  Core Computer Science Foundations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.coursework.map((course, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] light:bg-slate-50 border border-white/5 light:border-slate-200 text-xs text-slate-300 light:text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 light:bg-amber-500 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-100 flex items-center justify-between text-xs text-slate-400 light:text-slate-500">
              <span>Faculty of Computer Science</span>
              <span className="text-emerald-400 light:text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Degree Verified
              </span>
            </div>
          </div>

          {/* Right: ITI Professional Training Certificate */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 hover:border-yellow-400/30 light:hover:border-amber-400 shadow-xl backdrop-blur-sm">
            <div className="space-y-6">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 light:border-slate-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/20 light:bg-amber-100 text-yellow-400 light:text-amber-700 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-yellow-400 light:text-amber-600">
                      Professional Certification
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
                      {certification.issuer}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-xl bg-yellow-400/10 light:bg-amber-100 border border-yellow-400/30 text-xs font-semibold text-yellow-400 light:text-amber-800 shrink-0">
                  MCIT Certified
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-white light:text-slate-900">
                  {certification.title}
                </p>
                <p className="text-xs text-slate-400 light:text-slate-500">
                  {certification.issuerType} • {certification.location}
                </p>
              </div>

              {/* Certificate Image Thumbnail with Click-to-preview */}
              <div 
                onClick={() => setCertModalOpen(true)}
                className="relative w-full h-44 rounded-2xl overflow-hidden bg-black/40 border border-yellow-400/30 light:border-amber-300 cursor-pointer group shadow-md"
              >
                <Image
                  src={certification.image}
                  alt={certification.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#070d1e]/60 group-hover:bg-[#070d1e]/40 transition-colors flex flex-col items-center justify-center text-center p-4">
                  <span className="px-3.5 py-1.5 rounded-xl bg-yellow-400 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5 group-hover:scale-105 transition-transform">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Click to View Full Certificate</span>
                  </span>
                </div>
              </div>

              <p className="text-slate-300 light:text-slate-600 text-xs sm:text-sm leading-relaxed">
                {certification.credentialDescription}
              </p>

              {/* Skills covered in ITI */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 light:text-slate-500">
                  Program Competencies Mastered:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {certification.skillsCovered.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-white/5 light:border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-white/5 light:border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 light:text-slate-500">
                Official Credential Reference: ITI-FLUTTER
              </span>
              <button
                onClick={() => setCertModalOpen(true)}
                className="text-xs font-bold text-yellow-400 light:text-amber-600 hover:underline flex items-center gap-1"
              >
                <span>Preview Document</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>

      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        imageSrc={certification.image}
        title={certification.title}
        issuer={certification.issuer}
      />
    </section>
  );
}
