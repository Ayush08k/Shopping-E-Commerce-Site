
import React, { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-5 text-left text-gray-700"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <span className="ml-6 h-7 flex items-center">
          <ChevronDownIcon
            className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
          />
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
