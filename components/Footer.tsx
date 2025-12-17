
import React from 'react';
import NewsletterSignup from './NewsletterSignup';

interface FooterProps {
  onGoToTracking: () => void;
  onGoToContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onGoToTracking, onGoToContact }) => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Marketing</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Analytics</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Commerce</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Insights</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
                  <li><button onClick={onGoToTracking} className="text-base text-gray-300 hover:text-white">Track Order</button></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Guides</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">API Status</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                  <li><button onClick={onGoToContact} className="text-base text-gray-300 hover:text-white">Contact Us</button></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Jobs</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Press</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Claim</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <NewsletterSignup />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* Social Icons would go here */}
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} VogueVerse, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
