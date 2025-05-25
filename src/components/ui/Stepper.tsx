import { Sparkles } from "lucide-react";
import React from "react";
// ... rest of the code 
interface StepperProps {
  currentStep: string;
  className?: string;
}

const steps = [
  { label: 'Product Analysis', step: 'input' },
  { label: 'AI Insights', step: 'results' },
  { label: 'Find Communities', step: 'communityResults' },
  { label: 'Generate Content', step: 'contentPreview' },
  { label: 'Schedule Launch', step: 'scheduled' },
  { label: 'Track Results', step: 'tracking' }
];

export const Stepper = ({ currentStep, className = "" }: StepperProps) => {
  const getCurrentStepIndex = () => {
    switch (currentStep) {
      case 'input':
      case 'analyzing':
        return 0;
      case 'results':
        return 1;
      case 'finding':
      case 'communityResults':
        return 2;
      case 'generating':
      case 'contentPreview':
        return 3;
      case 'scheduling':
      case 'scheduled':
        return 4;
      case 'tracking':
        return 5;
      default:
        return 0;
    }
  };

  const currentIndex = getCurrentStepIndex();

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {steps.map((item, index) => (
        <div key={item.step} className="flex items-center">
          <div
            className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
              index <= currentIndex
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`ml-1 text-xs font-medium hidden sm:inline ${
              index <= currentIndex
                ? 'text-purple-600'
                : 'text-gray-500'
            }`}
          >
            {item.label}
          </span>
          {index < 5 && (
            <div
              className={`w-4 h-0.5 mx-1 ${
                index < currentIndex
                  ? 'bg-purple-600'
                  : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}; 