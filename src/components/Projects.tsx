"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { 
  FolderKanban, 
  ExternalLink, 
  ArrowRight, 
  Smartphone, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-800 text-xs font-semibold tracking-wider uppercase">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Selected Mobile Engineering Projects
          </h2>
          <p className="max-w-2xl text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Real-world cross-platform applications built with Flutter, Riverpod state management, and reliable backend cloud services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.03] light:bg-slate-100 border border-white/10 light:border-slate-200">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-500/20"
                  : "text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === "mobile"
                  ? "bg-yellow-400 text-slate-950 shadow-md shadow-yellow-500/20 font-semibold"
                  : "text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900"
              }`}
            >
              Flutter Mobile Apps
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-3xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 hover:border-yellow-400/40 light:hover:border-amber-400/60 transition-all duration-300 shadow-xl overflow-hidden hover:-translate-y-1.5"
            >
              {/* Card Image Thumbnail */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="relative w-full h-64 overflow-hidden bg-black/40 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#070d1e]/85 backdrop-blur-md border border-white/10 text-[11px] font-bold text-yellow-400 flex items-center gap-1.5">
                  <Smartphone className="w-3 h-3" /> Flutter & Dart
                </div>

                <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-slate-950/90 text-yellow-400 text-xs font-bold border border-yellow-400/40 shadow-xl">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-extrabold text-white light:text-slate-900 group-hover:text-yellow-400 light:group-hover:text-amber-600 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-yellow-400 light:text-amber-600 font-semibold line-clamp-1">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-300 light:text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 light:bg-slate-100 border border-white/5 light:border-slate-200 text-slate-300 light:text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-[10px] font-mono text-slate-400 light:text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 light:border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 light:text-amber-600 hover:text-yellow-300 transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 light:bg-slate-100 hover:bg-white/15 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-white transition-colors"
                      title="GitHub Repository"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Full Archive Link */}
        <div className="mt-14 text-center">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-slate-300 light:text-slate-800 border border-white/10 light:border-slate-300 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5"
          >
            <GithubIcon className="w-4 h-4 text-yellow-400 light:text-amber-600" />
            <span>Discover more mobile repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={projects}
      />
    </section>
  );
}
