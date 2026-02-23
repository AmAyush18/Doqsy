'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Shield, Zap, Sparkles, Star, Users } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const section = document.getElementById('hero-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const floatingElements = [
    { icon: Heart, color: 'text-pink-400', delay: '0s', x: '10%', y: '20%' },
    { icon: Shield, color: 'text-blue-400', delay: '0.5s', x: '85%', y: '15%' },
    { icon: Zap, color: 'text-yellow-400', delay: '1s', x: '15%', y: '70%' },
    { icon: Sparkles, color: 'text-purple-400', delay: '1.5s', x: '80%', y: '75%' },
    { icon: Star, color: 'text-emerald-400', delay: '2s', x: '50%', y: '10%' },
    { icon: Users, color: 'text-indigo-400', delay: '2.5s', x: '90%', y: '50%' },
  ];

  return (
    <section 
      id="hero-section"
      className="px-20 relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Shapes */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div> */}

      {/* Floating Elements */}
      {/* {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div
            key={index}
            className={`absolute ${element.color} opacity-20 pointer-events-none`}
            style={{
              left: element.x,
              top: element.y,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: element.delay,
            }}
          >
            <IconComponent size={24} />
          </div>
        );
      })} */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge with Animation */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 text-emerald-300 text-sm font-medium shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-105 group">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Healthcare reimagined for you</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block mb-2">Your health,</span>
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                our priority
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-slate-300 mt-4">
                Connect • Care • Thrive
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed">
              A smarter way to manage your health. Book appointments in seconds, consult trusted doctors online, 
              and stay in control of your care with our 
              <span className="text-emerald-400 font-semibold"> simple, reliable healthcare platform</span>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-emerald-400">50K+</div>
                <div className="text-sm text-slate-400">Happy Patients</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-blue-400">1K+</div>
                <div className="text-sm text-slate-400">Expert Doctors</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-slate-400">Available</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/10">
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>Find Doctors</span>
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 pt-4 text-sm text-slate-400">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Image Section with Modern Effects */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden group">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl group-hover:scale-110 transition-transform duration-700"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-emerald-500/10 transition-all duration-500">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 text-white/80">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
                      <Heart className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold">Your Health Partner</h3>
                    <p className="text-sm opacity-75 max-w-xs mx-auto">Professional healthcare at your fingertips</p>
                  </div>
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    Online Now
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg hover:scale-105 transition-transform">
                  <div className="text-white text-sm">
                    <div className="font-semibold">Next Available</div>
                    <div className="text-emerald-400">In 5 minutes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-4 h-4 bg-emerald-400 rounded-full absolute top-0 left-1/4 animate-ping opacity-30"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full absolute bottom-1/4 right-0 animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full absolute top-3/4 left-0 animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;