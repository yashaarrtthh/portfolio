import React from 'react';
import { education } from '../data/portfolioData';

const EducationCard = ({ label, title, meta, detail, delay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500"
  >
    <span className="inline-block text-[10px] font-black tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-5">
      {label}
    </span>
    <h3 className="text-white text-xl md:text-2xl font-black mb-2 tracking-tight">
      {title}
    </h3>
    <p className="text-red-300 text-xs font-bold font-mono tracking-wider uppercase mb-4">
      {meta}
    </p>
    <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
      {detail}
    </p>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Academic Journey
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Computer science foundations, blockchain specialization, and school achievements that shape my learning path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <EducationCard
            label="Undergraduate"
            title={education.degree}
            meta={`${education.institution} - ${education.duration}`}
            detail={`${education.specialization}. ${education.status} based in ${education.location}.`}
            delay="100"
          />
          <EducationCard
            label="Class 12"
            title="Senior Secondary"
            meta="Maheshwari Public School, Kota"
            detail={education.twelfth}
            delay="200"
          />
          <EducationCard
            label="Class 10"
            title="High School"
            meta="Sir Padampat Singhania School, Kota"
            detail={education.tenth}
            delay="300"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
