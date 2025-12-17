
import React, { useState, useEffect } from 'react';

interface FlashSaleBannerProps {
  onGoToOffers: () => void;
}

const FlashSaleBanner: React.FC<FlashSaleBannerProps> = ({ onGoToOffers }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
      if (value === undefined) return null;
      return (
        <div key={interval} className="text-center">
            <div className="text-4xl md:text-6xl font-extrabold text-white bg-white/20 rounded-lg p-3">
                {String(value as number).padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base font-medium uppercase tracking-wider mt-2">{interval}</div>
        </div>
      )
  });

  return (
    <section className="bg-gray-900 text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-indigo-400">Flash Sale</span> Frenzy!
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Unbeatable deals on your favorite styles. Don't wait, these prices won't last long!
          </p>
          <button onClick={onGoToOffers} className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-200 transform hover:scale-105 active:scale-95">
            View Offers
          </button>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleBanner;