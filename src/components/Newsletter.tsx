import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="container max-w-[800px] flex flex-col items-center">
        <div className="mb-10">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-[1.1]">Join The Elite Club</h2>
          <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-[600px] mx-auto">
            Subscribe to receive first access to new collections, exclusive event invites, and seasonal lookbooks curated just for you.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row w-full max-w-[500px] gap-3">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-indigo-200 px-6 py-4 rounded-full text-base outline-none transition-colors focus:bg-white/20 focus:border-white/40"
            required
          />
          <button type="submit" className="bg-white text-primary font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">Subscribe Now</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
