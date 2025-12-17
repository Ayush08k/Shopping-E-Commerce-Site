
import React, { useState } from 'react';
import { PROMO_CODES } from '../constants';
import ClipboardIcon from './icons/ClipboardIcon';
import CheckIcon from './icons/CheckIcon';

const PromoBanners: React.FC = () => {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
        <section className="py-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Active Promo Codes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROMO_CODES.map(promo => (
                    <div key={promo.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Expires: {new Date(promo.expiry).toLocaleDateString()}</p>
                            <h3 className="text-xl font-bold text-gray-900 mt-2">{promo.description}</h3>
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex-1 border-2 border-dashed border-gray-300 rounded-md p-3 text-center">
                                <span className="text-2xl font-bold tracking-widest text-indigo-600">{promo.code}</span>
                            </div>
                            <button
                                onClick={() => handleCopy(promo.code)}
                                className={`w-32 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white transition-colors duration-200 ${
                                    copiedCode === promo.code ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
                                }`}
                            >
                                {copiedCode === promo.code ? (
                                    <>
                                        <CheckIcon className="h-5 w-5 mr-2" />
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <ClipboardIcon className="h-5 w-5 mr-2" />
                                        Copy Code
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromoBanners;
