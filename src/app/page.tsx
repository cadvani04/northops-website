"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
const services = [
  {
    title: "Social Media Growth",
    desc: "Short-form TikTok and Instagram content systems designed to drive local awareness, foot traffic, and inbound leads.",
  },
  {
    title: "AI Automations",
    desc: "Automated workflows for follow-ups, scheduling, lead capture, onboarding, reminders, reporting, and repetitive admin tasks.",
  },
  {
    title: "CRM + Revenue Systems",
    desc: "We build and connect CRMs that help businesses track leads, nurture customers, and stop losing revenue in messy spreadsheets.",
  },
  {
    title: "Internal Dashboards",
    desc: "Custom dashboards for job tracking, inventory, scheduling, purchasing, delivery workflows, and operations visibility.",
  },
  {
    title: "AI Agents + Chatbots",
    desc: "Customer-facing and internal AI agents that answer questions, qualify leads, route requests, and reduce manual support.",
  },
  {
    title: "Content-to-Customer Funnels",
    desc: "We connect organic content, landing pages, forms, SMS/email follow-up, and CRM pipelines into one working system.",
  },
];
const stats = [
  { value: "1M+", label: "organic views generated" },
  { value: "$30K+", label: "in internal sales generated through our own systems" },
  { value: "$10K+", label: "custom operations platform delivered" },
  { value: "$5K/mo", label: "retained client relationship" },
];
const testimonials = [
  {
    company: "Local Restaurant Group",
    name: "Michael Torres",
    role: "Owner",
    quote: "NorthOps transformed our social media presence. We went from inconsistent posting to a system that drives real foot traffic every week.",
    months: "6",
    active: true,
  },
  {
    company: "Property Management Co",
    name: "Sarah Chen",
    role: "Operations Director",
    quote: "The automation systems they built saved us 20+ hours per week on tenant communications and maintenance scheduling.",
    months: "8",
    active: true,
  },
  {
    company: "HVAC Services",
    name: "James Wilson",
    role: "Founder",
    quote: "Our lead follow-up was a mess before NorthOps. Now every inquiry gets handled automatically and we close more jobs.",
    months: "4",
    active: true,
  },
];
const workExamples = [
  { title: "Restaurant Content System", category: "Social Media + Automation", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" },
  { title: "Property Management Dashboard", category: "Internal Systems", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
  { title: "Service Business CRM", category: "CRM + Revenue Ops", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
  { title: "AI Lead Qualification Bot", category: "AI Agents", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" },
];
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    projectType: "Social Media",
    email: "",
  });
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
            AI Automations + Social Media Systems{" "}
            <span className="text-gray-400">for Businesses Ready to Scale</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
            NorthOps builds the systems behind modern businesses: short-form content, lead capture, CRM automation, AI agents, internal dashboards, and revenue operations workflows that turn attention into customers.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              <span>Book a Strategy Call</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
              See Our Work
            </a>
          </div>
        </div>
      </section>
      {/* Trusted By */}
      <section className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium shrink-0">
              <span className="text-blue-500">✦</span> Trusted by local businesses, restaurants, and service companies
            </span>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-semibold text-black">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Everything you need to grow <span className="text-gray-400">and operate</span>
          </h2>
          <p className="text-gray-600 max-w-xl mb-12">
            We combine growth, automation, and software execution so businesses can move faster without hiring a huge team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-500 font-semibold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">ABOUT NORTHOPS</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                AI-powered growth and operations systems
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                NorthOps helps businesses replace scattered tools, inconsistent content, and manual operations with AI-powered systems that create customers and save time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We combine growth, automation, and software execution so businesses can move faster without hiring a huge team. Whether you need social media that actually drives customers, automations that save hours every week, or custom dashboards to run your operations — we build it.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Let's Talk
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                <Image src="/northops-logo.png" alt="NorthOps" width={300} height={300} className="w-3/4 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">RESULTS</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">What our clients say</h2>
          <p className="text-gray-600 max-w-xl mb-12">
            We partner with businesses that are ready to systematize their growth and operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.company} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                    <span className="text-blue-500">+</span> {t.months} MONTHS
                  </span>
                  {t.active && <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">ACTIVE</span>}
                </div>
                <p className="font-medium text-sm text-gray-400 mb-4">{t.company}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-gray-600">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Work Section */}
      <section id="work" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">OUR WORK</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Systems we've built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workExamples.map((work) => (
              <div key={work.title} className="group cursor-pointer">
                <div className="aspect-video relative rounded-xl overflow-hidden mb-4 bg-gray-200">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-lg">{work.title}</h3>
                <p className="text-sm text-gray-500">{work.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Ready to systematize your growth?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Stop doing everything manually. Let's build the systems that turn attention into customers and chaos into clarity.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
            Book a Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-4 text-center">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Let's build your system</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What are you interested in?</label>
                <div className="flex flex-wrap gap-2">
                  {["Social Media", "AI Automation", "CRM Systems", "Dashboards", "AI Chatbots", "Full System"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                        formData.projectType === type
                          ? "bg-black text-white border-black"
                          : "bg-white border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <button type="submit" className="w-full py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/northops-logo.png" alt="NorthOps" width={150} height={50} className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-gray-400 max-w-sm">
                AI-powered growth and operations systems for businesses that are tired of manual work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">CRM Systems</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Dashboards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 NorthOps. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}