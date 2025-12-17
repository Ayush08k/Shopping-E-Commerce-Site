
import React from 'react';
import CheckIcon from './icons/CheckIcon';

interface ProgressBarProps {
  steps: string[];
  currentStep: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
            {stepIdx < currentStepIndex ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
                  <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  <span className="sr-only">{step}</span>
                </div>
              </>
            ) : stepIdx === currentStepIndex ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white" aria-current="step">
                  <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
                  <span className="sr-only">{step}</span>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                  <span className="sr-only">{step}</span>
                </div>
              </>
            )}
            <span className="absolute top-10 -left-2 w-max text-xs sm:text-sm font-medium text-gray-600 capitalize">{step}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressBar;
