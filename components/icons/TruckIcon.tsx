
import React from 'react';

const TruckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H15v2.25l-2.25 2.25-2.25-2.25V3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375c-.621 0-1.125-.504-1.125-1.125V11.25c0-.621.504-1.125 1.125-1.125h4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h.008v.008h-.008v-.008Zm0 0h.008v.008h-.008v-.008Zm0 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Zm0 0h.008v.008h-.008v-.008Zm0 0h.008v.008h-.008v-.008Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6.75h1.5a2.25 2.25 0 0 1 2.25 2.25v.323a.75.75 0 0 0 .75.75h.323a2.25 2.25 0 0 1 2.25 2.25v1.5a2.25 2.25 0 0 1-2.25 2.25h-1.5" />
  </svg>
);

// Fallback simpler icon in case the above is too complex
const SimpleTruckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375c-.621 0-1.125-.504-1.125-1.125V11.25c0-.621.504-1.125 1.125-1.125h4.5m3.75 0V9.75c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v4.5m-7.5 0h7.5m-7.5 0-1.125-1.5M13.5 12h.008v.008h-.008V12Zm0 0h.008v.008h-.008V12Zm0 0h.008v.008h-.008V12Zm0 0h.008v.008h-.008V12Zm-3.75 0h.008v.008h-.008V12Zm0 0h.008v.008h-.008V12Zm0 0h.008v.008h-.008V12Zm0 0h.008v.008h-.008V12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h.008v.008h-.008v-.008Zm0 0h.008v.008h-.008v-.008Zm0 0h.008v.008h-.008v-.008ZM12.75 12h.008v.008h-.008V12Z" />
    </svg>
);

export default SimpleTruckIcon;
