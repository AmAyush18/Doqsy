"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  Stethoscope,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Clock,
  Users,
  CreditCard,
  ArrowRight,
  Sparkles,
  Heart
} from 'lucide-react';

const PricingSection = () => {
  const [visibleElements, setVisibleElements] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(1); // Middle plan selected by default
  const sectionRef = useRef(null);

  // Updated pricing plans with freemium model (2 credits = 1 consultation)
  const pricingPlans = [
    {
      name: "Basic Care",
      price: "Free",
      period: "",
      credits: "2 Credits",
      description: "Get started with 1 free consultation",
      features: [
        "2 credits (1 consultation)",
        "Basic health tracking",
        "Email support",
        "Prescription management"
      ],
      color: "blue",
      popular: false
    },
    {
      name: "Health Plus",
      price: "$59",
      period: "/month",
      credits: "10 Credits",
      description: "Best value for regular healthcare",
      features: [
        "10 credits (5 consultations)",
        "Priority booking",
        "24/7 chat support",
        "Health analytics",
        "Family member access",
        "Specialist consultations"
      ],
      color: "emerald",
      popular: true
    },
    {
      name: "Premium Care",
      price: "$99",
      period: "/month",
      credits: "20 Credits",
      description: "Comprehensive healthcare solution",
      features: [
        "20 credits (10 consultations)",
        "Dedicated health advisor",
        "Instant specialist access",
        "Advanced health insights",
        "Unlimited family members",
        "Home visit coordination",
        "Lab test coordination"
      ],
      color: "purple",
      popular: false
    }
  ];

  const creditBenefits = [
    "Each consultation <strong>requires 2 credits</strong> - giving you full access to our healthcare professionals",
    "<strong>Credits never expire</strong> - use them at your own pace throughout the year",
    "<strong>Flexible usage</strong> - use credits for video calls, chat consultations, or phone calls",
    "<strong>Family sharing</strong> - share your credits with family members on higher plans",
    "<strong>Specialist access</strong> - same 2-credit rate for general practitioners or specialists",
    "<strong>Emergency support</strong> - priority access during urgent medical situations"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations for different elements
            setTimeout(() => setVisibleElements(prev => [...prev, 'header']), 100);
            setTimeout(() => setVisibleElements(prev => [...prev, 'plans']), 300);
            setTimeout(() => setVisibleElements(prev => [...prev, 'benefits']), 600);
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

  const getColorClasses = (color, isSelected = false) => {
    const colors = {
      blue: {
        bg: isSelected ? 'bg-blue-500/20' : 'bg-blue-500/10',
        border: 'border-blue-400/30',
        text: 'text-blue-400',
        shadow: 'shadow-blue-500/20',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      emerald: {
        bg: isSelected ? 'bg-emerald-500/20' : 'bg-emerald-500/10',
        border: 'border-emerald-400/30',
        text: 'text-emerald-400',
        shadow: 'shadow-emerald-500/20',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      },
      purple: {
        bg: isSelected ? 'bg-purple-500/20' : 'bg-purple-500/10',
        border: 'border-purple-400/30',
        text: 'text-purple-400',
        shadow: 'shadow-purple-500/20',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    };
    return colors[color];
  };

  const getConsultationCount = (credits) => {
    const creditNumber = parseInt(credits.replace(' Credits', ''));
    return creditNumber / 2;
  };

  const getPricePerConsultation = (price, credits) => {
    if (price === "Free") return "Free";
    const priceNumber = parseInt(price.replace('$', ''));
    const consultations = getConsultationCount(credits);
    return `$${(priceNumber / consultations).toFixed(0)}`;
  };

  return (
    <section ref={sectionRef} id="pricing" className="px-20 py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 space-y-6 transition-all duration-1000 ${
          visibleElements.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-6 py-3 text-emerald-300 text-sm font-medium">
            <CreditCard className="w-4 h-4" />
            <span>Affordable Healthcare</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Choose Your <span className="text-emerald-400">Health Plan</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Flexible consultation packages designed to fit your lifestyle and healthcare needs. 
            Start with a free consultation, then upgrade for unlimited access.
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Heart className="w-4 h-4 text-pink-400" />
              <span>Care Guarantee</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-16 transition-all duration-500 delay-300 ${
          visibleElements.includes('plans') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {pricingPlans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, selectedPlan === index);
            const isPopular = plan.popular;
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isPopular ? 'scale-105 md:scale-110' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedPlan(index)}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`
                  relative h-full bg-slate-900/60 backdrop-blur-sm border rounded-3xl p-8
                  transition-all duration-300 ${colorClasses.border}
                  ${isPopular ? colorClasses.shadow : 'hover:' + colorClasses.shadow}
                  ${selectedPlan === index ? 'ring-2 ring-' + plan.color + '-400/30' : ''}
                  hover:shadow-2xl
                `}>
                  
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center gap-2 ${colorClasses.bg} px-4 py-2 rounded-full mb-4`}>
                      <Zap className={`w-4 h-4 ${colorClasses.text}`} />
                      <span className={`font-medium ${colorClasses.text}`}>{plan.credits}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-4xl md:text-5xl font-bold ${colorClasses.text}`}>
                        {plan.price}
                      </span>
                      <span className="text-slate-400 text-lg">{plan.period}</span>
                    </div>
                    <div className="text-slate-500 text-sm mt-2">
                      {getPricePerConsultation(plan.price, plan.credits)} per consultation
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {/* <button className={`
                    w-full ${colorClasses.button} text-white font-semibold py-4 rounded-xl
                    transition-all duration-300 hover:scale-105 hover:-translate-y-1
                    shadow-lg hover:shadow-xl group-hover:shadow-2xl
                    flex items-center justify-center gap-2
                  `}>
                    <span>{plan.price === "Free" ? "Start Free" : "Choose Plan"}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button> */}

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none
                    ${colorClasses.bg} blur-xl -z-10
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credit System Explanation */}
        <div className={`transition-all duration-1000 delay-600 ${
          visibleElements.includes('benefits') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-slate-900/60 backdrop-blur-sm border border-emerald-400/20 rounded-3xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 text-emerald-400 text-xl font-semibold mb-4">
                <Stethoscope className="w-6 h-6" />
                <span>How Our Credit System Works</span>
              </div>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Our flexible credit system gives you complete control over your healthcare spending. 
                Every consultation costs 2 credits, giving you predictable pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creditBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors group"
                >
                  <div className="bg-emerald-500/10 p-2 rounded-full mt-1">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p 
                      className="text-slate-300 leading-relaxed group-hover:text-white transition-colors"
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-10 pt-8 border-t border-slate-700/50">
              <div className="flex items-center justify-center gap-2 text-slate-400 mb-4">
                <Users className="w-5 h-5 text-blue-400" />
                <span>Join 50,000+ satisfied patients</span>
              </div>
              <button className="bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-emerald-700 group">
                <span className="flex items-center gap-2">
                  Start Your Health Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default PricingSection;