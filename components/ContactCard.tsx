
import React from 'react';
import EnvelopeIcon from './icons/EnvelopeIcon';
import PhoneIcon from './icons/PhoneIcon';

interface ContactCardProps {
    title: string;
    description: string;
    imageUrl: string;
    email: string;
    phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, description, imageUrl, email, phone }) => {
    return (
        <div className="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden group">
            <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300" loading="lazy" decoding="async" width="800" height="600" />
            <div className="relative p-8">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-gray-300">{description}</p>
                <div className="mt-6 space-y-4">
                    <a href={`mailto:${email}`} className="flex items-center text-indigo-300 hover:text-white transition-colors duration-200">
                        <EnvelopeIcon className="w-5 h-5 mr-3" />
                        <span>{email}</span>
                    </a>
                    <a href={`tel:${phone}`} className="flex items-center text-indigo-300 hover:text-white transition-colors duration-200">
                        <PhoneIcon className="w-5 h-5 mr-3" />
                        <span>{phone}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
