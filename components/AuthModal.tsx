
import React, { useState, useEffect } from 'react';
import XIcon from './icons/XIcon';
import SpinnerIcon from './icons/SpinnerIcon';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = 'login' | 'signup' | 'forgot-password';

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isResetEmailSent, setIsResetEmailSent] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Reset form when modal opens or mode changes
    if (isOpen) {
      setName('');
      setEmail('');
      setPassword('');
      setError('');
      setIsLoading(false);
      setIsResetEmailSent(false);
    }
  }, [isOpen]);
  
  useEffect(() => {
    // Reset form state when mode changes
    setName('');
    setEmail('');
    setPassword('');
    setError('');
    setIsLoading(false);
    setIsResetEmailSent(false);
  }, [mode]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(`Simulating ${mode}...`, { name, email, password });
      onClose(); // Close modal on success
    }, 1500);
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    // Simulate API call
    setTimeout(() => {
        setIsLoading(false);
        setIsResetEmailSent(true);
    }, 1500);
  };

  if (!isOpen) {
    return null;
  }

  const renderContent = () => {
    if (mode === 'forgot-password') {
        if (isResetEmailSent) {
            return (
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">Check your email</h3>
                    <p className="mt-3 text-gray-600">
                        We've sent a password reset link to <span className="font-medium text-gray-800">{email}</span>.
                    </p>
                    <button
                        onClick={() => setMode('login')}
                        className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Back to Login
                    </button>
                </div>
            );
        }
        return (
            <div>
                <h3 className="text-xl font-bold text-gray-900">Reset your password</h3>
                <p className="mt-2 text-sm text-gray-600">Enter your email address and we will send you a link to reset your password.</p>
                <form onSubmit={handleForgotPasswordSubmit} className="mt-6 space-y-6">
                    <div>
                        <label htmlFor="email-forgot" className="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
                        <input
                        type="email"
                        name="email-forgot"
                        id="email-forgot"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 transition-transform duration-200 hover:scale-105 active:scale-95"
                        >
                            {isLoading ? <SpinnerIcon className="h-5 w-5 text-white" /> : 'Send Reset Link'}
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <button onClick={() => setMode('login')} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Back to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
            <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Full Name</label>
                <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
            </div>
            )}
            <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
            <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            </div>
            <div>
            <label htmlFor="password"className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            </div>
            {mode === 'login' && (
                <div className="flex items-center justify-end">
                    <div className="text-sm">
                        <a href="#" onClick={(e) => { e.preventDefault(); setMode('forgot-password'); }} className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
            )}

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div>
            <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
                {isLoading ? (
                <SpinnerIcon className="h-5 w-5 text-white" />
                ) : mode === 'login' ? (
                'Login'
                ) : (
                'Create Account'
                )}
            </button>
            </div>
        </form>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md animate-fade-in-scale-up" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <XIcon className="h-6 w-6" />
        </button>

        <div className="p-8">
            {mode !== 'forgot-password' && (
                 <div className="flex border-b border-gray-200">
                    <button
                    onClick={() => setMode('login')}
                    className={`w-1/2 py-4 text-center font-medium text-lg focus:outline-none ${
                        mode === 'login' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'
                    }`}
                    >
                    Login
                    </button>
                    <button
                    onClick={() => setMode('signup')}
                    className={`w-1/2 py-4 text-center font-medium text-lg focus:outline-none ${
                        mode === 'signup' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'
                    }`}
                    >
                    Sign Up
                    </button>
                </div>
            )}
         
          <div className="mt-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
