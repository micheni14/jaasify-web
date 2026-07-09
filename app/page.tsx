"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  User,
  Briefcase,
  Users,
  Target,
  Brain,
  Cpu,
  ChartNoAxesColumn,
  Zap,
  CodeXml,
  Shield,
  Sparkles,
  CircleCheck,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "CIO as a Service",
    desc: "On-demand executive technology leadership to guide your strategic initiatives.",
    icon: User,
  },
  {
    id: "02",
    title: "Customer Experience Digitalisation",
    desc: "Transform customer interactions with data-driven digital strategies.",
    icon: Briefcase,
  },
  {
    id: "03",
    title: "Software Engineering as a Service",
    desc: "Elite engineering talent delivered on-demand to build and scale your technology.",
    icon: Users,
  },
  {
    id: "04",
    title: "Digital Transformation Advisory",
    desc: "Comprehensive roadmaps to modernize operations for the digital age.",
    icon: Target,
  },
  {
    id: "05",
    title: "AI Solutions & Consulting",
    desc: "Custom artificial intelligence solutions to automate processes and enhance decision-making.",
    icon: Brain,
  },
  {
    id: "06",
    title: "Machine Learning Services",
    desc: "Predictive models and data science solutions tailored to your business needs.",
    icon: Cpu,
  },
  {
    id: "07",
    title: "Data Analytics & BI",
    desc: "Turn your data into actionable insights with advanced analytics and visualization.",
    icon: ChartNoAxesColumn,
  },
  {
    id: "08",
    title: "AI-Powered Automation",
    desc: "Intelligent process automation to reduce costs and improve efficiency.",
    icon: Zap,
  },
];

const advantages = [
  { title: "Unrivaled Expertise", desc: "Seasoned professionals with deep knowledge across technology domains and industries." },
  { title: "Tailored Solutions", desc: "Solutions designed to fit your unique business challenges, goals, and constraints." },
  { title: "Measurable Results", desc: "Focus on delivering outcomes that contribute directly to your bottom line." },
  { title: "Innovation-Driven", desc: "Latest and most effective solutions from emerging technological trends and research." },
  { title: "Client-Centric", desc: "Your success is our priority. We work tirelessly to realize your vision." },
  { title: "Cost-Effective", desc: "High-value services that optimize your investment and maximize return on technology spend." },
];

export default function Home() {
  return (
    <>
      {/* ─────── HERO ─────── */}
      <section className="min-h-[90vh] flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-6">
                Engineering Studio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3462] leading-tight">
                Transformative{" "}
                <span className="text-[#39BFE1]">Digital Solutions</span>
                <br />
                for Enterprise Growth
              </h1>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
                We architect and deliver cutting-edge technology solutions that
                drive innovation, efficiency, and measurable business outcomes.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1C3462] text-white px-6 py-3.5 text-sm font-medium hover:bg-[#1C3462]/90 transition-colors"
                >
                  Get Started <ArrowRight size={14} />
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3.5 text-sm font-medium hover:border-[#39BFE1] hover:text-[#39BFE1] transition-colors"
                >
                  View Industries →
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-image.webp"
                  alt="Team collaborating on digital solutions"
                  width={600}
                  height={450}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1C3462]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg border border-gray-100 p-4 hidden md:block">
                <p className="text-sm font-bold text-[#1C3462]">Solutions Built for Scale</p>
                <p className="text-xs text-gray-500">Future-proofing your enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 <section id="services" className="relative py-24 bg-gradient-to-br from-[#1a5f7a] via-[#1c4a5e] to-[#0d2f3f] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#33c0e3]/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#33c0e3]/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#33c0e3]/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,192,227,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(51,192,227,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-start justify-between mb-20">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-white mb-2">
                Our <span className="font-normal" style={{ color: "#33c0e3" }}>Services</span>
              </h2>
              <p className="text-white/60 text-lg mt-4 max-w-2xl">
                We architect technology solutions that drive measurable business outcomes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="group cursor-pointer">
                  <div className="relative border-t border-white/10 py-8 px-6 hover:bg-white/5 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <Icon className="w-5 h-5 text-[#33c0e3] opacity-60 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <h3 className="text-xl font-light text-white group-hover:text-[#33c0e3] transition-colors duration-300">
                            {s.title}
                          </h3>
                          <p className="text-white/40 text-sm mt-1 max-w-xl">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-white/20 text-sm font-mono group-hover:text-white/40 transition-colors hidden sm:block">
                        {s.id}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-t border-white/10 mt-1" />
          <div className="mt-16 text-center">
            <p className="text-white/40 text-sm tracking-wider uppercase mb-4">
              Strategic Digital Services
            </p>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              From executive technology leadership to AI-powered automation, we deliver
              comprehensive solutions that transform businesses and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* ─────── THE JaaSIFY ADVANTAGE ─────── */}
      <section id="advantage" className="py-24 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              The JaaSify Advantage
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              We stand out through our commitment to excellence, innovation, and
              client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="border border-white/10 p-6 hover:border-[#39BFE1]/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#39BFE1] mb-4" />
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── SERVICES ─────── */}
     
      {/* ─────── ABOUT ─────── */}
      <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#0f1419] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#33c0e3] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#33c0e3]/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,192,227,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,192,227,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left column */}
            <div className="space-y-8">
              <div>
                <span className="text-[#33c0e3] text-sm font-mono tracking-wider">
                  {'//About us'}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Africa&rsquo;s Premier{" "}
                  <span className="text-[#33c0e3]">Tech</span>
                  <br />
                  Partner
                </h2>
              </div>
              <p className="text-gray-300 text-lg">
                At{" "}
                <span className="text-white font-semibold">JaaSify</span>, we
                don&rsquo;t just write code, we craft digital experiences that
                empower businesses across Africa and beyond.
              </p>
              <p className="text-gray-400">
                Founded in Nairobi Kenya, our journey began with a revolutionary
                belief: Africa is not just a consumer of technology, it is a
                creator and innovator. We combine cutting-edge global standards
                with uniquely African ingenuity.
              </p>
              <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-gray-200 italic">
                  &ldquo;Every solution we craft is built to endure, adapt, and
                  grow &mdash; empowering businesses to thrive in an
                  ever-changing digital landscape.&rdquo;
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <CodeXml className="w-5 h-5 text-[#33c0e3]" />
                  <span className="text-white text-sm font-medium">Scalable Solutions</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <Target className="w-5 h-5 text-[#33c0e3]" />
                  <span className="text-white text-sm font-medium">Precision Delivery</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <Shield className="w-5 h-5 text-[#33c0e3]" />
                  <span className="text-white text-sm font-medium">Global Standards</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <Sparkles className="w-5 h-5 text-[#33c0e3]" />
                  <span className="text-white text-sm font-medium">Creative Design</span>
                </div>
              </div>
            </div>

            {/* Right column: Code editor mockup */}
            <div className="relative bg-[#0d1117] border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex gap-4 ml-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-[#0d1117] rounded text-xs text-gray-400 border border-gray-700/50">
                    <CodeXml className="w-3 h-3" />
                    JaaSify.tsx
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] text-gray-500 bg-[#0d1117] px-2 py-1 rounded border border-gray-700/50">
                    ▶ Run
                  </span>
                </div>
              </div>
              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-[#c678dd]">const</span>{" "}
                  <span className="text-[#61afef]">fibonacci</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-white">(</span>
                  <span className="text-[#e06c75]">n</span>
                  <span className="text-white">)</span>{" "}
                  <span className="text-white">=&gt;</span>{" "}
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#c678dd]">if</span>{" "}
                  <span className="text-white">(</span>
                  <span className="text-[#e06c75]">n</span>{" "}
                  <span className="text-white">&lt;=</span>{" "}
                  <span className="text-[#d19a66]">1</span>
                  <span className="text-white">)</span>{" "}
                  <span className="text-[#c678dd]">return</span>{" "}
                  <span className="text-[#e06c75]">n</span>
                  <span className="text-white">;</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#c678dd]">return</span>{" "}
                  <span className="text-[#61afef]">fibonacci</span>
                  <span className="text-white">(</span>
                  <span className="text-[#e06c75]">n</span>{" "}
                  <span className="text-white">-</span>{" "}
                  <span className="text-[#d19a66]">1</span>
                  <span className="text-white">)</span>{" "}
                  <span className="text-white">+</span>{" "}
                  <span className="text-[#61afef]">fibonacci</span>
                  <span className="text-white">(</span>
                  <span className="text-[#e06c75]">n</span>{" "}
                  <span className="text-white">-</span>{" "}
                  <span className="text-[#d19a66]">2</span>
                  <span className="text-white">);</span>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>
                  <span className="text-white">;</span>
                </div>
                <div className="mt-4">
                  <span className="text-[#c678dd]">export default function</span>{" "}
                  <span className="text-[#e5c07b]">JaaSify</span>
                  <span className="text-white">() {"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#c678dd]">return</span>{" "}
                  <span className="text-white">(</span>
                </div>
                <div className="pl-8">
                  <span className="text-white">&lt;</span>
                  <span className="text-[#e06c75]">div</span>
                  <span className="text-white">&gt;</span>
                </div>
                <div className="pl-12">
                  <span className="text-[#7f848e]">
                    {"<!-- Crafting Digital Excellence -->"}
                  </span>
                </div>
                <div className="pl-12">
                  <span className="text-white">&lt;</span>
                  <span className="text-[#e06c75]">h1</span>
                  <span className="text-white">&gt;</span>
                  <span className="text-white">Africa&apos;s Tech Partner</span>
                  <span className="text-white">&lt;/</span>
                  <span className="text-[#e06c75]">h1</span>
                  <span className="text-white">&gt;</span>
                </div>
                <div className="pl-8">
                  <span className="text-white">&lt;/</span>
                  <span className="text-[#e06c75]">div</span>
                  <span className="text-white">&gt;</span>
                </div>
                <div className="pl-4">
                  <span className="text-white">);</span>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>
                </div>
              </div>
              {/* Console output */}
              <div className="border-t border-gray-700/50 bg-[#161b22] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CircleCheck className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-xs font-mono">
                    Build successful
                  </span>
                </div>
                <div className="space-y-1 text-xs font-mono text-gray-400">
                  <p>
                    <span className="text-[#33c0e3]">mission:</span>{" "}
                    Empower African businesses through technology
                  </p>
                  <p>
                    <span className="text-[#33c0e3]">vision:</span>{" "}
                    Africa&apos;s premier technology partner
                  </p>
                  <p>
                    <span className="text-[#33c0e3]">values:</span>{" "}
                    Innovation, Excellence, Integrity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── CTA ─────── */}
      <section className="py-24 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
            Let&rsquo;s talk about how we can help you achieve your technology
            goals. Our team is ready to partner with you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#39BFE1] text-[#1C3462] px-6 py-3 text-sm font-bold hover:bg-[#39BFE1]/90 transition-colors"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
            <a
              href="mailto:info@jaasify.com"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 text-sm font-medium hover:border-white/50 transition-colors"
            >
              info@jaasify.com ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
