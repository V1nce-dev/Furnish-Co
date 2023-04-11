"use client";
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sitemap = ['ABOUT', 'FAQs', 'CONTACT', 'COMPANY'];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto p-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="col-span-1">
            <h3 className="text-3xl font-semibold mb-5">Furnish & Co</h3>
            <p>Support the company and reach out.</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Your@email.com"
                className="mt-5 pl-4 outline-none rounded-lg text-black"
              />
              <button className="mt-5 ml-5 text-2xl">
                <AiOutlineMail />
              </button>
            </div>
          </div>
          <div className="flex m-auto gap-40 text-lg font-mono font-bold">
            {sitemap.map((item, index) => (
              <h1
                key={index}
                onClick={handleScrollToTop}
                className="hover:underline cursor-pointer"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
        <hr className="my-8" />
        <div className="text-center text-sm">
          <p>
            Designed and developed by{' '}
            <a
              href="https://github.com/V1nce-dev"
              className="text-blue-500 font-bold hover:text-white"
            >
              Vince.dev
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
