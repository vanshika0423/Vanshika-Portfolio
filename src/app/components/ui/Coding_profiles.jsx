import React from 'react';
import { Code, Github } from 'lucide-react';

// Main Component, now named Coding_profiles
export default function Coding_profiles() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center font-sans">
      <AimsSection />
    </div>
  );
}

// Data for the feature cards with your profile links.
const features = [
  {
    icon: <Code className="h-8 w-8 text-blue-400" />,
    bgColor: 'bg-gray-800',
    title: 'LeetCode',
    description: 'My LeetCode profile showcasing problem-solving skills.',
    link: 'https://leetcode.com/u/mayank__24/',
  },
  {
    icon: <Code className="h-8 w-8 text-green-400" />,
    bgColor: 'bg-gray-800',
    title: 'Codeforces',
    description: 'My Codeforces profile for competitive programming.',
    link: 'https://codeforces.com/profile/minku6296',
  },
  {
    icon: <Github className="h-8 w-8 text-purple-400" />,
    bgColor: 'bg-gray-800',
    title: 'GitHub',
    description: 'My GitHub profile with all my projects and contributions.',
    link: 'https://github.com/MayankGEHU',
  },
];

// Reusable Feature Card Component, now a clickable link
function FeatureCard({ icon, bgColor, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black px-8 py-16 rounded-lg border border-gray-700 hover:border-white transition-all duration-300 flex flex-col items-start text-left h-full transform hover:-translate-y-1"
    >
      <div className={`rounded-lg p-3 ${bgColor} mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-50 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </a>
  );
}

// The main section component
function AimsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 tracking-tight">
            My Coding Profiles
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Introductory Text */}
        <div className="max-w-4xl mx-auto text-center text-gray-400 space-y-4 mb-12 text-base sm:text-lg">
           <p>
            Deep diving into competitive programming and learning the art of optimization.
          </p>
        </div>

        {/* Features Grid - now with 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              bgColor={feature.bgColor}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
