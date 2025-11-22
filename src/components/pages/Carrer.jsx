import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";

const Career = () => {
  // Sample job listings
  const jobs = [
    { title: "Frontend Developer", location: "Remote / Dhaka, Bangladesh", type: "Full-time" },
    { title: "Backend Developer", location: "Remote / Dhaka, Bangladesh", type: "Full-time" },
    { title: "Content Writer", location: "Remote", type: "Part-time" },
    { title: "UX/UI Designer", location: "Remote / Dhaka", type: "Contract" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="w-11/12 mx-auto py-5">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="w-11/12 mx-auto mt-8 rounded-2xl bg-white shadow-lg p-12 md:p-20 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
          Join Our Team
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          We’re always looking for talented individuals to help us deliver reliable news and innovative solutions. Check out our open positions and apply today.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="w-11/12 mx-auto py-14 grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2 animate-fadeIn">
          <h2 className="text-2xl font-bold mb-3 text-primary">Growth Opportunities</h2>
          <p className="text-gray-700 leading-relaxed">
            We invest in your skills and career development, offering mentorship and continuous learning.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2 animate-fadeIn delay-200">
          <h2 className="text-2xl font-bold mb-3 text-primary">Collaborative Culture</h2>
          <p className="text-gray-700 leading-relaxed">
            Work with passionate colleagues in a supportive environment that encourages creativity and innovation.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2 animate-fadeIn delay-400">
          <h2 className="text-2xl font-bold mb-3 text-primary">Impactful Work</h2>
          <p className="text-gray-700 leading-relaxed">
            Every role contributes directly to producing trustworthy, high-quality news that reaches a wide audience.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="w-11/12 mx-auto py-14">
        <h2 className="text-3xl font-bold text-primary mb-8 animate-fadeIn">Current Openings</h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transform transition duration-500 ease-in-out hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-primary">{job.title}</h3>
              <p className="text-gray-600 mt-1">{job.location}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                {job.type}
              </span>
              <button className="mt-4 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition">
                Apply Now
              </button>
            </div>
          ))}
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

export default Career;
