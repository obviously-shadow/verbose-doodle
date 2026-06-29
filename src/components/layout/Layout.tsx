import React, { useState, useEffect } from 'react';
import { useTheme } from '../../utils/themeProvider';
import { FaGithub, FaInstagram, FaLinkedin, FaServer, FaCode, FaAward } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiUbuntu, SiDocker, SiReact } from 'react-icons/si';

const Layout = ({ children, onClick }) => {
  const { theme } = useTheme();
  const [mode, setMode] = useState('cli');

  useEffect(() => {
    const handleInitBento = () => setMode('bento');
    window.addEventListener('init-bento', handleInitBento);
    return () => window.removeEventListener('init-bento', handleInitBento);
  }, []);

  if (mode === 'bento') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-10 font-sans selection:bg-blue-500/30 overflow-y-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Main Intro Card */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">Umar Khorami</h1>
            <p className="text-xl text-blue-400 mb-4 font-medium">Software Developer & Grade 11 Student</p>
            <p className="text-slate-400 leading-relaxed max-w-lg text-lg">
              Based in Ottawa. I build full-stack web applications, experiment with server architecture, and continuously learn new technologies to solve real problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center gap-6 shadow-xl">
            <a href="https://github.com/obviously-shadow" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white hover:translate-x-1 transition-all">
              <FaGithub className="text-3xl text-slate-500" /> <span className="font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/umarkhorami" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white hover:translate-x-1 transition-all">
              <FaLinkedin className="text-3xl text-blue-500" /> <span className="font-medium">LinkedIn</span>
            </a>
            <a href="https://instagram.com/obviouslyshadow" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white hover:translate-x-1 transition-all">
              <FaInstagram className="text-3xl text-pink-500" /> <span className="font-medium">Instagram</span>
            </a>
          </div>

          {/* Tech Stack Card */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-2xl text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
            </div>
            <div className="flex gap-6 flex-wrap text-4xl text-slate-500">
              <div className="flex flex-col items-center gap-2 group"><SiTypescript className="group-hover:text-blue-400 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">TypeScript</span></div>
              <div className="flex flex-col items-center gap-2 group"><SiReact className="group-hover:text-cyan-400 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">React</span></div>
              <div className="flex flex-col items-center gap-2 group"><SiNextdotjs className="group-hover:text-white transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Next.js</span></div>
              <div className="flex flex-col items-center gap-2 group"><SiTailwindcss className="group-hover:text-teal-400 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Tailwind</span></div>
              <div className="w-px h-10 bg-slate-800 mx-2"></div>
              <div className="flex flex-col items-center gap-2 group"><SiUbuntu className="group-hover:text-orange-500 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Ubuntu</span></div>
              <div className="flex flex-col items-center gap-2 group"><SiDocker className="group-hover:text-blue-500 transition-colors" /><span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Docker</span></div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl flex flex-col hover:border-zinc-700 transition-colors">
            <h2 className="text-lg font-semibold text-zinc-100 mb-4 flex items-center gap-2">
              <FaAward /> Credentials
            </h2>
            <div className="flex flex-col gap-2">
              <a href="/1.pdf" target="_blank" className="text-sm text-zinc-400 hover:text-blue-400">• Web Deployment Basics</a>
              <a href="/backend.pdf" target="_blank" className="text-sm text-zinc-400 hover:text-blue-400">• Backend Engineering</a>
              <a href="/html.pdf" target="_blank" className="text-sm text-zinc-400 hover:text-blue-400">• HTML5 Fundamentals</a>
              <a href="/javascript.pdf" target="_blank" className="text-sm text-zinc-400 hover:text-blue-400">• JavaScript Mastery</a>
            </div>
          </div>

          {/* Return Button */}
          <button 
            onClick={() => setMode('cli')}
            className="md:col-span-3 bg-white text-black font-bold rounded-3xl p-6 hover:bg-slate-200 transition-colors flex items-center justify-center gap-3 text-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 17l6-6-6-6M12 19h8"/></svg>
            Return to Terminal
          </button>

        </div>
      </div>
    );
  }

  return (
    <div
      className="min-w-max text-xs md:min-w-full md:text-base selection:bg-white/30"
      onClick={onClick}
      style={{ color: theme.foreground, background: theme.background }}
    >
      <main className="w-full h-full p-4 md:p-6 max-w-4xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;