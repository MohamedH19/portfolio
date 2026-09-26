"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Lightbulb, 
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Smartphone
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#040813]/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b152d] light:bg-white border border-yellow-400/30 light:border-slate-300 shadow-2xl z-10 text-white light:text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b152d]/95 light:bg-white/95 backdrop-blur-md border-b border-white/10 light:border-slate-200">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-700">
              <Smartphone className="w-4 h-4" />
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-yellow-400 light:text-amber-600">
              Case Study & Technical Overview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="p-2 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 transition-colors"
              title="Previous Project"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="p-2 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-slate-300 light:text-slate-700 transition-colors"
              title="Next Project"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 light:bg-slate-200 hover:bg-red-500/20 hover:text-red-400 text-slate-300 light:text-slate-700 transition-colors"
              title="Close Modal"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Hero Banner / Screenshot */}
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-black/40 border border-white/10 light:border-slate-200 shadow-inner group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain sm:object-cover group-hover:scale-[1.02] transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b152d] via-transparent to-transparent opacity-80 light:hidden" />
          </div>

          {/* Title & Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-yellow-400/20 light:bg-amber-100 text-yellow-300 light:text-amber-800 text-xs font-bold uppercase tracking-wider">
                {project.category.toUpperCase()} APPLICATION
              </span>
              <span className="text-xs text-slate-400 light:text-slate-500">
                Role: {project.role}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-yellow-400 light:text-amber-600 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Project Overview */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white light:text-slate-900 flex items-center gap-2">
              <span>Project Overview</span>
              <span className="w-8 h-0.5 bg-yellow-400 light:bg-amber-500 rounded-full" />
            </h3>
            <p className="text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-red-500/[0.05] light:bg-red-50 border border-red-500/20 light:border-red-200 space-y-2">
              <div className="flex items-center gap-2 text-red-400 light:text-red-700 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/[0.05] light:bg-emerald-50 border border-emerald-500/20 light:border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 light:text-emerald-700 font-bold text-sm">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture & State Flow */}
          <div className="p-6 rounded-2xl bg-white/[0.02] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-white light:text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-yellow-400 light:text-amber-600" />
              <span>Architectural Blueprint</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 light:text-slate-600">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 light:bg-amber-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white light:text-slate-900">
              Key Features Implemented
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] light:bg-slate-100 border border-white/5 light:border-slate-200 text-xs sm:text-sm text-slate-300 light:text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 light:text-amber-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white light:text-slate-900">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-yellow-400/10 light:bg-amber-100 text-yellow-300 light:text-amber-800 border border-yellow-400/20 light:border-amber-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/[0.02] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 light:text-slate-500">
                Key Engineering Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-bold text-yellow-400 light:text-amber-600 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> Result & Value
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {project.results}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-yellow-400 hover:bg-yellow-300 light:bg-amber-500 light:hover:bg-amber-400 text-slate-950 shadow-md shadow-yellow-500/20 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-white/10 light:bg-slate-100 hover:bg-white/20 light:hover:bg-slate-200 text-white light:text-slate-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Preview Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              Back to Portfolio
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
