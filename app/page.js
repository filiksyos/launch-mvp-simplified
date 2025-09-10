'use client';

import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-5">
          <h1 className="text-2xl font-bold">Launch MVP Simplified</h1>
        </div>
      </header>
      <main className="container mx-auto py-10 px-5">
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Welcome</h2>
          <p className="text-gray-700">This is a simplified version of the launch-mvp-stripe-nextjs-supabase repository. It includes a basic landing page and a pricing section.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-5">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white shadow-md rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-gray-700">$10/month</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Choose Plan</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-gray-700">$20/month</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Choose Plan</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-5">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-700">$50/month</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Choose Plan</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;