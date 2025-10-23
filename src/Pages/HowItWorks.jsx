import React from "react";
import { FaBoxOpen, FaClipboardCheck, FaGlobe } from "react-icons/fa"; // Using Fa icons as placeholders for the style

// Define the steps to reflect your Skill-Finding platform
const steps = [
  {
    icon: <FaBoxOpen className="text-white w-5 h-5" />, // Placeholder icon for "Find a Skill"
    iconBgColor: "bg-green-500", // Green accent from the image
    title: "Find Your Skill",
    description: "Browse our skill listings to find the perfect session for you.",
  },
  {
    icon: <FaClipboardCheck className="text-white w-5 h-5" />, // Placeholder icon for "Sign Up & Connect"
    iconBgColor: "bg-gray-500", // Using a subtle gray for the next step's icon
    title: "Sign Up & Connect",
    description: "Create an account and connect with skill providers easily.",
  },
  {
    icon: <FaGlobe className="text-white w-5 h-5" />, // Placeholder icon for "Book a Session"
    iconBgColor: "bg-gray-500",
    title: "Book a Session",
    description: "Book your desired session and learn from experts.",
  },
  // You can add the fourth step here or simplify to three
  // {
  //   icon: <FaCheckCircle className="text-white w-5 h-5" />,
  //   iconBgColor: "bg-gray-500",
  //   title: "Rate & Review",
  //   description: "Leave a review for the provider and help the community grow."
  // }
];

// Reusable component for a single step
const StepItem = ({ step, isFirst }) => (
  <div className="flex items-start space-x-4">
    {/* Icon Section (Styled like the image) */}
    <div className={`flex-shrink-0 p-2 rounded-full ${step.iconBgColor}`}>
      {step.icon}
    </div>

    {/* Content Section */}
    <div>
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
      {/* Description */}
      <p className="text-gray-600">{step.description}</p>
    </div>
  </div>
);

const HowItWorksVertical = () => {
  return (
    // Outer container with a light background and padding
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
        
        {/* Main steps container */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <StepItem step={step} isFirst={index === 0} />
              
              {/* Optional: Add a separator line to visually connect the steps like the image */}
              {index < steps.length - 1 && (
                <div className="ml-5 border-l-2 border-gray-200 h-8"></div> // Line connecting the steps
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksVertical;