'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MailIcon, 
  CalendarIcon, 
  ExternalLinkIcon, 
  BrainIcon, 
  BotIcon, 
  LayersIcon, 
  DatabaseIcon, 
  ServerIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";

// --- DATA ---
const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

const SKILLS = [
  { title: 'AI & ML', icon: <BrainIcon className="text-indigo-500 mb-4 h-8 w-8" />, desc: 'Scikit-learn, XGBoost, TensorFlow, PyTorch, NLP & Computer Vision' },
  { title: 'GenAI & LLMs', icon: <BotIcon className="text-cyan-400 mb-4 h-8 w-8" />, desc: 'OpenAI API, Gemini, LangChain, LlamaIndex, RAG Architectures' },
  { title: 'Full-Stack', icon: <LayersIcon className="text-indigo-500 mb-4 h-8 w-8" />, desc: 'Next.js, React, TypeScript, Tailwind CSS, FastAPI, Node.js' },
  { title: 'Data & Databases', icon: <DatabaseIcon className="text-cyan-400 mb-4 h-8 w-8" />, desc: 'Pandas, NumPy for data pipelines. PostgreSQL, MongoDB, and SAP HANA optimization.' },
  { title: 'Deployment & DevOps', icon: <ServerIcon className="text-indigo-500 mb-4 h-8 w-8" />, desc: 'Docker, AWS, Streamlit, and CI/CD pipelines.' },
];

const EXPERIENCE = [
  {
    role: 'Machine Learning Engineer',
    company: 'Current Company',
    duration: '2023 – Present',
    description: 'Designing predictive models, building scalable data pipelines, and deploying ML dashboards to bridge the gap between complex data science and user-centric applications.',
    current: true
  },
  {
    role: 'Data Scientist / Analyst',
    company: 'Past Company',
    duration: '2020 – 2023',
    description: 'Spearheaded data analysis, ML model development, and SAP HANA database query optimization utilizing Python-based data processing.',
    current: false
  }
];

const PROJECTS = [
  { id: 1, title: 'Customer Experience Analytics', category: 'ML / Full-Stack', tags: ['Python', 'Sklearn', 'React'], desc: 'ML clustering dashboard to analyze and visualize customer behavior patterns.', filter: 'Full-Stack' },
  { id: 2, title: 'Fraud Detection System', category: 'AI/ML', tags: ['TensorFlow', 'FastAPI'], desc: 'Anomaly detection system achieving 98% accuracy on transaction data.', filter: 'AI/ML' },
  { id: 3, title: 'RAG Support System', category: 'GenAI', tags: ['LangChain', 'OpenAI', 'Next.js'], desc: 'Intelligent document-based chatBotIcon providing automated customer support.', filter: 'GenAI' },
  { id: 4, title: 'Data Pipeline Tool', category: 'Data Engineering', tags: ['SAP HANA', 'Python', 'SQL'], desc: 'Optimized ETL pipelines reducing data processing time by 40%.', filter: 'AI/ML' },
];

const FILTERS = ['All', 'AI/ML', 'GenAI', 'Full-Stack'];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}as const;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.filter === activeFilter);

  return (
    <div className="bg-[#0a0a0f] text-slate-300 min-h-screen font-sans selection:bg-indigo-500/30">
      
      {/* 1. NAVIGATION BAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'backdrop-blur-md bg-[#0a0a0f]/80 border-slate-800/50 shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold tracking-wider hover:bg-indigo-500 transition-colors cursor-pointer">
            GK
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#111827] border-b border-slate-800 py-4 px-6 flex flex-col space-y-4 md:hidden">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400">
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* 2. HERO SECTION */}
        <section id="about" className="min-h-screen flex flex-col justify-center pt-20 relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-[#111827] px-4 py-1.5 text-sm text-slate-300 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">intelligent</span> products <br className="hidden md:block"/>
              end-to-end.
            </h1>

            {/* Subhead */}
            <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              From clean UI to scalable APIs to ML-powered insights. I bridge the gap between complex data science and user-centric applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                View Projects
              </a>
              <a href="/cv.pdf" className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-white font-medium transition-all">
                Download CV
              </a>
              <div className="flex gap-4 ml-2">
                <a href="#" className="p-3 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"><FaGithub size={20} /></a>
                <a href="#" className="p-3 rounded-lg border border-slate-800 hover:bg-slate-800 transition-colors"><FaLinkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="py-24 border-t border-slate-800/50">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Technical Arsenal</h2>
            <p className="text-slate-400 mb-12">The tools I use to turn problems into products.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300 hover:-translate-y-1 group">
                  {skill.icon}
                  <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 4. EXPERIENCE SECTION */}
        <section id="experience" className="py-24 border-t border-slate-800/50">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Experience</h2>
            
            <div className="space-y-12 border-l-2 border-indigo-900 ml-3 pl-8 md:pl-10 relative">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <span className={`absolute -left-[41px] md:-left-[49px] top-1.5 h-4 w-4 rounded-full border-2 border-[#0a0a0f] ${exp.current ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : 'bg-slate-600'}`}></span>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="text-lg text-slate-300 mb-4">{exp.company}</h4>
                  <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 5. PROJECTS SECTION */}
        <section id="projects" className="py-24 border-t border-slate-800/50">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Featured Projects</h2>
            <p className="text-slate-400 mb-10">Selected works blending AI with intuitive interfaces.</p>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-12">
              {FILTERS.map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-indigo-600 text-white' : 'bg-[#111827] text-slate-400 hover:text-white hover:bg-slate-800'}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group bg-[#111827] rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  {/* Image Placeholder */}
                  <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-indigo-900/30 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">{project.category}</p>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                      </div>
                      <a href="#" className="text-slate-500 hover:text-white transition-colors"><ExternalLinkIcon size={20} /></a>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md border border-slate-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="py-32 border-t border-slate-800/50 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to build something intelligent?</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I'm currently looking for new opportunities in Machine Learning and Data Science. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <a href="mailto:your.email@example.com" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <MailIcon size={18} /> Send Email
              </a>
              <a href="https://calendly.com" target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 text-white font-medium transition-all">
                <CalendarIcon size={18} /> Book a Call
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors"><FaGithub size={24} /></a>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* 7. FOOTER */}
      <footer className="bg-[#050508] py-8 border-t border-slate-800/50 text-center">
        <p className="text-slate-500 text-sm">
          © 2026 Gunish Katar. Built with ML & Passion.
        </p>
      </footer>
    </div>
  );
}