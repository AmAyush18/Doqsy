"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  Star,
  Quote,
  Heart,
  Shield,
  CheckCircle,
  Users,
  Sparkles,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const TestimonialsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Working Mother",
      initials: "SJ",
      quote: "This platform has been a lifesaver! I can consult with doctors during my lunch break without taking time off work. The video quality is excellent and doctors are very professional.",
      rating: 5,
      avatar: "bg-emerald-500",
      specialty: "General Consultation"
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      initials: "MC",
      quote: "As a healthcare provider, I'm impressed by the platform's security and ease of use. It allows me to reach more patients and provide quality care remotely.",
      rating: 5,
      avatar: "bg-blue-500",
      specialty: "Medical Professional"
    },
    {
      name: "Emma Rodriguez",
      role: "Senior Citizen",
      initials: "ER",
      quote: "At 68, I was hesitant about online consultations. But this platform is so user-friendly! I can easily connect with my doctor from home.",
      rating: 5,
      avatar: "bg-purple-500",
      specialty: "Elderly Care"
    },
    {
      name: "James Wilson",
      role: "Chronic Patient",
      initials: "JW",
      quote: "Managing my diabetes has never been easier. Regular check-ins with my doctor through video calls help me stay on track with my treatment.",
      rating: 5,
      avatar: "bg-orange-500",
      specialty: "Chronic Care"
    },
    {
      name: "Lisa Thompson",
      role: "New Parent",
      initials: "LT",
      quote: "Having a newborn during the pandemic was scary. This platform gave me peace of mind with instant access to pediatric consultations.",
      rating: 5,
      avatar: "bg-pink-500",
      specialty: "Pediatric Care"
    },
    {
      name: "Robert Davis",
      role: "Business Executive",
      initials: "RD",
      quote: "The convenience is unmatched. I can get medical advice without disrupting my busy schedule. The appointment booking system is brilliant!",
      rating: 5,
      avatar: "bg-indigo-500",
      specialty: "Executive Health"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-testimonial]');
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-6 py-3 text-emerald-300 text-sm font-medium">
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>Success Stories</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            What Our <span className="text-emerald-400">Community</span> Says
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Real stories from patients and healthcare providers who trust our platform 
            for their medical needs every day.
          </p>

          {/* Trust Stats */}
          <div className="flex justify-center gap-8 mt-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">4.9/5</div>
              <div className="text-slate-400 flex items-center gap-1">
                {renderStars(5)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">50K+</div>
              <div className="text-slate-400">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">98%</div>
              <div className="text-slate-400">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-slate-900/60 backdrop-blur-sm border border-emerald-400/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-10 h-10 text-emerald-400/20" />
            
            <div className="relative z-10">
  <div className="text-center space-y-6 max-w-3xl mx-auto">
    <div className="flex justify-center mb-4">
      {renderStars(testimonials[activeTestimonial].rating)}
    </div>
    
    <blockquote className="text-xl md:text-2xl text-white font-medium text-center leading-relaxed">
      "{testimonials[activeTestimonial].quote}"
    </blockquote>
    
    <div className="flex items-center justify-center gap-4">
      <div
        className={`w-16 h-16 rounded-full ${testimonials[activeTestimonial].avatar} flex items-center justify-center text-white font-bold text-lg`}
      >
        {testimonials[activeTestimonial].initials}
      </div>
      <div className="text-left">
        <div className="font-semibold text-white text-lg">
          {testimonials[activeTestimonial].name}
        </div>
        <div className="text-slate-400">
          {testimonials[activeTestimonial].role}
        </div>
        <div className="text-emerald-400 text-sm">
          {testimonials[activeTestimonial].specialty}
        </div>
      </div>
    </div>
  </div>
  
  {/* Navigation */}
  <div className="flex items-center justify-center gap-4 mt-8">
    <button 
      onClick={prevTestimonial}
      className="p-3 bg-slate-800 border border-slate-600 rounded-full hover:bg-slate-700 transition-colors group"
    >
      <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-white" />
    </button>
    
    {/* Dots */}
    <div className="flex gap-2">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveTestimonial(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === activeTestimonial 
              ? 'bg-emerald-400 w-8' 
              : 'bg-slate-600 hover:bg-slate-500'
          }`}
        />
      ))}
    </div>
    
    <button 
      onClick={nextTestimonial}
      className="p-3 bg-slate-800 border border-slate-600 rounded-full hover:bg-slate-700 transition-colors group"
    >
      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
    </button>
  </div>
</div>

          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => {
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-testimonial
                className={`group relative transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-full bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-bold`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Specialty Badge */}
                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      {testimonial.specialty}
                    </span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-emerald-500/5 blur-xl -z-10"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-lg">Join thousands of satisfied patients</span>
            </div>
            
            <button className="bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-emerald-700 group">
              <span className="flex items-center gap-2">
                Start Your Health Journey
                <Heart className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default TestimonialsSection;