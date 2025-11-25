import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Globe, Palette, Terminal,
  User, MapPin, Send, BookOpen, Briefcase, Download, Phone,
  FileCode2, Database, Server, Layers, Layout, PenTool,
  Image, GitBranch, ArrowUp, MessageSquare, Coffee, Award, Zap,
  Monitor, Smartphone, HardDrive, Facebook, Instagram
} from 'lucide-react';

import profileImageSrc from './me.jpg';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Typing Effect State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % personalInfo.roles.length;
      const fullText = personalInfo.roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // --- CONFIGURATION: PHOTO URL ---
  const profileImage = profileImageSrc;
  // --------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thanks for your message! I'll get back to you soon.");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const personalInfo = {
    name: "Md. Iftida Hasan Alif",
    roles: ["Engineer", "Developer", "Designer", "Problem Solver"],
    bio: "I’m a passionate Computer Science Engineer with expertise in  web development, and programming languages like Python, Java, C, C# and also UI/UX design. I build modern websites, intuitive apps, and custom software solutions tailored to your needs.",
    location: "Dhaka, Bangladesh",
    email: "mdiftidahasanalif@gmail.com",
    phone: "+08801600770830",
    copyrightYear: 2024
  };

  const stats = [
    { label: "Years Experience", value: "3+", icon: <Briefcase size={20} /> },
    { label: "Projects Completed", value: "15+", icon: <Award size={20} /> },
    { label: "Happy Clients", value: "10+", icon: <User size={20} /> },
    { label: "Cups of Coffee", value: "∞", icon: <Coffee size={20} /> },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor size={18} />,
      color: "text-cyan-400",
      skills: [
        { name: "HTML5", icon: <FileCode2 size={16} /> },
        { name: "CSS3", icon: <Layout size={16} /> },
        { name: "JavaScript", icon: <Code2 size={16} /> },
        { name: "React", icon: <Zap size={16} /> },
        { name: "Vue.js", icon: <Layers size={16} /> },
        { name: "Bootstrap", icon: <Layout size={16} /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={18} />,
      color: "text-purple-400",
      skills: [
        { name: "Node.js", icon: <Server size={16} /> },
        { name: "Python", icon: <Terminal size={16} /> },
        { name: "PHP", icon: <Code2 size={16} /> },
        { name: "MongoDB", icon: <Database size={16} /> },
        { name: "MySQL", icon: <Database size={16} /> },
        { name: "Git", icon: <GitBranch size={16} /> }
      ]
    },
    {
      title: "Graphic Design",
      icon: <Palette size={18} />,
      color: "text-pink-400",
      skills: [
        { name: "Illustrator", icon: <PenTool size={16} /> },
        { name: "Photoshop", icon: <Image size={16} /> },
        { name: "Figma", icon: <Palette size={16} /> },
        { name: "Logo Design", icon: <Award size={16} /> },
        { name: "Poster Design", icon: <Layout size={16} /> },
        { name: "Identity", icon: <User size={16} /> }
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Stock Prices Analysis",
      category: "analysis",
      description: "Utilized Python libraries like Pandas and Matplotlib to analyze stock price data and predict future trends.",
      tech: ["Python", "Pandas", "Matplotlib", "ML"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      category: "web",
      description: "Developed a fully functional e-commerce website using HTML, CSS, and JavaScript, integrated with Flask backend.",
      tech: ["Flask", "Python", "HTML/CSS", "JS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Finance Mgmt App",
      category: "app",
      description: "Cross-platform mobile app using Java and XML for managing personal finances, budgeting and expense tracking.",
      tech: ["Java", "XML", "Android"],
      color: "from-emerald-400 to-teal-500"
    },
    {
      id: 4,
      title: "Real-Time Chat App",
      category: "web",
      description: "Real-time chat application using Python for the backend and HTML/CSS for the frontend with WebSockets.",
      tech: ["Python", "WebSockets", "HTML/CSS"],
      color: "from-orange-400 to-red-500"
    },
    {
      id: 5,
      title: "Inventory System",
      category: "system",
      description: "Inventory management system using C to manage stock levels, suppliers, and orders efficiently.",
      tech: ["C", "File Handling", "Data Structures"],
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const timelineData = [
    {
      type: "experience",
      role: "Intern",
      org: "TechNova Solutions",
      period: "Summer 2023",
      desc: "Developed web applications using Python and JavaScript, collaborating with senior developers to deliver high-quality software solutions.",
      icon: <Briefcase size={20} className="text-emerald-400" />
    },
    {
      type: "education",
      role: "Computer Science & Engineering",
      org: "Daffodil International University",
      period: "Expected 2026",
      desc: "Specializing in Software Engineering and Intelligent Systems. Active member of the Computer Club.",
      icon: <BookOpen size={20} className="text-blue-400" />
    }
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      school: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      year: "Expected 2026"
    }
  ];

  const experience = [
    {
      role: "Software Development Intern",
      company: "TechNova Solutions",
      period: "Summer 2023",
      desc: "Developed web applications using Python and JavaScript, collaborating with senior developers to deliver high-quality software solutions."
    }
  ];

  const testimonials = [
    { name: "Project Supervisor", role: "University Professor", text: "Iftida showed exceptional problem-solving skills during the final year project. Highly recommended." },
    { name: "Team Lead", role: "TechNova Solutions", text: "A dedicated developer who picks up new technologies incredibly fast. Was a pleasure to work with." }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab || (activeTab === 'web' && (p.category === 'web' || p.category === 'app')));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden relative">

      {/* Background Gradient Orbs - Refined */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-violet-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-fuchsia-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-blue-600/5 rounded-full blur-[100px] animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-zinc-800/50 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter font-heading bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity" onClick={scrollToTop}>
            M.I.H.A.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {['Home', 'About', 'Work', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-violet-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-zinc-100 text-zinc-900 hover:bg-white font-medium text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance Projects
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-white font-heading mb-6">
              <span className="text-2xl md:text-4xl font-medium text-zinc-400 block mb-2">
                Hello, I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">{text}</span>
                <span className="animate-pulse text-violet-400">|</span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
              I’m a passionate Computer Science Engineer with expertise in <span className="text-blue-400 font-medium">web development</span>, and programming languages like <span className="text-blue-400 font-medium">Python</span>, <span className="text-blue-400 font-medium">Java</span>, <span className="text-blue-400 font-medium">C</span>, <span className="text-blue-400 font-medium">C#</span> and also <span className="text-blue-400 font-medium">UI/UX design</span>. I build modern websites, intuitive apps, and custom software solutions tailored to your needs.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 rounded-2xl bg-white text-zinc-950 font-semibold hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:-translate-y-1">
                Let's Talk
              </a>
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-300 font-medium transition-all hover:-translate-y-1 group">
                <Download size={18} className="group-hover:text-violet-400 transition-colors" /> Download CV
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 pt-8">
              {[
                { icon: <Facebook size={24} />, href: "#" },
                { icon: <Linkedin size={24} />, href: "#" },
                { icon: <Instagram size={24} />, href: "#" },
                { icon: <Github size={24} />, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-zinc-400 hover:text-white transition-all duration-500 hover:rotate-[360deg] transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-zinc-900 mt-8">
              {stats.map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex items-center gap-2 text-white font-bold text-3xl font-heading group-hover:text-violet-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Photo Section */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[100px] animate-pulse"></div>

            <div className="relative w-80 h-[400px] md:w-[400px] md:h-[500px] rounded-[2.5rem] p-3 bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-2xl bg-zinc-900">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="text-white font-heading font-bold text-2xl">{personalInfo.name}</div>
                  <div className="text-zinc-400 text-sm">Developer & Problem-solver</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 -right-8 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 p-4 rounded-2xl shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-violet-500/20 p-2.5 rounded-xl">
                    <Code2 size={20} className="text-violet-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Expertise</div>
                    <div className="text-white font-bold text-sm">Python, Java, C, C#</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid About & Skills */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">About Me</h2>
              <p className="text-zinc-400 text-lg">Passionate developer, problem solver, and creative thinker.</p>
            </div>
            <a href="#work" className="text-violet-400 hover:text-violet-300 font-medium flex items-center gap-2 group">
              View My Work <ArrowUp className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* Main Bio Card */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-violet-500/20 transition-all duration-700"></div>
              <User className="text-violet-400 mb-8" size={48} />
              <h3 className="text-3xl font-bold text-white mb-6 font-heading">Who I Am</h3>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">
                {personalInfo.bio}
              </p>
            </div>

            {/* Education Card */}
            <div className="md:col-span-1 lg:col-span-2 bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 flex flex-col justify-center hover:border-zinc-700 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                  <BookOpen size={24} />
                </div>
                <h4 className="text-white font-bold text-xl font-heading">Education</h4>
              </div>
              {education.map((edu, i) => (
                <div key={i}>
                  <div className="text-zinc-200 font-medium text-lg">{edu.school}</div>
                  <div className="text-violet-400">{edu.degree}</div>
                  <div className="text-zinc-500 text-sm mt-2">{edu.location} • {edu.year}</div>
                </div>
              ))}
            </div>

            {/* Experience Card */}
            <div className="md:col-span-1 lg:col-span-2 bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-8 flex flex-col justify-center hover:border-zinc-700 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-white font-bold text-xl font-heading">Experience</h4>
              </div>
              {experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-zinc-200 font-medium text-lg">{exp.role} @ {exp.company}</div>
                    <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">{exp.period}</span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack List */}
            <div className="md:col-span-3 lg:col-span-4 bg-zinc-900/50 border border-zinc-800/50 rounded-[2rem] p-10">
              <h4 className="text-zinc-200 font-bold text-xl mb-8 flex items-center gap-3 font-heading">
                <Code2 size={24} className="text-violet-400" /> Technical Expertise
              </h4>
              <div className="grid md:grid-cols-3 gap-10">
                {skillCategories.map((category, i) => (
                  <div key={i} className="space-y-6">
                    <div className="flex items-center gap-3 text-zinc-200 font-medium pb-4 border-b border-zinc-800">
                      <span className={`${category.color}`}>{category.icon}</span>
                      {category.title}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, j) => (
                        <div key={j} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800/50 text-sm text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all cursor-default group/skill">
                          <span className={`${category.color} opacity-60 group-hover/skill:opacity-100 transition-opacity`}>
                            {skill.icon}
                          </span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">Featured Projects</h2>
              <p className="text-zinc-400 text-lg">A selection of my recent work.</p>
            </div>

            <div className="flex p-1.5 bg-zinc-900 border border-zinc-800 rounded-xl backdrop-blur-sm">
              {['all', 'web', 'analysis', 'system'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 text-sm font-medium rounded-lg capitalize transition-all ${activeTab === tab
                    ? 'bg-zinc-800 text-white shadow-lg'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
                    }`}
                >
                  {tab === 'web' ? 'Web & App' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-violet-900/10 flex flex-col hover:-translate-y-2 duration-300">
                <div className={`h-2 bg-gradient-to-r ${project.color} w-full opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 bg-clip-border shadow-inner`}>
                      <Code2 className="text-white drop-shadow-md" size={24} />
                    </div>
                    <a href="#" className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
                      <ExternalLink size={20} className="text-zinc-600 group-hover:text-white transition-colors" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors font-heading">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 text-sm leading-relaxed flex-1 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-800/50">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">What People Say</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-zinc-900/30 p-10 rounded-[2rem] border border-zinc-800 relative hover:bg-zinc-900/50 transition-colors">
                <MessageSquare size={40} className="text-zinc-800 absolute top-8 right-8" />
                <p className="text-zinc-300 italic mb-8 relative z-10 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold font-heading">{t.name}</div>
                    <div className="text-zinc-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 px-6 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
                Get in Touch
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-heading tracking-tight">Let’s work <br />together.</h2>
              <p className="text-zinc-400 text-lg mb-10 font-light leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. Drop me a line and let's talk about your project.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5 text-zinc-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Email Me</div>
                    <div className="font-medium text-lg">{personalInfo.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-zinc-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Call Me</div>
                    <div className="font-medium text-lg">{personalInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-zinc-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Location</div>
                    <div className="font-medium text-lg">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-zinc-800/50 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

              <h3 className="text-2xl font-bold text-white mb-8 font-heading">Send Message</h3>
              <div className="space-y-5 relative z-10">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none placeholder:text-zinc-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-zinc-950 font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 shadow-lg shadow-white/5"
                >
                  {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                </button>
              </div>
            </form>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
            <p>&copy; {personalInfo.copyrightYear} {personalInfo.name}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Fiverr</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>

    </div>
  );
};

export default Portfolio;