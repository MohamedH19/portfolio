"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Award, ExternalLink, Download } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  issuer: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  issuer,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#040813]/85 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0b152d] light:bg-white border border-yellow-400/30 light:border-slate-300 shadow-2xl z-10 text-white light:text-slate-900 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#070d1e]/90 light:bg-slate-100/90 border-b border-white/10 light:border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-yellow-400/20 text-yellow-400 light:text-amber-700">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white light:text-slate-900">
                {title}
              </h3>
              <p className="text-xs text-yellow-400 light:text-amber-600">
                {issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 light:bg-slate-200 hover:bg-white/20 text-slate-300 light:text-slate-700 transition-colors"
            aria-label="Close Certificate Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="p-4 sm:p-8 flex items-center justify-center bg-black/30">
          <div className="relative w-full max-w-3xl aspect-[4/3] rounded-xl overflow-hidden border border-white/10 light:border-slate-200 shadow-2xl">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-[#070d1e]/90 light:bg-slate-100/90 border-t border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-400 light:text-slate-600">
            Verified credential issued under the Egyptian Ministry of Communications & IT (MCIT).
          </p>

          <a
            href={imageSrc}
            download="Mohamed-Hesham-ITI-Certificate.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 light:bg-amber-500 text-slate-950 text-xs font-bold transition-all shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Open High-Res Image</span>
          </a>
        </div>

      </div>
    </div>
  );
}
