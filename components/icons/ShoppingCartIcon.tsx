
import React from 'react';

const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.093-.828l2.857-9.588a.822.822 0 0 0-.76-1.028H5.214M7.5 14.25 6.108 5.165m0 0a8.25 8.25 0 1 0 0 9.092" />
  </svg>
);

export default ShoppingCartIcon;
