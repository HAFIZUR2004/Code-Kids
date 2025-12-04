import React from "react";
import { FaBoxOpen, FaClipboardCheck, FaGlobe } from "react-icons/fa";

// Steps data with gradient backgrounds
const steps = [
  {
    icon: <FaBoxOpen className="text-white w-5 h-5" />,
    iconBg: "bg-gradient-to-br from-[#456882] to-[#234C6A]",
    title: "Find Your Skill",
    description: "Browse our skill listings to find the perfect session for you.",
  },
  {
    icon: <FaClipboardCheck className="text-white w-5 h-5" />,
    iconBg: "bg-gradient-to-br from-[#234C6A] to-[#1B3C53]",
    title: "Sign Up & Connect",
    description: "Create an account and connect with skill providers easily.",
  },
  {
    icon: <FaGlobe className="text-white w-5 h-5" />,
    iconBg: "bg-gradient-to-br from-[#1B3C53] to-[#456882]",
    title: "Book a Session",
    description: "Book your desired session and learn from experts.",
  },
];

// Single step
const StepItem = ({ step, index }) => (
  <div
    className="flex items-start  space-x-4 animate-slide-up opacity-0 animation-delay"
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    {/* Icon */}
    <div
      className={`flex-shrink-0 p-4 rounded-full shadow-md ${step.iconBg} 
      shadow-[#D2C1B6]/40 border border-[#D2C1B6]/30
      transition-transform duration-300 hover:scale-110`}
    >
      {step.icon}
    </div>

    {/* Content */}
    <div>
      <h3 className="text-xl font-semibold text-[#D2C1B6] mb-1">
        {step.title}
      </h3>
      <p className="text-[#D2C1B6]/80">{step.description}</p>
    </div>
  </div>
);

const HowItWorksVertical = () => {
  return (
    <section className="py-16 -mb-10 bg-[#1B3C53]">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#D2C1B6] mb-14">
          How It Works
        </h2>

        <div className="space-y-10 relative">

          {/* Loop steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative">

              {/* Step */}
              <StepItem step={step} index={index} />

              {/* Animated connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 h-10 border-l-4 border-[#234C6A] 
                rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add required animations */}
      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HowItWorksVertical;
