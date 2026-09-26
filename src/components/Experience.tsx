"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import CertificateModal from "./CertificateModal";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Smartphone
} from "lucide-react";

export default function Experience() {
  const { experience, certification } = PORTFOLIO_DATA;
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-800 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Training Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Professional Experience & Training
          </h2>
          <p className="max-w-2xl text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Intensive industry training, cross-platform client development, and solid academic software engineering milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-yellow-400/30 light:border-amber-300 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          
          {experience.map((item, index) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#070d1e] light:bg-white border-2 border-yellow-400 light:border-amber-500 flex items-center justify-center shadow-md shadow-yellow-500/30 group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-yellow-400 light:bg-amber-500" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 hover:border-yellow-400/30 light:hover:border-amber-400/50 shadow-xl backdrop-blur-sm transition-all duration-300">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/10 light:border-slate-200">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-yellow-400 light:text-amber-600">
                      {item.organizationType}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 light:text-slate-700 flex items-center gap-2 mt-1">
                      <span>{item.company}</span>
                      <span>•</span>
                      <span className="text-slate-400 light:text-slate-500 font-normal flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-yellow-400 light:text-amber-600" /> {item.location}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 text-xs font-mono font-medium text-yellow-400 light:text-amber-700">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed my-4">
                  {item.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 light:text-slate-500">
                    Core Responsibilities & Milestones:
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-yellow-400 light:text-amber-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certificate preview button for ITI */}
                {item.certificateAsset && (
                  <div className="mb-6 p-4 rounded-2xl bg-yellow-400/10 light:bg-amber-50 border border-yellow-400/25 light:border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-yellow-400 text-slate-950">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-yellow-400 light:text-amber-800 uppercase tracking-wide">
                          Official Credential Available
                        </p>
                        <p className="text-sm font-semibold text-white light:text-slate-900">
                          {certification.title}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setCertModalOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 light:bg-amber-500 light:hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-yellow-500/20"
                    >
                      <span>View Verified Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 light:border-slate-100">
                  <span className="text-xs text-slate-400 light:text-slate-500 font-semibold mr-1">
                    Tech:
                  </span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-white/5 light:border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Certificate Modal */}
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
