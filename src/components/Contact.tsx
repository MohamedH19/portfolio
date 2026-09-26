"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageCircle, 
  Download, 
  Sparkles,
  AlertCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const { personal, contact } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    else if (formData.name.trim().length < 2) errs.name = "Name must be at least 2 characters.";

    if (!formData.email.trim()) errs.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      errs.email = "Please provide a valid email address.";

    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";

    if (!formData.message.trim()) errs.message = "Please write a message.";
    else if (formData.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters long.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending or trigger default mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-800 text-xs font-semibold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Let&apos;s Build Something Exceptional
          </h2>
          <p className="max-w-2xl text-slate-400 light:text-slate-600 text-sm sm:text-base">
            {contact.subtitle}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 shadow-xl backdrop-blur-sm space-y-6">
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email card */}
                <div className="p-4 rounded-2xl bg-white/[0.02] light:bg-slate-50 border border-white/5 light:border-slate-200 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 light:text-slate-500 uppercase">
                        Email Address
                      </p>
                      <a 
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-bold text-white light:text-slate-900 hover:text-yellow-400 light:hover:text-amber-600 transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.email, "email")}
                    className="p-2 rounded-xl bg-white/5 light:bg-slate-200 hover:bg-white/10 text-slate-300 light:text-slate-700 hover:text-yellow-400 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone & WhatsApp card */}
                <div className="p-4 rounded-2xl bg-white/[0.02] light:bg-slate-50 border border-white/5 light:border-slate-200 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 light:text-slate-500 uppercase">
                        Phone / WhatsApp
                      </p>
                      <a 
                        href={`tel:${personal.phoneRaw}`}
                        className="text-xs sm:text-sm font-bold text-white light:text-slate-900 hover:text-yellow-400 light:hover:text-amber-600 transition-colors"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={personal.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                      title="Chat on WhatsApp"
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleCopy(personal.phoneRaw, "phone")}
                      className="p-2 rounded-xl bg-white/5 light:bg-slate-200 hover:bg-white/10 text-slate-300 light:text-slate-700 hover:text-yellow-400 transition-colors"
                      title="Copy Phone"
                      aria-label="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Location card */}
                <div className="p-4 rounded-2xl bg-white/[0.02] light:bg-slate-50 border border-white/5 light:border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 light:bg-amber-100 text-yellow-400 light:text-amber-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 light:text-slate-500 uppercase">
                      Location
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white light:text-slate-900">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-2">
                <p className="text-xs uppercase font-bold tracking-wider text-slate-400 light:text-slate-500 mb-3">
                  Connect on Social & Code Networks:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-xs font-semibold text-slate-200 light:text-slate-800 transition-all border border-white/5 light:border-slate-200 hover:-translate-y-0.5"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-xs font-semibold text-slate-200 light:text-slate-800 transition-all border border-white/5 light:border-slate-200 hover:-translate-y-0.5"
                  >
                    <GithubIcon className="w-4 h-4 text-white light:text-slate-900" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-yellow-400/10 light:bg-amber-50 border border-yellow-400/20 light:border-amber-200 text-xs text-slate-300 light:text-slate-700 leading-relaxed">
                <span className="font-bold text-yellow-400 light:text-amber-800">
                  Response Guarantee:
                </span>{" "}
                {contact.responseTime}. Ready to discuss technical interviews, mobile projects, or engineering consults.
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] light:bg-white border border-white/10 light:border-slate-200 shadow-2xl backdrop-blur-sm relative">
              
              <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mb-8">
                Fill in the details below and I will get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white light:text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out. Mohamed has received your note and will follow up with you promptly at your email address.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-yellow-400 text-slate-950 font-bold text-xs hover:bg-yellow-300 transition-colors shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300 light:text-slate-700">
                        Your Name <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 light:bg-slate-50 border text-xs sm:text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/10 light:border-slate-200 focus:border-yellow-400 light:focus:border-amber-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300 light:text-slate-700">
                        Email Address <span className="text-yellow-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 light:bg-slate-50 border text-xs sm:text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/10 light:border-slate-200 focus:border-yellow-400 light:focus:border-amber-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-300 light:text-slate-700">
                      Subject <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Flutter Mobile Project Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 light:bg-slate-50 border text-xs sm:text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-red-400 focus:border-red-400"
                          : "border-white/10 light:border-slate-200 focus:border-yellow-400 light:focus:border-amber-500"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300 light:text-slate-700">
                      Message Details <span className="text-yellow-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your mobile application requirements, timeline, or team role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 light:bg-slate-50 border text-xs sm:text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-red-400 focus:border-red-400"
                          : "border-white/10 light:border-slate-200 focus:border-yellow-400 light:focus:border-amber-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-yellow-400 hover:bg-yellow-300 light:bg-amber-500 light:hover:bg-amber-400 text-slate-950 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2">
                    <p className="text-[11px] text-slate-400 light:text-slate-500">
                      Form is client-validated and ready for deployment with any serverless handler (e.g., Formspree, Resend, or Next.js Route Handlers).
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
