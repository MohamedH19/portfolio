"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Wrench, 
  Smartphone, 
  Server, 
  Code2, 
  Database, 
  Layers, 
  Check, 
  Sparkles,
  Search
} from "lucide-react";

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-4 h-4" />;
      case "Server":
        return <Server className="w-4 h-4" />;
      case "Code2":
        return <Code2 className="w-4 h-4" />;
      case "Database":
        return <Database className="w-4 h-4" />;
      case "Layers":
        return <Layers className="w-4 h-4" />;
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  const filteredCategories = skills.map((category) => {
    if (activeCategory !== "all" && category.id !== activeCategory) {
      return null;
    }

    const filteredSkills = category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-800 text-xs font-semibold tracking-wider uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="max-w-2xl text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Comprehensive toolkit spanning cross-platform Flutter engineering, mobile architecture, backend microservices, and databases.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Categories Tab Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] light:bg-slate-100 border border-white/10 light:border-slate-200">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-500/20"
                  : "text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900"
              }`}
            >
              All Categories
            </button>

            {skills.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all ${
                  activeCategory === cat.id
                    ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-500/20 font-semibold"
                    : "text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5"
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Riverpod)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white/5 light:bg-white border border-white/10 light:border-slate-200 text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-yellow-400 light:focus:border-amber-500 transition-colors"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;
            return (
              <div
                key={category.id}
                className="p-6 rounded-2xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 hover:border-yellow-400/30 light:hover:border-amber-400/50 transition-all shadow-lg backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 light:border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-700 flex items-center justify-center">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h3 className="font-bold text-base text-white light:text-slate-900">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 light:text-slate-500">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                          skill.highlight
                            ? "bg-yellow-400/10 light:bg-amber-50 border-yellow-400/30 light:border-amber-300 text-yellow-300 light:text-amber-800 font-semibold"
                            : "bg-white/[0.03] light:bg-slate-50 border-white/10 light:border-slate-200 text-slate-300 light:text-slate-700 hover:border-white/20"
                        }`}
                      >
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-yellow-400/20 light:bg-amber-200 text-yellow-400 light:text-amber-900 font-bold uppercase">
                            {skill.tag}
                          </span>
                        )}
                        <span className={`text-[10px] ${
                          skill.level === "Advanced" ? "text-emerald-400 light:text-emerald-600" : "text-slate-400 light:text-slate-500"
                        }`}>
                          • {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 light:border-slate-100 flex items-center justify-between text-[11px] text-slate-400 light:text-slate-500">
                  <span>Production Tested</span>
                  <span className="flex items-center gap-1 text-emerald-400 light:text-emerald-600">
                    <Check className="w-3.5 h-3.5" /> High Proficiency
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Principles Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-blue-500/5 to-transparent border border-yellow-400/20 light:border-amber-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400 light:bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-yellow-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white light:text-slate-900">
                Core Engineering Philosophy
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600">
                Prioritizing clean layered architecture, predictable reactive state (Riverpod), and resilient asynchronous flows over quick hacks.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/30 light:bg-white border border-white/10 light:border-slate-200 text-yellow-400 light:text-amber-700">
              Clean Architecture
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/30 light:bg-white border border-white/10 light:border-slate-200 text-yellow-400 light:text-amber-700">
              Riverpod
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-black/30 light:bg-white border border-white/10 light:border-slate-200 text-yellow-400 light:text-amber-700">
              RESTful APIs
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
