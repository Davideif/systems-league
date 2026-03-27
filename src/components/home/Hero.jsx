import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-surface py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        
        <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight text-text-primary">
          Welcome to your productivity community
        </h1>

        <h2 className="text-xl md:text-2xl text-text-muted max-w-2xl">
          Build your system, share your plan, and connect with others to achieve your goals together.
        </h2>

        <Link href="#" className="bg-brand-500 text-text-muted px-8 py-3 rounded-lg text-lg font-medium hover:bg-brand-600 transition-colors">
          Join Us today
        </Link>

      </div>
    </section>
  );
};
export default Hero;