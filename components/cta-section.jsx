"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Sparkles,
  Clock,
  Star
} from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const section = document.getElementById('cta-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const features = [
    { icon: Shield, text: "HIPAA Compliant", color: "text-green-400" },
    { icon: Clock, text: "24/7 Available", color: "text-blue-400" },
    { icon: Users, text: "50K+ Patients", color: "text-purple-400" },
    { icon: Star, text: "4.9/5 Rating", color: "text-yellow-400" }
  ];

  const floatingElements = [
    { icon: Heart, color: 'text-pink-400', delay: '0s', x: '15%', y: '20%', size: 'w-6 h-6' },
    { icon: Shield, color: 'text-green-400', delay: '1s', x: '80%', y: '25%', size: 'w-5 h-5' },
    { icon: Zap, color: 'text-yellow-400', delay: '2s', x: '20%', y: '75%', size: 'w-4 h-4' },
    { icon: Sparkles, color: 'text-emerald-400', delay: '1.5s', x: '85%', y: '70%', size: 'w-5 h-5' },
  ];

  return (
    <section ref={sectionRef} className="px-20 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          id="cta-section"
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main CTA Card */}
          <div 
            className="relative bg-slate-900/80 backdrop-blur-sm border border-emerald-400/20 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden group hover:border-emerald-400/40 transition-all duration-500"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                rgba(15, 23, 42, 0.8)
              `
            }}
          >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-emerald-500/10 transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 group-hover:bg-blue-500/10 transition-colors duration-700"></div>
            </div>

            {/* Floating Healthcare Icons */}
            {floatingElements.map((element, index) => {
              const IconComponent = element.icon;
              return (
                <div
                  key={index}
                  className={`absolute ${element.color} opacity-20 pointer-events-none ${element.size}`}
                  style={{
                    left: element.x,
                    top: element.y,
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: element.delay,
                  }}
                >
                  <IconComponent />
                </div>
              );
            })}

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-6 py-3 text-emerald-300 text-sm font-medium">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Transform Your Healthcare</span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Ready to control your 
                    <span className="text-emerald-400 block">healthcare journey?</span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    Join thousands of users who have simplified their healthcare experience. 
                    Get started today and discover healthcare the way it should be - 
                    <span className="text-emerald-400 font-semibold"> accessible, reliable, and caring</span>.
                  </p>
                </div>

                {/* Trust Features */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 group/feature hover:scale-105 transition-transform">
                        <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700/50 group-hover/feature:border-emerald-400/30 transition-colors">
                          <IconComponent className={`w-4 h-4 ${feature.color}`} />
                        </div>
                        <span className="text-slate-300 text-sm font-medium group-hover/feature:text-white transition-colors">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-emerald-700">
                    <span className="flex items-center justify-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button className="group backdrop-blur-sm bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/10">
                    <span className="flex items-center justify-center gap-2">
                      View Pricing
                      <Zap className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </span>
                  </button>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-6 pt-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>No Setup Fee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Cancel Anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                {/* Central Health Icon */}
                <div className="relative">
                  <div className="w-32 h-32 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-400/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-700">
                    <Heart className="w-16 h-16 text-emerald-400 animate-pulse" style={{ animationDuration: '2s' }} />
                  </div>
                  
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                        <Shield className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                        <Users className="w-4 h-4 text-purple-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                    <div className="absolute top-1/2 -left-8 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="absolute top-8 right-8 bg-slate-900/60 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">50K+</div>
                    <div className="text-xs text-slate-400">Happy Patients</div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 bg-slate-900/60 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">4.9★</div>
                    <div className="text-xs text-slate-400">User Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Timeline */}
            <div className="relative z-10 mt-12 pt-8 border-t border-slate-700/50">
              <div className="text-center text-slate-400 text-sm mb-4">
                <span className="bg-slate-800/50 px-4 py-2 rounded-full">Get started in under 2 minutes</span>
              </div>
              
              <div className="flex justify-center items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">1</div>
                  <span>Sign Up</span>
                </div>
                <div className="w-8 h-px bg-slate-600"></div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">2</div>
                  <span>Choose Plan</span>
                </div>
                <div className="w-8 h-px bg-slate-600"></div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">3</div>
                  <span>Start Consulting</span>
                </div>
              </div>
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

export default CTASection;