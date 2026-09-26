"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Briefcase, 
  Smartphone, 
  Palette, 
  Globe, 
  Zap, 
  Check, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Services() {
  const { services } = PORTFOLIO_DATA;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-6 h-6" />;
      case "Palette":
        return <Palette className="w-6 h-6" />;
      case "Globe":
        return <Globe className="w-6 h-6" />;
      case "Zap":
        return <Zap className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-800 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Deliver</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Specialized Development Services
          </h2>
          <p className="max-w-2xl text-slate-400 light:text-slate-600 text-sm sm:text-base">
            High-standard mobile engineering solutions tailored for startups, tech agencies, and established products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 hover:border-yellow-400/35 light:hover:border-amber-400 shadow-xl backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-all duration-300 shadow-lg">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-yellow-400 light:group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-yellow-400/80 light:text-amber-600 font-mono mt-0.5">
                      Production Ready Delivery
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 light:text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    What You Get:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-yellow-400/20 light:bg-amber-100 flex items-center justify-center text-yellow-400 light:text-amber-700 shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 light:bg-slate-100 border border-white/5 light:border-slate-200 text-slate-300 light:text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 light:text-amber-600 hover:text-yellow-300 light:hover:text-amber-500 transition-colors"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
