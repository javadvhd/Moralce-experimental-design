'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-4 h-4 bg-blue-200/15 rounded-full blur-sm"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transition: 'all 0.5s ease-out'
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-slate-200/15 rounded-full blur-sm"
          style={{
            left: `${mousePosition.x * 0.03}px`,
            top: `${mousePosition.y * 0.03}px`,
            transition: 'all 0.7s ease-out'
          }}
        />
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-800 tracking-wide hover:scale-105 transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Pacifico, serif' }}>
                Moracle
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              {['About', 'Services', 'Publications', 'Checklists', 'Meeting Support', 'Contact us'].map((item, index) => (
                <Link key={item} href="/" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-0.5">
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                {[
                  { icon: 'ri-youtube-line' },
                  { icon: 'ri-facebook-line' },
                  { icon: 'ri-linkedin-line' },
                  { icon: 'ri-twitter-line' }
                ].map((social, index) => (
                  <div key={index} className="w-12 h-12 bg-gray-50 hover:bg-blue-50 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group hover:scale-105">
                    <i className={`${social.icon} text-xl text-gray-500 group-hover:text-blue-600 transition-all duration-300`}></i>
                  </div>
                ))}
              </div>
              <button className="md:hidden w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300">
                <i className="ri-menu-line text-2xl text-gray-700"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50/60 via-white to-slate-50/40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="w-full space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-[#E5D4B6]/20 border border-[#E5D4B6]/40 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Professional Accounting Services
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Need an <br/>
                  <span className="text-blue-600 relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Accountant?
                    <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30"></div>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  We provide comprehensive financial solutions and expert guidance to help your business thrive in today's competitive landscape with personalized service and cutting-edge technology.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-3xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 whitespace-nowrap cursor-pointer">
                  Get Started Today
                </button>
                <button className="border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-10 py-5 rounded-3xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer hover:-translate-y-1 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-100/40 to-slate-100/40 rounded-[3rem] blur-2xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20professional%20accounting%20office%20with%20soft%20natural%20lighting%2C%20clean%20minimalist%20workspace%2C%20contemporary%20furniture%2C%20team%20collaboration%20around%20a%20large%20table%2C%20laptops%20showing%20financial%20dashboards%2C%20warm%20welcoming%20atmosphere%2C%20predominantly%20white%20and%20light%20blue%20color%20scheme%2C%20soft%20shadows%2C%20gentle%20curves%20in%20furniture%20design%2C%20floor-to-ceiling%20windows%2C%20plants%2C%20very%20soft%20and%20approachable%20professional%20environment&width=600&height=500&seq=hero-ultra-soft&orientation=landscape"
                  alt="Professional Accounting Services"
                  className="w-full h-96 object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full opacity-15 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 bg-white" id="about" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-800 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'}`}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-[3rem] blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-6 shadow-xl">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20professional%20meeting%20room%20with%20curved%20glass%20walls%2C%20soft%20comfortable%20seating%20with%20rounded%20edges%2C%20abundant%20natural%20lighting%2C%20contemporary%20office%20interior%20with%20warm%20wood%20accents%2C%20clean%20minimalist%20aesthetic%2C%20business%20consultation%20space%2C%20very%20soft%20and%20welcoming%20atmosphere%2C%20light%20blue%20and%20white%20color%20scheme%2C%20curved%20furniture%2C%20gentle%20shadows%2C%20plants%20and%20natural%20elements&width=500&height=400&seq=about-ultra-soft&orientation=landscape"
                    alt="Our Modern Office"
                    className="w-full h-96 object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
            
            <div className={`order-1 lg:order-2 space-y-10 transition-all duration-800 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-[#E5D4B6]/20 border border-[#E5D4B6]/40 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  About Moracle
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Trusted <br/>
                  <span className="text-blue-600 relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Financial Partner
                    <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30"></div>
                  </span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Moracle is a forward-thinking accounting firm committed to helping businesses and individuals achieve their financial goals. Our experienced team combines traditional expertise with modern innovation to deliver exceptional results.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in building lasting relationships through personalized service, cutting-edge technology, and unwavering commitment to your success. Every client relationship is built on trust, transparency, and mutual respect.
                </p>
              </div>
              
              <div className="flex items-center space-x-12">
                {[
                  { number: '15+', label: 'Years Experience' },
                  { number: '500+', label: 'Happy Clients' },
                  { number: '99%', label: 'Satisfaction Rate' }
                ].map((stat, index) => (
                  <div key={index} className="text-center hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-3xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 whitespace-nowrap cursor-pointer">
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50/50 to-blue-50/30" id="services" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-800 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-[#E5D4B6]/20 border border-[#E5D4B6]/40 text-blue-700 rounded-full text-sm font-medium shadow-sm mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Our Services
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Comprehensive <span className="text-blue-600 relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Solutions
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From digital transformation to traditional accounting, we offer a full spectrum of services designed to meet your unique business needs with precision and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: "ri-calculator-line",
                title: "Digital Transformation",
                description: "Modernize your financial processes with cutting-edge technology solutions that streamline operations and boost efficiency while maintaining accuracy.",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                icon: "ri-briefcase-line",
                title: "Accounting Services",
                description: "Comprehensive accounting solutions including bookkeeping, financial statements, and tax preparation with precision and personalized attention.",
                gradient: "from-slate-400 to-slate-600"
              },
              {
                icon: "ri-shield-check-line",
                title: "Audit & Assurance",
                description: "Independent audit services ensuring accuracy, compliance, and transparency in your financial reporting processes with thorough analysis.",
                gradient: "from-emerald-400 to-emerald-600"
              },
              {
                icon: "ri-presentation-line",
                title: "Financial Reporting",
                description: "Detailed analysis and reporting to help you make informed decisions and track your business performance with clear insights.",
                gradient: "from-amber-400 to-amber-600"
              },
              {
                icon: "ri-building-line",
                title: "Company Secretarial",
                description: "Professional secretarial services including compliance management, governance support, and regulatory filing assistance.",
                gradient: "from-rose-400 to-rose-600"
              },
              {
                icon: "ri-user-star-line",
                title: "Business Consulting",
                description: "Strategic guidance to optimize operations, improve profitability, and achieve sustainable growth objectives tailored to your needs.",
                gradient: "from-violet-400 to-violet-600"
              }
            ].map((service, index) => (
              <div key={index} className={`group bg-white/90 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-gray-100/50 cursor-pointer ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors cursor-pointer">
                  Learn more
                  <div className="w-6 h-6 ml-3 flex items-center justify-center">
                    <i className="ri-arrow-right-line text-sm group-hover:translate-x-2 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white" id="why-choose" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className={`space-y-10 transition-all duration-800 ${isVisible['why-choose'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-[#E5D4B6]/20 border border-[#E5D4B6]/40 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Why Choose Moracle
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Excellence in <br/>
                  <span className="text-blue-600 relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Every Detail
                    <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30"></div>
                  </span>
                </h2>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: "ri-award-line",
                    title: "Proven Expertise",
                    description: "Years of experience delivering exceptional results for businesses of all sizes with deep industry knowledge and insights."
                  },
                  {
                    icon: "ri-shield-check-line",
                    title: "Trusted Partnership",
                    description: "Building long-term relationships based on trust, transparency, and mutual success with personalized attention to your goals."
                  },
                  {
                    icon: "ri-lightbulb-line",
                    title: "Innovative Solutions",
                    description: "Combining traditional accounting wisdom with modern technology and fresh perspectives to deliver superior results."
                  },
                  {
                    icon: "ri-customer-service-line",
                    title: "Personal Service",
                    description: "Dedicated support tailored to your unique needs and business objectives with responsive, caring professionals."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 bg-[#E5D4B6]/30 hover:bg-[#E5D4B6]/50 rounded-3xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 cursor-pointer">
                      <i className={`${feature.icon} text-2xl text-blue-600 group-hover:text-blue-700 transition-colors duration-300`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`relative transition-all duration-800 ${isVisible['why-choose'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}>
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-100/40 to-slate-100/40 rounded-[3rem] blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20diverse%20team%20meeting%20in%20modern%20office%20with%20curved%20glass%20walls%2C%20comfortable%20seating%20with%20rounded%20edges%2C%20warm%20natural%20lighting%2C%20contemporary%20workspace%20design%20with%20soft%20materials%2C%20laptops%20and%20documents%2C%20friendly%20approachable%20atmosphere%2C%20light%20blue%20and%20white%20color%20scheme%2C%20curved%20furniture%2C%20plants%2C%20very%20soft%20and%20welcoming%20professional%20environment&width=600&height=500&seq=team-ultra-soft&orientation=landscape"
                  alt="Our Professional Team"
                  className="w-full h-96 object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50/50 to-blue-50/30" id="news" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-800 ${isVisible.news ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-[#E5D4B6]/20 border border-[#E5D4B6]/40 text-blue-700 rounded-full text-sm font-medium shadow-sm mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Latest Updates
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Industry <span className="text-blue-600 relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Insights
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay informed with our latest perspectives on accounting trends, regulatory changes, and business strategies that matter to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                date: "December 15, 2024",
                title: "Digital Transformation in Accounting: A Complete Guide for Modern Businesses",
                excerpt: "Discover how technology is reshaping the accounting landscape and what it means for your business growth and efficiency.",
                readTime: "5 min read",
                category: "Technology"
              },
              {
                date: "December 10, 2024",
                title: "Tax Planning Strategies for 2025: What Every Business Owner Should Know",
                excerpt: "Essential tax planning insights to help you maximize savings and ensure compliance with the latest regulations.",
                readTime: "4 min read",
                category: "Tax Planning"
              },
              {
                date: "December 5, 2024",
                title: "The Future of Financial Reporting: Trends and Best Practices",
                excerpt: "Explore emerging trends in financial reporting and how they impact your business decisions and strategic planning.",
                readTime: "6 min read",
                category: "Reporting"
              }
            ].map((article, index) => (
              <article key={index} className={`group bg-white/90 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer border border-gray-100/50 ${isVisible.news ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=Professional%20business%20article%20illustration%20showing%20modern%20accounting%20and%20finance%20concepts%2C%20clean%20minimalist%20design%20with%20soft%20curves%2C%20gentle%20lighting%2C%20contemporary%20office%20environment%20with%20rounded%20elements%2C%20financial%20charts%20and%20data%20visualization%2C%20light%20blue%20and%20white%20color%20scheme%2C%20very%20soft%20and%20approachable%20aesthetic%2C%20curved%20shapes%2C%20subtle%20gradients&width=400&height=250&seq=news-ultra-soft-${index}&orientation=landscape`}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg group-hover:scale-105 transition-all duration-300">
                    {article.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-4">
                    <span className="font-medium">{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Read more
                    <div className="w-6 h-6 ml-3 flex items-center justify-center">
                      <i className="ri-arrow-right-line text-sm group-hover:translate-x-2 transition-transform duration-300"></i>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className={`text-center mt-16 transition-all duration-800 ${isVisible.news ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`} style={{ transitionDelay: '0.4s' }}>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-3xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 whitespace-nowrap cursor-pointer">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden" id="cta" data-animate>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-400/8 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-12 transition-all duration-800 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`}>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Transform <br/>
                Your <span className="text-blue-300 relative bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 bg-clip-text text-transparent">
                  Financial Future?
                  <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full opacity-50"></div>
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Join hundreds of satisfied clients who trust Moracle for their accounting and financial needs. Let's start your journey to financial success with personalized solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-[#E5D4B6] to-[#D4C4A6] hover:from-[#D4C4A6] hover:to-[#C4B496] text-gray-800 px-10 py-5 rounded-3xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 whitespace-nowrap cursor-pointer">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-3xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 whitespace-nowrap cursor-pointer hover:-translate-y-1 hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
          
          <div className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-800 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`} style={{ transitionDelay: '0.3s' }}>
            {[
              { number: '99%', label: 'Client Satisfaction', subtitle: 'Based on client feedback' },
              { number: '15+', label: 'Years Experience', subtitle: 'In professional accounting' },
              { number: '500+', label: 'Happy Clients', subtitle: 'Businesses we\'ve helped' }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-6xl font-bold mb-4">{stat.number}</div>
                <div className="text-blue-200 text-lg font-medium">{stat.label}</div>
                <div className="text-sm text-blue-300 mt-2">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-24" id="footer" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-800 ${isVisible.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`}>
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-8 hover:scale-105 transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Pacifico, serif' }}>
                Moracle
              </h3>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                Your trusted partner in financial success. We provide comprehensive accounting solutions with a personal touch, helping businesses thrive in today's competitive landscape.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: 'ri-facebook-line' },
                  { icon: 'ri-twitter-line' },
                  { icon: 'ri-linkedin-line' },
                  { icon: 'ri-youtube-line' }
                ].map((social, index) => (
                  <div key={index} className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E5D4B6] hover:text-gray-900 transition-all duration-300 cursor-pointer hover:scale-110">
                    <i className={`${social.icon} text-xl`}></i>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-8">Services</h4>
              <div className="space-y-4">
                {['Accounting', 'Tax Planning', 'Audit & Assurance', 'Business Consulting', 'Company Secretarial'].map((service, index) => (
                  <div key={index} className="text-gray-300 hover:text-white cursor-pointer transition-all duration-300 hover:translate-x-1">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-8">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-4 hover:text-white transition-colors duration-300 cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-map-pin-line text-lg"></i>
                  </div>
                  <div>
                    <p>3rd Floor, Castle House</p>
                    <p>1-3 Castlewood, London</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 hover:text-white transition-colors duration-300 cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-mail-line text-lg"></i>
                  </div>
                  <p>info@moracle.co.uk</p>
                </div>
                <div className="flex items-center space-x-4 hover:text-white transition-colors duration-300 cursor-pointer">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-phone-line text-lg"></i>
                  </div>
                  <p>+44 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`border-t border-gray-800 mt-20 pt-10 transition-all duration-800 ${isVisible.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-gray-400">
                <p className="text-lg">&copy; 2024 Moracle Limited. All rights reserved.</p>
                <p className="text-sm mt-2">Company No: 12345678 | VAT Reg: 123456789</p>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Privacy Policy</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Terms of Service</div>
                <div className="bg-white rounded-2xl p-4 w-20 h-16 flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <span className="text-red-600 font-bold">ACCA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}