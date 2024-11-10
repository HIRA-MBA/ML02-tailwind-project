import React from 'react';
import Header from "@/components/Header/Header";
import NavBar from "@/components/Navbar/Navbar";

const About = () => {
  return (
    <div> 
      <Header />
      <NavBar />
    
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <p className="text-lg font-semibold text-gray-700">
          I am a Full Stack Developer and AI Specialist.
        </p>

        <section className="mt-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4"> HTML/CSS Assignments</h1>
          <p className="text-gray-600 mb-4">Complete the HTML/CSS assignments of Quarter 2 Launchpad:</p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Periodic Table</li>
            <li className="text-gray-700">Product Cards</li>
          </ul>
        </section>

        <section className="mt-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">TypeScript Assignments</h1>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Number Guessing Game</li>
            <li className="text-gray-700">BMI Calculator</li>
            <li className="text-gray-700">Simple Calculator</li>
            <li className="text-gray-700">Currency Converter</li>
            <li className="text-gray-700">TODO List</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
