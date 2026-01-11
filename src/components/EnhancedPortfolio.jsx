
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Download, Code, Sparkles, Award, Users } from 'lucide-react';
import profile5 from '../assets/profile5.png';
import profile6 from '../assets/profile6.png';

export default function EnhancedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = [
        { name: 'home', ref: homeRef },
        { name: 'about', ref: aboutRef },
        { name: 'projects', ref: projectsRef },
        { name: 'skills', ref: skillsRef },
        { name: 'certifications', ref: certificationsRef },
        { name: 'contact', ref: contactRef }
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveSection(section.name);
          break;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionName) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      certifications: certificationsRef,
      contact: contactRef
    };

    const targetRef = refs[sectionName];
    if (targetRef.current) {
      const offsetTop = targetRef.current.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const achievements = [];

  return (
    <div className="overflow-hidden relative min-h-screen text-white bg-black">
      {/* Multiple animated background orbs with pink theme */}
      <div 
        className="fixed blur-3xl transition-all duration-500 ease-out pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          left: mousePosition.x - 350,
          top: mousePosition.y - 350,
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
        }}
      />
      <div 
        className="fixed pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          right: '10%',
          top: scrollY * 0.5,
          background: 'radial-gradient(circle, rgba(219, 39, 119, 0.12) 0%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.1) 0%, transparent 70%)',
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

          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
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
      <nav className="fixed top-0 z-50 w-full border-b shadow-lg backdrop-blur-xl bg-black/90 border-pink-500/20 shadow-pink-900/50">
        <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 animate-pulse-slow">
            &lt;Portfolio Oshi /&gt;
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden gap-8 md:flex">
            {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.toLowerCase() ? 'text-pink-400' : 'text-gray-300'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-600 transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="text-gray-300 transition-colors md:hidden hover:text-pink-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t backdrop-blur-xl md:hidden bg-black/95 border-pink-500/20 animate-slide-up">
            <div className="flex flex-col gap-4 p-6">
              {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:text-pink-400 hover:translate-x-2 ${
                    activeSection === item.toLowerCase() ? 'text-pink-400' : 'text-gray-300'
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
        <section ref={homeRef} id="home" className="min-h-[85vh] flex items-center scroll-mt-20">
          <div className="grid gap-12 items-center w-full md:grid-cols-2">
            {/* Left Column - Text */}
            <div className="space-y-6 animate-slide-left">
              <div className="flex gap-2 items-center text-sm font-medium tracking-widest text-pink-400 uppercase">
                <Sparkles size={16} className="animate-pulse-slow" />
                Welcome to my digital space
              </div>
              <h2 className="text-6xl font-bold leading-tight md:text-7xl">
                Hi, I'm{' '}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 animate-pulse-slow">
                  Oshani Kaveesha
                </span>
              </h2>
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-gray-200">
                  Software Engineering Undergraduate Student
                </p>
                <p className="text-xl text-gray-400">
                  Creative Problem Solver • Full-Stack Developer
                </p>
              </div>
              <p className="text-lg leading-relaxed text-gray-400">
                I design and build scalable web applications with a strong focus on clean UI, 
                usability, and system architecture. Passionate about transforming real-world 
                problems into efficient, user-friendly digital solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="flex gap-2 items-center px-8 py-4 font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl transition-all duration-300 group hover:from-pink-600 hover:to-pink-700 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
                >
                  View My Work
                  <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex gap-2 items-center px-8 py-4 font-medium text-white rounded-xl border-2 border-gray-700 backdrop-blur-sm transition-all duration-300 group hover:border-pink-400 hover:scale-105 bg-gray-900/50"
                >
                  <Mail size={18} />
                  Get In Touch
                </button>
                <a 
                  href={`${import.meta.env.BASE_URL}Oshani_Kaveesha_Resume.pdf`}
                  download="Oshani_Kaveesha_Resume.pdf"
                  className="flex gap-2 items-center px-8 py-4 font-medium text-white rounded-xl border-2 border-gray-800 backdrop-blur-sm transition-all duration-300 group hover:border-pink-400 hover:scale-105 bg-gray-900/30"
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
                    <div className="text-2xl font-bold text-pink-400">{achievement.number}</div>
                    <div className="text-xs text-gray-500">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Photo with fancy effects */}
            <div className="relative animate-slide-right">
              <div className="relative group">
                {/* Animated border rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50 animate-pulse-slow" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-20 animate-rotate" style={{ padding: '3px' }} />
                
                {/* Photo container */}
                <div className="overflow-hidden relative w-full rounded-full border-4 border-gray-900 shadow-2xl transition-all duration-500 aspect-square shadow-pink-500/20 group-hover:border-pink-500/50 group-hover:scale-105">
                  <img 
                    src={profile6}
                    alt="Oshani Kaveesha" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="flex absolute -top-6 -right-6 justify-center items-center w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl opacity-80 rotate-12 animate-pulse-slow">
                  <Code size={32} className="text-white" />
                </div>
                <div className="flex absolute -bottom-6 -left-6 justify-center items-center w-20 h-20 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl opacity-80 -rotate-12 animate-pulse-slow">
                  <Sparkles size={32} className="text-white" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 -left-10" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium text-white rounded-full border border-gray-700 shadow-lg backdrop-blur-sm bg-gray-900/90">
                  ⚛️ React
                </div>
              </div>
              <div className="absolute -right-10 top-20" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium text-white rounded-full border border-gray-700 shadow-lg backdrop-blur-sm bg-gray-900/90">
                  🐘 Laravel
                </div>
              </div>
              <div className="absolute -right-10 bottom-20" style={{ animation: 'float 8s ease-in-out infinite reverse', animationDelay: '1s' }}>
                <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium text-white rounded-full border border-gray-700 shadow-lg backdrop-blur-sm bg-gray-900/90">
                  🐍 Django
                </div>
              </div>
              <div className="absolute -right-10 bottom-10" style={{ animation: 'float 8s ease-in-out infinite reverse', animationDelay: '1s' }}>
                <div className="flex gap-2 items-center px-4 py-2 text-sm font-medium text-white rounded-full border border-gray-700 shadow-lg backdrop-blur-sm bg-gray-900/90">
                  🟢 Node.js
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-20 scroll-mt-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 md:text-6xl">
              About Me
            </h2>
            <p className="text-lg text-gray-400">Get to know me better</p>
          </div>

          <div className="grid gap-8 mb-16 md:grid-cols-3">
            {/* Photo Column */}
            <div className="md:col-span-1">
              <div className="sticky top-32">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl transition-all duration-500 from-pink-500/20 to-pink-600/20 group-hover:blur-2xl" />
                  <div className="overflow-hidden relative rounded-2xl border-2 border-gray-900 shadow-2xl transition-all duration-500 aspect-square group-hover:border-pink-500/50">
                    <img
                      src={profile5}
                      alt="About Me"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="mt-6 space-y-3">
                  <div className="p-4 rounded-xl border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/50 hover:border-pink-500/30">
                    <div className="flex gap-3 items-center">
                      <div className="text-2xl">🎓</div>
                      <div>
                        <div className="text-sm text-gray-500">Education</div>
                        <div className="font-medium text-white">Software Engineering Student</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/50 hover:border-pink-500/30">
                    <div className="flex gap-3 items-center">
                      <div className="text-2xl">🗾</div>
                      <div>
                        <div className="text-sm text-gray-500">Languages</div>
                        <div className="font-medium text-white">English • Japanese</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/50 hover:border-pink-500/30">
                    <div className="flex gap-3 items-center">
                      <div className="text-2xl">🌍</div>
                      <div>
                        <div className="text-sm text-gray-500">Open to</div>
                        <div className="font-medium text-white">Internships & Projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-8 md:col-span-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-pink-400">My Journey</h3>
                <div className="space-y-4 text-lg leading-relaxed text-gray-300">
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
                <h3 className="mb-6 text-2xl font-bold text-pink-400">What I Bring</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: "🧠", title: "Logical Thinker", desc: "Strong problem-solving mindset" },
                    { icon: "⚙️", title: "System-Oriented", desc: "Focus on scalability & structure" },
                    { icon: "🎨", title: "UI-Focused", desc: "Clean, responsive interfaces" },
                    { icon: "📘", title: "Continuous Learner", desc: "Always improving skills" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl border border-gray-800 backdrop-blur-sm transition-all duration-300 bg-gray-900/30 hover:border-pink-500/30 hover:bg-gray-900/50 group"
                    >
                      <div className="mb-3 text-3xl transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <h4 className="mb-1 font-bold text-gray-200">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-pink-400">Beyond Code</h3>
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
                      className="px-4 py-2 text-sm text-white rounded-full border border-gray-700 backdrop-blur-sm transition-all cursor-default bg-gray-900/50 hover:border-pink-500/50 hover:bg-gray-900/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-20 scroll-mt-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 md:text-6xl">
              Academic Projects
            </h2>
            <p className="text-lg text-gray-400">A showcase of my academic work and real-world applications</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "eAquaSL",
                subtitle: "Fish Farm Licensing System",
                description: "Automated ornamental fish farm licensing, farm registrations, and management of active/inactive farmers in Sri Lanka using Django & PostgreSQL.",
                tech: ["Django", "PostgreSQL", "Python", "Tailwind CSS"],
                image: "🐠",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                title: "CeylonTourMate",
                subtitle: "Travel Agency Management",
                description: "Full-stack tourist travel agency management system with booking, itinerary planning, and customer management features.",
                tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
                image: "✈️",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Hospital Management System",
                subtitle: "Healthcare Operations Platform",
                description: "Comprehensive hospital management system handling patient records, appointments, billing, staff management, and inventory tracking.",
                tech: ["C#", ".NET", "SQL Server", "Windows Forms"],
                image: "🏥",
                gradient: "from-purple-500 to-indigo-500"
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
                className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-pink-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="flex overflow-hidden relative justify-center items-center h-48 bg-gradient-to-br from-gray-900 to-black">
                  <div className="text-9xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                    {project.image}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
                
                <div className="relative p-6">
                  <div className="mb-3">
                    <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-pink-400">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500">
                      {project.subtitle}
                    </p>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs text-pink-400 rounded-full border transition-colors bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl to-transparent opacity-0 transition-opacity duration-500 from-pink-500/20 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-20 scroll-mt-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 md:text-6xl">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-400">Technologies and tools I work with</p>
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
                    <span className="text-xl font-bold text-gray-200">{skill.name}</span>
                  </div>
                  <span className="text-lg font-bold text-pink-400">{skill.level}%</span>
                </div>
                <div className="overflow-hidden h-4 bg-gray-900 rounded-full shadow-inner">
                  <div 
                    className="overflow-hidden relative h-full bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 rounded-full transition-all duration-1000 ease-out"
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

          <div className="grid gap-6 mb-12 md:grid-cols-3">
            {[
              { 
                icon: <Code size={40} />, 
                title: "Programming Languages",  
                desc: "Python, Java, C#, C++, C, JavaScript, PHP",
                gradient: "from-pink-500 to-pink-600"
              },
              { 
                icon: <Users size={40} />, 
                title: "Frameworks & Libraries", 
                desc: "React, Django, Laravel, Node.js, Express, Bootstrap, Tailwind CSS",
                gradient: "from-pink-600 to-pink-700"
              },
              { 
                icon: <Award size={40} />, 
                title: "Databases", 
                desc: "PostgreSQL, MySQL, MongoDB, SQL Server",
                gradient: "from-pink-500 to-pink-600"
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="overflow-hidden relative p-8 rounded-2xl border border-gray-800 backdrop-blur-sm transition-all duration-500 group bg-gray-900/30 hover:border-pink-500/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="inline-block mb-4 text-white transition-transform group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-200">{category.title}</h3>
                  <p className="leading-relaxed text-gray-400">{category.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl border border-gray-800 backdrop-blur-sm bg-gray-900/30">
            <h3 className="mb-6 text-2xl font-bold text-center text-pink-400">Development Tools & Environment</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="flex gap-2 items-center mb-3 text-lg font-bold text-gray-200">
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
                      className="px-3 py-1 text-sm text-white rounded-full border border-gray-700 transition-all bg-gray-800/50 hover:border-pink-500/50 hover:bg-gray-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="flex gap-2 items-center mb-3 text-lg font-bold text-gray-200">
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
                      className="px-3 py-1 text-sm text-white rounded-full border border-gray-700 transition-all bg-gray-800/50 hover:border-pink-500/50 hover:bg-gray-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="mb-4 text-xl font-bold text-gray-300">Additional Competencies</h3>
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
                  className="px-4 py-2 text-sm text-white bg-gradient-to-r rounded-full border transition-all from-pink-500/10 to-pink-600/10 border-pink-500/20 hover:border-pink-500/50 hover:bg-pink-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section ref={certificationsRef} id="certifications" className="py-20 scroll-mt-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 md:text-6xl">
              Certifications & Publications
            </h2>
            <p className="text-lg text-gray-400">My learning journey and research contributions</p>
          </div>

          <div className="mb-20">
            <h3 className="mb-10 text-3xl font-bold text-center text-pink-400">
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
                  gradient: "from-pink-500 to-pink-600"
                },
                {
                  title: "Introduction to Modern AI Course",
                  organization: "Cisco Networking Academy",
                  provider: "CISCO Networking Academy",
                  date: "Completed: October 2025",
                  icon: "🤖",
                  gradient: "from-pink-600 to-pink-700"
                },
                {
                  title: "Basics of Computer Networking",
                  organization: "Great Learning Academy",
                  provider: "Great Learning",
                  date: "Completed: September 2025",
                  icon: "🌐",
                  gradient: "from-pink-500 to-pink-600"
                },
                {
                  title: "Introduction to Data Structures",
                  organization: "Alison",
                  provider: "Alison Learning Platform",
                  date: "Completed: September 2025",
                  icon: "📊",
                  gradient: "from-pink-600 to-pink-700"
                },
                {
                  title: "Introduction to Cloud Computing",
                  organization: "Simplilearn",
                  provider: "Simplilearn Academy",
                  date: "Completed: 2024",
                  icon: "☁️",
                  gradient: "from-pink-500 to-pink-600"
                },
                {
                  title: "Introduction to Cyber Security",
                  organization: "Simplilearn",
                  provider: "Simplilearn Academy",
                  date: "Completed: 2024",
                  icon: "🔐",
                  gradient: "from-pink-600 to-pink-700"
                }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className="flex gap-4 items-start mb-4">
                      <div className="text-5xl transition-transform group-hover:scale-110">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-pink-400">
                          {cert.title}
                        </h4>
                        <p className="mb-1 font-medium text-pink-400">{cert.organization}</p>
                        <p className="mb-2 text-sm text-gray-500">{cert.provider}</p>
                        <p className="text-sm font-medium text-pink-400">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl to-transparent opacity-0 transition-opacity duration-500 from-pink-500/20 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="mb-10 text-3xl font-bold text-center text-pink-400">
              Language Proficiency
            </h3>
            
            <div className="grid gap-6 mx-auto max-w-4xl md:grid-cols-2">
              <div className="p-8 rounded-2xl border border-gray-800 backdrop-blur-sm transition-all duration-300 group bg-gray-900/30 hover:border-pink-500/50 hover:scale-105">
                <div className="text-center">
                  <div className="mb-4 text-6xl transition-transform group-hover:scale-110">🗾</div>
                  <h4 className="mb-2 text-2xl font-bold text-white">Japanese Language NAT - N4</h4>
                  <p className="mb-2 font-medium text-pink-400">Qualified (April 2024)</p>
                  <div className="inline-block px-4 py-2 mt-2 text-sm text-pink-400 rounded-full border bg-pink-500/10 border-pink-500/30">
                    Intermediate Level
                  </div>
                </div>
              </div>
              
              <div className="p-8 rounded-2xl border border-gray-800 backdrop-blur-sm transition-all duration-300 group bg-gray-900/30 hover:border-pink-500/50 hover:scale-105">
                <div className="text-center">
                  <div className="mb-4 text-6xl transition-transform group-hover:scale-110">🇯🇵</div>
                  <h4 className="mb-2 text-2xl font-bold text-white">Japanese Language Proficiency Test</h4>
                  <p className="mb-2 font-medium text-pink-400">JLPT N5</p>
                  <p className="mb-2 text-sm text-gray-400">Qualified (July 2022)</p>
                  <div className="inline-block px-4 py-2 mt-2 text-sm text-pink-400 rounded-full border bg-pink-500/10 border-pink-500/30">
                    Basic Level
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="mb-10 text-3xl font-bold text-center text-pink-400">
              Publications & Research
            </h3>
            
            <div className="mx-auto max-w-4xl">
              <div className="group bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-pink-500/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex gap-6 items-start">
                  <div className="text-6xl transition-transform group-hover:scale-110">📄</div>
                  <div className="flex-1">
                    <h4 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-pink-400">
                      Eaquasl- Automating The Farm Licensing Process Through A Farm Management System For Sri Lanka's Ornamental Fish Industry
                    </h4>
                    <p className="mb-2 italic font-medium text-pink-400">
                      JASPER 2025 Research Simposium offered by Lanka Nippon BizTech Institute (LNBTI), Maharagama
                    </p>
                    <p className="mb-4 font-medium text-pink-400">
                      Published: 26/09/2025
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Research Paper', 'Farm Management', 'Automation', 'Sri Lanka'].map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs text-pink-400 rounded-full border bg-pink-500/10 border-pink-500/20"
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
            <h3 className="mb-10 text-3xl font-bold text-center text-pink-400">
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
                  className="p-6 text-center rounded-xl border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/30 hover:border-pink-500/30 group hover:scale-105"
                >
                  <div className="mb-3 text-5xl transition-transform group-hover:scale-110">{achievement.icon}</div>
                  <div className="mb-1 text-2xl font-bold text-pink-400">{achievement.title}</div>
                  <div className="text-sm text-gray-400">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-20 scroll-mt-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 md:text-6xl">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>
          
          <div className="grid gap-12 mx-auto max-w-6xl md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-3xl font-bold text-pink-400">Get In Touch</h3>
                <p className="mb-8 text-lg leading-relaxed text-gray-300">
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
                    className="flex gap-4 items-center text-white transition-all hover:text-pink-400 group"
                  >
                    <div className="p-4 rounded-xl border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/50 group-hover:border-pink-500/50 group-hover:bg-pink-500/10 group-hover:scale-110">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">{contact.label}</div>
                      <div className="text-lg font-medium break-all">{contact.value}</div>
                    </div>
                    <ExternalLink size={16} className="flex-shrink-0 ml-auto opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-xl border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/30 hover:border-pink-500/30">
                  <div className="mb-2 text-3xl">📍</div>
                  <div className="mb-1 text-sm text-gray-500">Location</div>
                  <div className="font-medium text-gray-200">Colombo, Sri Lanka</div>
                </div>
                
                <div className="p-5 rounded-xl border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/30 hover:border-pink-500/30">
                  <div className="mb-2 text-3xl">📱</div>
                  <div className="mb-1 text-sm text-gray-500">Phone</div>
                  <div className="font-medium text-gray-200">+94 78 127 9488</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 backdrop-blur-sm bg-gray-900/30">
              <h3 className="mb-6 text-2xl font-bold text-white">Send a Message</h3>
              <form 
                action="https://formsubmit.co/oshanikaveesha07@gmail.com" 
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    className="px-4 py-3 w-full text-white rounded-xl border border-gray-700 transition-all bg-gray-800/50 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    className="px-4 py-3 w-full text-white rounded-xl border border-gray-700 transition-all bg-gray-800/50 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                  <input 
                    type="text"
                    name="subject"
                    required
                    className="px-4 py-3 w-full text-white rounded-xl border border-gray-700 transition-all bg-gray-800/50 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
                  <textarea 
                    rows={5}
                    name="message"
                    required
                    className="px-4 py-3 w-full text-white rounded-xl border border-gray-700 transition-all resize-none bg-gray-800/50 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-4 text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/50 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Mail size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t backdrop-blur-xl border-pink-500/20 bg-black/80">
        <div className="px-6 py-12 mx-auto max-w-7xl">
          <div className="grid gap-8 mb-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                N G Oshani Kaveesha
              </h3>
              <p className="mb-4 leading-relaxed text-gray-400 hover:text-pink-400">
                Software Engineering student passionate about building exceptional digital experiences with modern web technologies.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/oshi2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 rounded-lg border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/50 hover:text-pink-400 hover:border-pink-500/50 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/oshani-kaveesha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 rounded-lg border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/50 hover:text-pink-400 hover:border-pink-500/50 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:oshanikaveesha07@gmail.com"
                  className="p-3 text-gray-400 rounded-lg border border-gray-800 backdrop-blur-sm transition-all bg-gray-900/50 hover:text-pink-400 hover:border-pink-500/50 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 font-bold text-gray-200">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 transition-colors hover:text-pink-400"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="mb-4 font-bold text-gray-200">Connect</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className='hover:text-pink-400'>Colombo, Sri Lanka</div>
                <div className='hover:text-pink-400'>oshanikaveesha07@gmail.com</div>
                <div className='hover:text-pink-400'>+94 78 127 9488</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 justify-between items-center pt-8 border-t border-pink-500/20 md:flex-row">
            <p className="text-sm text-gray-400 hover:text-pink-400">
              © 2025 Oshani Kaveesha. Built with React & Tailwind CSS
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button 
                onClick={() => scrollToSection('home')}
                className="transition-colors hover:text-pink-400"
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