
import React, { useState, useEffect } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const newErrors: Partial<typeof formData> = {};
      if (!formData.name) newErrors.name = 'Name is required.';
      if (!formData.email) {
        newErrors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid.';
      }
      if (!formData.subject) newErrors.subject = 'Please select a subject.';
      if (!formData.message) newErrors.message = 'Message is required.';
      
      setErrors(newErrors);
      setIsFormValid(Object.keys(newErrors).length === 0);
    };
    validateForm();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
        console.log('Form Submitted', formData);
        setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
      return (
          <div className="p-8 bg-green-50 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-800">Thank you!</h3>
              <p className="mt-2 text-green-700">Your message has been sent. We'll get back to you as soon as possible.</p>
          </div>
      )
  }

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-inner">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'}`}/>
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'}`}/>
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">Order Number <span className="text-gray-500">(Optional)</span></label>
          <input type="text" name="orderNumber" id="orderNumber" value={formData.orderNumber} onChange={handleChange} placeholder="e.g., VV12345" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'}`}>
            <option value="">Please select</option>
            <option>Order Inquiry</option>
            <option>Return/Exchange</option>
            <option>Product Question</option>
            <option>General Feedback</option>
          </select>
          {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'}`}></textarea>
          {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
        </div>
        <div>
          <button type="submit" disabled={!isFormValid} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-transform duration-200 hover:scale-105 active:scale-95">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;