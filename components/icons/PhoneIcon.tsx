
import React from 'react';

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-.992-.58-1.355l-3.114-3.114a1.125 1.125 0 0 0-1.591 0l-1.12 1.12c-.427.427-1.135.283-1.498-.255a13.46 13.46 0 0 1-6.42-6.42c-.538-.363-.682-1.07-.255-1.498l1.12-1.12a1.125 1.125 0 0 0 0-1.591L9.106 3.08c-.363-.368-.84-.58-1.355-.58H6.375A2.25 2.25 0 0 0 4.125 4.5v2.25Z" />
  </svg>
);

export default PhoneIcon;
