import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="w-11/12 mx-auto py-5">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="w-11/12 mx-auto mt-8 rounded-2xl bg-white shadow-lg transform transition duration-700 ease-in-out hover:scale-105 animate-fadeIn">
        <div className="p-10 md:p-16">
          <h1 className="text-4xl md:text-4xl font-bold text-secondary leading-tight">
            About Our News Platform
          </h1>
          <p className="mt-4 text-lg text-accent max-w-2xl">
            We bring reliable news, insights, and stories to readers who care
            about accuracy and depth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-11/12 mx-auto py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-3 text-primary">Our Mission</h2>
            <p className="text-accent leading-relaxed">
              We aim to deliver accurate, fast, and trustworthy information
              across technology, entertainment, lifestyle, politics, and more.
            </p>
          </div>

          {/* Who We Are */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2 animate-fadeIn delay-200">
            <h2 className="text-2xl font-bold mb-3 text-primary">Who We Are</h2>
            <p className="text-accent leading-relaxed">
              Our team includes journalists, editors, designers, and developers
              who are passionate about high-quality reporting and digital media.
            </p>
          </div>

          {/* Why It Matters */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2 animate-fadeIn delay-400">
            <h2 className="text-2xl font-bold mb-3 text-primary">Why It Matters</h2>
            <p className="text-accent leading-relaxed">
              We believe readers deserve reporting that is clear, unbiased, and
              easy to understand. That’s why we focus on depth, accuracy, and
              reliability.
            </p>
          </div>
        </div>

        {/* Large Section */}
        <div className="mt-14 bg-white p-10 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transform transition duration-500 ease-in-out hover:scale-105 animate-fadeIn delay-600">
          <h2 className="text-3xl font-bold mb-5 text-secondary">Our Commitment</h2>
          <p className="text-accent text-lg leading-relaxed max-w-4xl">
            We are committed to responsible journalism. Every story we publish
            goes through careful research, verification, and quality checks to
            ensure readers receive content they can trust.
          </p>
        </div>
      </section>

      {/* Tailwind Animation Classes */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default About;
