"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Video, 
  FileText, 
  Shield, 
  Clock, 
  Users,
  Stethoscope,
  Heart,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const FeatureSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-emerald-400" />,
      title: "Easy Booking",
      description: "Schedule appointments with top doctors in seconds. No waiting, no hassle.",
      color: "emerald",
      delay: "0s"
    },
    {
      icon: <Video className="w-6 h-6 text-blue-400" />,
      title: "Video Consultations",
      description: "Secure, HD video calls with healthcare professionals from anywhere.",
      color: "blue",
      delay: "0.2s"
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: "Digital Records",
      description: "Your health history, prescriptions, and reports all in one place.",
      color: "purple",
      delay: "0.4s"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Secure & Private",
      description: "Bank-level security with HIPAA compliance for your peace of mind.",
      color: "green",
      delay: "0.6s"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: "24/7 Support",
      description: "Round-the-clock medical assistance whenever you need it most.",
      color: "orange",
      delay: "0.8s"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-pink-400" />,
      title: "Expert Doctors",
      description: "Connect with verified specialists and general practitioners instantly.",
      color: "pink",
      delay: "1s"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-card]');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color, isHovered) => {
    const colors = {
      emerald: {
        bg: isHovered ? 'bg-emerald-500/20' : 'bg-emerald-500/10',
        border: 'border-emerald-400/30',
        shadow: 'shadow-emerald-500/20'
      },
      blue: {
        bg: isHovered ? 'bg-blue-500/20' : 'bg-blue-500/10',
        border: 'border-blue-400/30',
        shadow: 'shadow-blue-500/20'
      },
      purple: {
        bg: isHovered ? 'bg-purple-500/20' : 'bg-purple-500/10',
        border: 'border-purple-400/30',
        shadow: 'shadow-purple-500/20'
      },
      green: {
        bg: isHovered ? 'bg-green-500/20' : 'bg-green-500/10',
        border: 'border-green-400/30',
        shadow: 'shadow-green-500/20'
      },
      orange: {
        bg: isHovered ? 'bg-orange-500/20' : 'bg-orange-500/10',
        border: 'border-orange-400/30',
        shadow: 'shadow-orange-500/20'
      },
      pink: {
        bg: isHovered ? 'bg-pink-500/20' : 'bg-pink-500/10',
        border: 'border-pink-400/30',
        shadow: 'shadow-pink-500/20'
      }
    };
    return colors[color];
  };

  return (
    <section ref={sectionRef} className="px-20 py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-4 py-2 text-emerald-300 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It <span className="text-emerald-400">Works</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our platform makes healthcare accessible with just a few clicks. 
            Experience seamless medical care designed around your busy life.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">3</div>
              <div className="text-slate-400">Simple Steps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400"> { "< 5min" }</div>
              <div className="text-slate-400">Average Setup</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-slate-400">Secure</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;
            const colorClasses = getColorClasses(feature.color, isHovered);
            
            return (
              <div
                key={index}
                data-card
                className={`group relative transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: feature.delay }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className={`
                  relative h-full bg-slate-900/60 backdrop-blur-sm border rounded-2xl p-6 
                  transition-all duration-300 hover:scale-105 hover:-translate-y-2
                  ${colorClasses.border} ${isHovered ? colorClasses.shadow : 'shadow-lg'}
                  hover:shadow-2xl cursor-pointer
                `}>
                  
                  {/* Icon Container */}
                  <div className={`
                    ${colorClasses.bg} p-4 rounded-xl w-fit mb-6 
                    transition-all duration-300 group-hover:scale-110
                  `}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 text-sm font-semibold">
                    {index + 1}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none
                    ${colorClasses.bg} blur-xl -z-10
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 flex flex-col items-center justify-center gap-6">
            <div className="inline-flex items-center gap-3 text-slate-300">
                <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
                <span className="text-lg">Ready to experience better healthcare?</span>
            </div>
            
            <button className="bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-emerald-700 group">
                <span className="flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default FeatureSection;