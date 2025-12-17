
import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email address.');
      setError(true);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      setError(true);
      return;
    }

    setMessage('Thank you for subscribing!');
    setError(false);
    setEmail('');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-white">Subscribe to our newsletter</h3>
      <p className="mt-2 text-base text-gray-400">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <form className="mt-4 sm:flex sm:max-w-md" onSubmit={handleSubmit}>
        <label htmlFor="email-address" className="sr-only">Email address</label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white/10 px-4 py-2 text-base text-white placeholder-gray-400 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Subscribe
          </button>
        </div>
      </form>
      {message && (
        <p className={`mt-2 text-sm ${error ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;