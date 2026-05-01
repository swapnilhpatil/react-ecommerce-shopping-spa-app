import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/50 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 max-w-lg">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
              Join The Elite <br /> Club
            </h2>
            <p className="text-indigo-400 font-medium text-lg leading-relaxed">
              Subscribe to receive first access to new collections, exclusive event invites, and seasonal lookbooks curated just for you.
            </p>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <form className="flex flex-col sm:flex-row w-full gap-4 items-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 w-full bg-white border border-transparent shadow-sm text-slate-900 placeholder-slate-400 px-6 py-4 rounded-2xl text-base outline-none transition-all focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                required
              />
              <button type="submit" className="bg-primary text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-primary/25 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
