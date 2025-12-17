
import React from 'react';
import ContactForm from '../components/ContactForm';
import StoreLocator from '../components/StoreLocator';
import ContactCard from '../components/ContactCard';
import EnvelopeIcon from '../components/icons/EnvelopeIcon';
import PhoneIcon from '../components/icons/PhoneIcon';

const ContactPage: React.FC = () => {
  const contactCards = [
    {
      title: 'Customer Support',
      description: 'Have a question about your order, a return, or a product? Our team is here to help.',
      imageUrl: 'https://picsum.photos/800/600?random=51',
      email: 'support@vogueverse.com',
      phone: '1-800-555-0100',
    },
    {
      title: 'Media Inquiries',
      description: 'For press, collaborations, and all things media, please reach out to our communications team.',
      imageUrl: 'https://picsum.photos/800/600?random=52',
      email: 'media@vogueverse.com',
      phone: '1-800-555-0101',
    },
    {
      title: 'Wholesale',
      description: 'Interested in carrying VogueVerse products in your store? Contact our sales team.',
      imageUrl: 'https://picsum.photos/800/600?random=53',
      email: 'wholesale@vogueverse.com',
      phone: '1-800-555-0102',
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, here's how you can reach us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {contactCards.map(card => (
                <ContactCard key={card.title} {...card} />
            ))}
          </div>
          <div>
            <ContactForm />
          </div>
        </div>

      </div>
        <StoreLocator />
    </div>
  );
};

export default ContactPage;
