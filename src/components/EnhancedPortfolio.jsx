import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Download, Code, Sparkles, Award, Users } from 'lucide-react';
import profile5 from '../assets/profile5.png';
import profile6 from '../assets/profile6.png';
export default function EnhancedPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsVisible({});
    const timer = setTimeout(() => {
      setIsVisible({ [activeSection]: true });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const achievements = [];

  return (
    <div className="overflow-hidden relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Multiple animated background orbs */}
      <div 
        className="fixed blur-3xl transition-all duration-500 ease-out pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          left: mousePosition.x - 350,
          top: mousePosition.y - 350,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        }}
      />
      <div 
        className="fixed pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          right: '10%',
          top: scrollY * 0.5,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div 
        className="fixed pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          left: '5%',
          bottom: scrollY * 0.3,
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInLeft {
            from { 
              opacity: 0;
              transform: translateX(-50px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from { 
              opacity: 0;
              transform: translateX(50px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes scaleIn {
            from { 
              opacity: 0;
              transform: scale(0.9);
            }
            to { 
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }

          .animate-slide-up {
            animation: slideUp 0.6s ease-out forwards;
          }
          
          .animate-slide-left {
            animation: slideInLeft 0.6s ease-out forwards;
          }
          
          .animate-slide-right {
            animation: slideInRight 0.6s ease-out forwards;
          }
          
          .animate-scale-in {
            animation: scaleIn 0.5s ease-out forwards;
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-rotate {
            animation: rotate 20s linear infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b shadow-lg backdrop-blur-xl bg-slate-950/90 border-slate-800 shadow-slate-900/50">
        <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 animate-pulse-slow">
            {/* &lt;Portfolio /&gt; */}
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden gap-8 md:flex">
            {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-300'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="transition-colors md:hidden text-slate-300 hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t backdrop-blur-xl md:hidden bg-slate-900/95 border-slate-800 animate-slide-up">
            <div className="flex flex-col gap-4 p-6">
              {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:text-blue-400 hover:translate-x-2 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-300'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="px-6 pt-32 pb-20 mx-auto max-w-7xl">
        {/* Hero Section with Photo */}
        {activeSection === 'home' && (
          <section className="min-h-[85vh] flex items-center">
            <div className="grid gap-12 items-center w-full md:grid-cols-2">
              {/* Left Column - Text */}
              <div className={`space-y-6 ${isVisible.home ? 'animate-slide-left' : 'opacity-0'}`}>
                <div className="flex gap-2 items-center text-sm font-medium tracking-widest text-blue-400 uppercase">
                  <Sparkles size={16} className="animate-pulse-slow" />
                  Welcome to my digital space
                </div>
                <h2 className="text-6xl font-bold leading-tight md:text-7xl">
                  Hi, I'm{' '}
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 animate-pulse-slow">
                    Oshani Kaveesha
                  </span>
                </h2>
                <div className="space-y-2">
                  <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
                    Software Engineering Undergraduate Student
                  </p>
                  <p className="text-xl text-slate-400">
                    Creative Problem Solver • Full-Stack Developer
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-slate-400">
                  I design and build scalable web applications with a strong focus on clean UI, 
                  usability, and system architecture. Passionate about transforming real-world 
                  problems into efficient, user-friendly digital solutions.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => setActiveSection('projects')}
                    className="flex gap-2 items-center px-8 py-4 font-medium bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl transition-all duration-300 group hover:from-blue-600 hover:to-violet-600 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                  >
                    View My Work
                    <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <button 
                    onClick={() => setActiveSection('contact')}
                    className="flex gap-2 items-center px-8 py-4 font-medium rounded-xl border-2 backdrop-blur-sm transition-all duration-300 group border-slate-600 hover:border-blue-400 hover:scale-105 bg-slate-900/50"
                  >
                    <Mail size={18} />
                    Get In Touch
                  </button>
                  <a 
                  href="/Oshani_Kaveesha_Resume.pdf" 
                  download="Oshani_Kaveesha_Resume.pdf"
                  className="flex gap-2 items-center px-8 py-4 font-medium rounded-xl border-2 backdrop-blur-sm transition-all duration-300 group border-slate-700 hover:border-violet-400 hover:scale-105 bg-slate-900/30"
                  >
                  <Download size={18} className="group-hover:animate-bounce" />
                  Resume
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 pt-8">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="text-center animate-scale-in"
                      style={{ animationDelay: `${800 + index * 100}ms`, opacity: 0 }}
                    >
                      <div className="mb-1 text-3xl">{achievement.icon}</div>
                      <div className="text-2xl font-bold text-blue-400">{achievement.number}</div>
                      <div className="text-xs text-slate-500">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Photo with fancy effects */}
              <div className={`relative ${isVisible.home ? 'animate-slide-right' : 'opacity-0'}`}>
                <div className="relative group">
                  {/* Animated border rings */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50 animate-pulse-slow" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-20 animate-rotate" style={{ padding: '3px' }} />
                  
                  {/* Photo container */}
                  <div className="overflow-hidden relative w-full rounded-full border-4 shadow-2xl transition-all duration-500 aspect-square border-slate-800 shadow-blue-500/20 group-hover:border-blue-500/50 group-hover:scale-105">
                    <img 
     src={profile6}
     alt="Oshani Kaveesha" 
     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
   />

                    
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="flex absolute -top-6 -right-6 justify-center items-center w-20 h-20 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl opacity-80 rotate-12 animate-pulse-slow">
                    <Code size={32} className="text-white" />
                  </div>
                  <div className="flex absolute -bottom-6 -left-6 justify-center items-center w-20 h-20 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl opacity-80 -rotate-12 animate-pulse-slow">
                    <Sparkles size={32} className="text-white" />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-10 -left-10" style={{ animation: 'float 6s ease-in-out infinite' }}>
                  <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border shadow-lg backdrop-blur-sm bg-slate-900/90 border-slate-700">
                    ⚛️ React
                  </div>
                </div>
                <div className="absolute -right-10 top-20" style={{ animation: 'float 6s ease-in-out infinite' }}>
                  <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border shadow-lg backdrop-blur-sm bg-slate-900/90 border-slate-700">
                    🐘 Laravel
                  </div>
                </div>
                <div className="absolute -right-10 bottom-20" style={{ animation: 'float 8s ease-in-out infinite reverse', animationDelay: '1s' }}>
                  <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border shadow-lg backdrop-blur-sm bg-slate-900/90 border-slate-700">
                    🐍 Django
                  </div>
                </div>
                <div className="absolute -right-10 bottom-10" style={{ animation: 'float 8s ease-in-out infinite reverse', animationDelay: '1s' }}>
                  <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border shadow-lg backdrop-blur-sm bg-slate-900/90 border-slate-700">
                    🟢 Node.js
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="duration-700 animate-in fade-in">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 md:text-6xl">
                About Me
              </h2>
              <p className="text-lg text-slate-400">Get to know me better</p>
            </div>

            <div className="grid gap-8 mb-16 md:grid-cols-3">
              {/* Photo Column */}
              <div className="md:col-span-1">
                <div className="sticky top-32">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl transition-all duration-500 from-blue-500/20 to-violet-500/20 group-hover:blur-2xl" />
                    <div className="overflow-hidden relative rounded-2xl border-2 shadow-2xl transition-all duration-500 aspect-square border-slate-800 group-hover:border-blue-500/50">
                      {/* <img
                        src="/profile5.png"
                        alt="About Me"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      /> */}
                      <img
     src={profile5}
     alt="About Me"
     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
   />
                    </div>
                  </div>

                  {/* Quick Info Cards */}
                  <div className="mt-6 space-y-3">
                    <div className="p-4 rounded-xl border backdrop-blur-sm transition-all bg-slate-900/50 border-slate-800 hover:border-blue-500/30">
                      <div className="flex gap-3 items-center">
                        <div className="text-2xl">🎓</div>
                        <div>
                          <div className="text-sm text-slate-500">Education</div>
                          <div className="font-medium">Software Engineering Student</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border backdrop-blur-sm transition-all bg-slate-900/50 border-slate-800 hover:border-blue-500/30">
                      <div className="flex gap-3 items-center">
                        <div className="text-2xl">🗾</div>
                        <div>
                          <div className="text-sm text-slate-500">Languages</div>
                          <div className="font-medium">English • Japanese</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border backdrop-blur-sm transition-all bg-slate-900/50 border-slate-800 hover:border-blue-500/30">
                      <div className="flex gap-3 items-center">
                        <div className="text-2xl">🌍</div>
                        <div>
                          <div className="text-sm text-slate-500">Open to</div>
                          <div className="font-medium">Internships & Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="space-y-8 md:col-span-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-blue-400">My Journey</h3>
                  <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                    <p>
                      I am a Software Engineering undergraduate with a strong passion for
                      full-stack web development and system design. My interest in technology
                      began with curiosity about how applications work and evolved into
                      building complete, real-world systems.
                    </p>
                    <p>
                      I enjoy working with modern technologies such as React, Node.js,
                      Django, and Laravel to create responsive, scalable, and user-friendly
                      applications. I focus on clean code, structured architectures, and
                      thoughtful UI design.
                    </p>
                    <p>
                      Alongside technical growth, I am continuously improving my
                      communication and language skills, including Japanese, to
                      collaborate effectively in global and multicultural environments.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 text-2xl font-bold text-blue-400">What I Bring</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: "🧠", title: "Logical Thinker", desc: "Strong problem-solving mindset" },
                      { icon: "⚙️", title: "System-Oriented", desc: "Focus on scalability & structure" },
                      { icon: "🎨", title: "UI-Focused", desc: "Clean, responsive interfaces" },
                      { icon: "📘", title: "Continuous Learner", desc: "Always improving skills" }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 bg-slate-900/30 border-slate-800 hover:border-blue-500/30 hover:bg-slate-900/50 group"
                      >
                        <div className="mb-3 text-3xl transition-transform group-hover:scale-110">
                          {item.icon}
                        </div>
                        <h4 className="mb-1 font-bold text-slate-200">{item.title}</h4>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-2xl font-bold text-blue-400">Beyond Code</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      '📚 Learning Japanese',
                      '🔐 Cybersecurity',
                      '🤖 Machine Learning',
                      '🎨 UI Design',
                      '🧩 Problem Solving',
                      '🎥 Tech Content',
                      '💻 Side Projects'
                    ].map((item, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm rounded-full border backdrop-blur-sm transition-all cursor-default bg-slate-900/50 border-slate-700 hover:border-blue-500/50 hover:bg-slate-900/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="duration-700 animate-in fade-in">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 md:text-6xl">
                Academic Projects
              </h2>
              <p className="text-lg text-slate-400">A showcase of my academic work and real-world applications</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "eAquaSL",
                  subtitle: "Fish Farm Licensing System",
                  description: "Automated ornamental fish farm licensing, farm registrations, and management of active/inactive farmers in Sri Lanka using Django & PostgreSQL.",
                  tech: ["Django", "PostgreSQL", "Python", "REST API"],
                  image: "🐠",
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  title: "CeylonTourMate",
                  subtitle: "Travel Agency Management",
                  description: "Full-stack tourist travel agency management system with booking, itinerary planning, and customer management features.",
                  tech: ["React", "Node.js", "PostgreSQL", "Express"],
                  image: "✈️",
                  gradient: "from-emerald-500 to-teal-500"
                },
                {
                  title: "Hospital Management System",
                  subtitle: "Healthcare Operations Platform",
                  description: "Comprehensive hospital management system handling patient records, appointments, billing, staff management, and inventory tracking.",
                  tech: ["C#", ".NET", "SQL Server", "Windows Forms"],
                  image: "🏥",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Salon Management System",
                  subtitle: "Service & Appointment Platform",
                  description: "Web-based system for salon service management, including appointment booking, customer tracking, and service scheduling.",
                  tech: ["Laravel", "Java", "MySQL", "Bootstrap"],
                  image: "💇",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  title: "Pharmacy Management",
                  subtitle: "Inventory & Sales System",
                  description: "Database-driven system for managing inventory, sales tracking, and stock management in pharmacies with real-time updates.",
                  tech: ["PostgreSQL", "SQL", "Database Design"],
                  image: "💊",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Clinical Management",
                  subtitle: "Patient Records System",
                  description: "Desktop application to manage patient records, appointments, and basic clinical operations with efficient data handling.",
                  tech: ["C++", "OOP", "Data Structures"],
                  image: "🩺",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "IT Club Resources Hub",
                  subtitle: "Educational Resource Platform",
                  description: "Responsive and user-friendly frontend providing students with categorized educational resources, notes, and multi-language options.",
                  tech: ["HTML", "JavaScript", "Tailwind CSS"],
                  image: "📚",
                  gradient: "from-violet-500 to-purple-500"
                }
              ].map((project, index) => (
                <div 
                  key={index}
                  className="group relative bg-slate-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="flex overflow-hidden relative justify-center items-center h-48 bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="text-9xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                      {project.image}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                  
                  <div className="relative p-6">
                    <div className="mb-3">
                      <h3 className="mb-1 text-xl font-bold transition-colors text-slate-100 group-hover:text-blue-400">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500">
                        {project.subtitle}
                      </p>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs text-blue-400 rounded-full border transition-colors bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl to-transparent opacity-0 transition-opacity duration-500 from-blue-500/20 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="duration-700 animate-in fade-in">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 md:text-6xl">
                Skills & Expertise
              </h2>
              <p className="text-lg text-slate-400">Technologies and tools I work with</p>
            </div>

            <div className="mx-auto mb-16 max-w-4xl">
              {[
                { name: "Python & Django", level: 85, icon: "🐍" },
                { name: "React & JavaScript", level: 80, icon: "⚛️" },
                { name: "Laravel & PHP", level: 75, icon: "🔷" },
                { name: "C# & .NET", level: 75, icon: "💠" },
                { name: "Node.js & Express", level: 70, icon: "🟢" },
                { name: "PostgreSQL & MySQL", level: 80, icon: "💾" },
                { name: "C++ & Java", level: 75, icon: "☕" },
                { name: "Git & Version Control", level: 85, icon: "📦" }
              ].map((skill, index) => (
                <div key={index} className="mb-10">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-3 items-center">
                      <span className="text-3xl">{skill.icon}</span>
                      <span className="text-xl font-bold text-slate-200">{skill.name}</span>
                    </div>
                    <span className="text-lg font-bold text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="overflow-hidden h-4 rounded-full shadow-inner bg-slate-800">
                    <div 
                      className="overflow-hidden relative h-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-white/30"
                        style={{ 
                          animation: 'shimmer 2s infinite',
                          backgroundSize: '200% 100%'
                        }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <style>
              {`
                @keyframes shimmer {
                  0% { background-position: -200% 0; }
                  100% { background-position: 200% 0; }
                }
              `}
            </style>

            <div className="grid gap-6 mb-12 md:grid-cols-3">
              {[
                { 
                  icon: <Code size={40} />, 
                  title: "Programming Languages",  
                  desc: "Python, Java, C#, C++, C, JavaScript, PHP",
                  gradient: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: <Users size={40} />, 
                  title: "Frameworks & Libraries", 
                  desc: "React, Django, Laravel, Node.js, Express, Bootstrap, Tailwind CSS",
                  gradient: "from-violet-500 to-purple-500"
                },
                { 
                  icon: <Award size={40} />, 
                  title: "Databases", 
                  desc: "PostgreSQL, MySQL, MongoDB, SQL Server",
                  gradient: "from-fuchsia-500 to-pink-500"
                }
              ].map((category, index) => (
                <div 
                  key={index}
                  className="overflow-hidden relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 group bg-slate-900/30 border-slate-800 hover:border-blue-500/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="inline-block mb-4 transition-transform text-slate-200 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-slate-200">{category.title}</h3>
                    <p className="leading-relaxed text-slate-400">{category.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl border backdrop-blur-sm bg-slate-900/30 border-slate-800">
              <h3 className="mb-6 text-2xl font-bold text-center text-blue-400">Development Tools & Environment</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="flex gap-2 items-center mb-3 text-lg font-bold text-slate-200">
                    <span className="text-2xl">🛠️</span>
                    IDEs & Editors
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Visual Studio Code',
                      'Visual Studio',
                      'Apache NetBeans',
                      'Code Blocks'
                    ].map((tool, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm rounded-full border transition-all bg-slate-800/50 border-slate-700 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="flex gap-2 items-center mb-3 text-lg font-bold text-slate-200">
                    <span className="text-2xl">⚙️</span>
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Git & GitHub',
                      'ClickUp',
                      'REST APIs',
                      'Postman',
                      'XAMPP'
                    ].map((tool, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm rounded-full border transition-all bg-slate-800/50 border-slate-700 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="mb-4 text-xl font-bold text-slate-300">Additional Competencies</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  '🎨 UI/UX Design',
                  '📊 Database Design',
                  '🔐 Web Security Basics',
                  '📱 Responsive Design',
                  '🔄 RESTful APIs',
                  '🧪 Problem Solving',
                  '📖 Technical Documentation',
                  '👥 Team Collaboration'
                ].map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 text-sm bg-gradient-to-r rounded-full border transition-all from-blue-500/10 to-violet-500/10 border-blue-500/20 text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {activeSection === 'certifications' && (
          <section className="duration-700 animate-in fade-in">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 md:text-6xl">
                Certifications & Publications
              </h2>
              <p className="text-lg text-slate-400">My learning journey and research contributions</p>
            </div>

            <div className="mb-20">
              <h3 className="mb-10 text-3xl font-bold text-center text-blue-400">
                Professional Certifications
              </h3>
              
              <div className="grid gap-6 mx-auto max-w-6xl md:grid-cols-2">
                {[
                  {
                    title: "Python for Beginners",
                    organization: "University of Moratuwa",
                    provider: "Centre for Open & Distance Learning",
                    date: "Completed: June 2025",
                    icon: "🐍",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Introduction to Modern AI Course",
                    organization: "Cisco Networking Academy",
                    provider: "CISCO Networking Academy",
                    date: "Completed: October 2025",
                    icon: "🤖",
                    gradient: "from-violet-500 to-purple-500"
                  },
                  {
                    title: "Basics of Computer Networking",
                    organization: "Great Learning Academy",
                    provider: "Great Learning",
                    date: "Completed: September 2025",
                    icon: "🌐",
                    gradient: "from-emerald-500 to-teal-500"
                  },
                  {
                    title: "Introduction to Data Structures",
                    organization: "Alison",
                    provider: "Alison Learning Platform",
                    date: "Completed: September 2025",
                    icon: "📊",
                    gradient: "from-orange-500 to-red-500"
                  },
                  {
                    title: "Introduction to Cloud Computing",
                    organization: "Simplilearn",
                    provider: "Simplilearn Academy",
                    date: "Completed: 2024",
                    icon: "☁️",
                    gradient: "from-cyan-500 to-blue-500"
                  },
                  {
                    title: "Introduction to Cyber Security",
                    organization: "Simplilearn",
                    provider: "Simplilearn Academy",
                    date: "Completed: 2024",
                    icon: "🔐",
                    gradient: "from-red-500 to-pink-500"
                  }
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="group relative bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      <div className="flex gap-4 items-start mb-4">
                        <div className="text-5xl transition-transform group-hover:scale-110">
                          {cert.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-2 text-xl font-bold transition-colors text-slate-100 group-hover:text-blue-400">
                            {cert.title}
                          </h4>
                          <p className="mb-1 font-medium text-violet-400">{cert.organization}</p>
                          <p className="mb-2 text-sm text-slate-500">{cert.provider}</p>
                          <p className="text-sm font-medium text-blue-400">{cert.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl to-transparent opacity-0 transition-opacity duration-500 from-blue-500/20 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h3 className="mb-10 text-3xl font-bold text-center text-blue-400">
                Language Proficiency
              </h3>
              
              <div className="grid gap-6 mx-auto max-w-4xl md:grid-cols-2">
                <div className="p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group bg-slate-900/30 border-slate-800 hover:border-blue-500/50 hover:scale-105">
                  <div className="text-center">
                    <div className="mb-4 text-6xl transition-transform group-hover:scale-110">🗾</div>
                    <h4 className="mb-2 text-2xl font-bold text-slate-100">Japanese Language NAT - N4</h4>
                    <p className="mb-2 font-medium text-violet-400">Qualified (April 2024)</p>
                    <div className="inline-block px-4 py-2 mt-2 text-sm text-blue-400 rounded-full border bg-blue-500/10 border-blue-500/30">
                      Intermediate Level
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group bg-slate-900/30 border-slate-800 hover:border-blue-500/50 hover:scale-105">
                  <div className="text-center">
                    <div className="mb-4 text-6xl transition-transform group-hover:scale-110">🇯🇵</div>
                    <h4 className="mb-2 text-2xl font-bold text-slate-100">Japanese Language Proficiency Test</h4>
                    <p className="mb-2 font-medium text-violet-400">JLPT N5</p>
                    <p className="mb-2 text-sm text-slate-400">Qualified (July 2022)</p>
                    <div className="inline-block px-4 py-2 mt-2 text-sm text-emerald-400 rounded-full border bg-emerald-500/10 border-emerald-500/30">
                      Basic Level
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h3 className="mb-10 text-3xl font-bold text-center text-blue-400">
                Publications & Research
              </h3>
              
              <div className="mx-auto max-w-4xl">
                <div className="group bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
                  <div className="flex gap-6 items-start">
                    <div className="text-6xl transition-transform group-hover:scale-110">📄</div>
                    <div className="flex-1">
                      <h4 className="mb-3 text-2xl font-bold transition-colors text-slate-100 group-hover:text-blue-400">
                        Eaquasl- Automating The Farm Licensing Process Through A Farm Management System For Sri Lanka's Ornamental Fish Industry
                      </h4>
                      <p className="mb-2 italic font-medium text-violet-400">
                        Lanka Nippon BizTech Institute (LNBTI), Maharagama
                      </p>
                      <p className="mb-4 font-medium text-blue-400">
                        Published: 26/09/2025
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Research Paper', 'Farm Management', 'Automation', 'Sri Lanka'].map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs text-blue-400 rounded-full border bg-blue-500/10 border-blue-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-10 text-3xl font-bold text-center text-blue-400">
                Additional Achievements
              </h3>
              
              <div className="grid gap-4 mx-auto max-w-5xl md:grid-cols-4">
                {[
                  { title: "6 Certifications", icon: "🎓", desc: "Professional Learning" },
                  { title: "2 Languages", icon: "🗣️", desc: "Japanese Proficiency" },
                  { title: "1 Publication", icon: "📚", desc: "Research Contribution" },
                  { title: "7 Projects", icon: "💻", desc: "Academic Portfolio" }
                ].map((achievement, index) => (
                  <div 
                    key={index}
                    className="p-6 text-center rounded-xl border backdrop-blur-sm transition-all bg-slate-900/30 border-slate-800 hover:border-blue-500/30 group hover:scale-105"
                  >
                    <div className="mb-3 text-5xl transition-transform group-hover:scale-110">{achievement.icon}</div>
                    <div className="mb-1 text-2xl font-bold text-blue-400">{achievement.title}</div>
                    <div className="text-sm text-slate-400">{achievement.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="duration-700 animate-in fade-in">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 md:text-6xl">
                Let's Connect
              </h2>
              <p className="text-lg text-slate-400">Feel free to reach out for collaborations or just a friendly hello</p>
            </div>
            
            <div className="grid gap-12 mx-auto max-w-6xl md:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-6 text-3xl font-bold text-blue-400">Get In Touch</h3>
                  <p className="mb-8 text-lg leading-relaxed text-slate-300">
                    I'm always open to discussing new projects, internship opportunities, or collaborations. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { 
                      icon: <Mail size={24} />, 
                      label: "Email", 
                      value: "oshanikaveesha07@gmail.com", 
                      href: "mailto:oshanikaveesha07@gmail.com" 
                    },
                    { 
                      icon: <Github size={24} />, 
                      label: "GitHub", 
                      value: "github.com/oshi2002", 
                      href: "https://github.com/oshi2002" 
                    },
                    { 
                      icon: <Linkedin size={24} />, 
                      label: "LinkedIn", 
                      value: "linkedin.com/in/oshani-kaveesha", 
                      href: "https://www.linkedin.com/in/oshani-kaveesha" 
                    }
                  ].map((contact, index) => (
                    <a 
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 items-center transition-all text-slate-300 hover:text-blue-400 group"
                    >
                      <div className="p-4 rounded-xl border backdrop-blur-sm transition-all bg-slate-900/50 border-slate-800 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:scale-110">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-500">{contact.label}</div>
                        <div className="text-lg font-medium break-all">{contact.value}</div>
                      </div>
                      <ExternalLink size={16} className="flex-shrink-0 ml-auto opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-5 rounded-xl border backdrop-blur-sm transition-all bg-slate-900/30 border-slate-800 hover:border-blue-500/30">
                    <div className="mb-2 text-3xl">📍</div>
                    <div className="mb-1 text-sm text-slate-500">Location</div>
                    <div className="font-medium text-slate-200">Colombo, Sri Lanka</div>
                  </div>
                  
                  <div className="p-5 rounded-xl border backdrop-blur-sm transition-all bg-slate-900/30 border-slate-800 hover:border-blue-500/30">
                    <div className="mb-2 text-3xl">📱</div>
                    <div className="mb-1 text-sm text-slate-500">Phone</div>
                    <div className="font-medium text-slate-200">+94 78 127 9488</div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border backdrop-blur-sm bg-slate-900/30 border-slate-800">
                <h3 className="mb-6 text-2xl font-bold text-slate-100">Send a Message</h3>
                <form 
                  action="https://formsubmit.co/oshanikaveesha07@gmail.com" 
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-300">Your Name</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      className="px-4 py-3 w-full rounded-xl border transition-all bg-slate-800/50 border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-100"
                      
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-300">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      className="px-4 py-3 w-full rounded-xl border transition-all bg-slate-800/50 border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-100"
                      
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-300">Subject</label>
                    <input 
                      type="text"
                      name="subject"
                      required
                      className="px-4 py-3 w-full rounded-xl border transition-all bg-slate-800/50 border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-100"
                      
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium text-slate-300">Your Message</label>
                    <textarea 
                      rows={5}
                      name="message"
                      required
                      className="px-4 py-3 w-full rounded-xl border transition-all resize-none bg-slate-800/50 border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-100"
                      
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Mail size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* <div className="mt-16 text-center">
              <h4 className="mb-6 text-xl font-bold text-slate-300">Connect on Social Media</h4>
              <div className="flex gap-4 justify-center">
                {[
                  { icon: <Github size={24} />, href: "https://github.com/oshi2002", label: "GitHub" },
                  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/oshani-kaveesha", label: "LinkedIn" },
                  { icon: <Mail size={24} />, href: "mailto:oshani.kaveesha2002@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border backdrop-blur-sm transition-all bg-slate-900/50 border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:scale-110 group"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div> */}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t backdrop-blur-xl border-slate-800 bg-slate-950/80">
        <div className="px-6 py-12 mx-auto max-w-7xl">
          <div className="grid gap-8 mb-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                N G Oshani Kaveesha
              </h3>
              <p className="mb-4 leading-relaxed text-slate-400 hover:text-blue-400">
                Software Engineering student passionate about building exceptional digital experiences with modern web technologies.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/oshi2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border backdrop-blur-sm transition-all bg-slate-900/50 border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/oshani-kaveesha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border backdrop-blur-sm transition-all bg-slate-900/50 border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:oshanikaveesha07@gmail.com"
                  className="p-3 rounded-lg border backdrop-blur-sm transition-all bg-slate-900/50 border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 font-bold text-slate-200">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => setActiveSection(link.toLowerCase())}
                    className="block transition-colors text-slate-400 hover:text-blue-400"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 font-bold text-slate-200">Connect</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div className='hover:text-blue-400'>Colombo, Sri Lanka</div>
                <div className='hover:text-blue-400'>oshanikaveesha07@gmail.com</div>
                <div className='hover:text-blue-400'>+94 78 127 9488</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 justify-between items-center pt-8 border-t border-slate-800 md:flex-row">
            <p className="text-sm text-slate-400 hover:text-blue-400">
              © 2025 Oshani Kaveesha. Built with React & Tailwind CSS
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <button 
                onClick={() => setActiveSection('home')}
                className="transition-colors hover:text-blue-400"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}