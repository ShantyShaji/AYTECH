 'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import AnnouncementBanner from './HeroBanner';  

const slides = [
  {
    bg: '/slide1.png',
    title: 'Software Development & Services',
    content:
      'An ITIL – self certified Software Development Company that provides cutting-edge development solutions and outsourcing services to businesses worldwide. We partner with companies across various industries to help them scale, innovate, and stay ahead of the competition. Our expertise in custom software development, IT consulting, and providing highly skilled outsourced talent ensures that our clients can access the best solutions to meet their business needs.',
    points: [
      'Custom Software Development',
      'Outsourced Development Resources',
      'IT Consulting & Strategy',
      'Company & Trademark Registration',
      'Process Consulting & Auditing ',
    ],
  },
  {
    bg: '/slide2.png',
    title: 'Training & Placement:',
    content:
      'Students across countries like US, Canada, Australia, Germany, UAE, UK, New Zealand, Netherlands, India, etc. used our training services and got placed in different MNCs & startups. Some of the profound companies where we have placed our students are Infosys, TCS, Amazon, IBS, UST, Zyxware, Oracle etc. We could successfully place around 3,000 youngsters (1500 + testers, 1,000+ Developers, 500 + Experienced people). Want to know more about our training services? Then Read...',
    points: [
      'Strategic IT Planning',
      'Security Audits',
      'Process Optimization',
      'Compliance & Governance',
    ],
  },
  {
    bg: '/slide3.png',
    title: 'Other Services:',
    content:
      'We are providing competent training & development programs for empowering students with the skills, knowledge, and real-world experience needed to excel in their careers. Our range of services are designed to provide personalized support and guidance, helping students bridge the gap between academic learning and industry demands. Go to the details here...',
    points: [
      'Dedicated Teams',
      'Remote Workforce Solutions',
      'Nearshore & Offshore Resources',
      'Scalable Staffing Models',
    ],
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 300); // match transition duration
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(false);
    }, 300);
  };

  return (
    <div className="relative w-full h-[120vh] lg:h-[100vh] bg-[#EFEFEF] flex flex-col items-center justify-center overflow-hidden mt-2">
      {/* Background wrapper with transition */}
      <div
        className={`absolute inset-0  mx-3 rounded-lg h-full bg-center bg-cover transition-all duration-700 ${
          fade ? 'blur-sm brightness-75' : ''
        }`}
        style={{ backgroundImage: `url(${slides[index].bg})` }}
      ></div>

      {/* Overlay */}
      <div className="relative z-10 w-full h-full bg-black/40 text-white flex flex-col items-center justify-center px-4 lg:px-24 text-center">
      {index === 0 ? (
  <motion.div
    key={index}
    initial={{ x: 150, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -150, opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col lg:flex-row items-center justify-between gap-10 text-left"
  >
    <div className="lg:w-2/3">
      <h1 className="text-2xl lg:text-4xl font-bold font-poppins mb-2 lg:mb-4">
        {slides[0].title}
      </h1>
      <p className="text-sm lg:text-lg text-justify font-poppins mb-2 lg:mb-6">
        {slides[0].content}
      </p>
      <div className="flex flex-wrap gap-2 lg:gap-4">
        {slides[0].points.map((point, i) => (
          <div
            key={i}
            className="px-4 py-1 border border-white rounded-3xl flex items-center gap-2"
          >
            <p className="underline underline-offset-4 text-sm">{point}</p>
            <Image src="/arrow.png" alt="arrow" width={20} height={20} />
          </div>
        ))}
      </div>
    </div>
    <div className="lg:w-1/3 flex justify-start">
      <Image
        src="/sidelogo.png"
        alt="Slide 1 Side"
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
  </motion.div>
) : (
  <motion.div
    key={index}
    initial={{ x: 150, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -150, opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-2xl lg:text-4xl text-left font-bold font-poppins mb-4 whitespace-nowrap">
      {slides[index].title}
    </h1>
    <p className="text-sm lg:text-lg text-justify font-poppins max-w-[60vw] mx-auto">
      {slides[index].content}
    </p>
  </motion.div>
)}


        {/* Arrows */}
        {index > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 border border-[1px] border-gray-400 hover:bg-gray-300 px-0 py-1 rounded-full"
          >

        <Icon icon="material-symbols-light:keyboard-arrow-left" className="text-white text-2xl" />
           
          </button>
        )}
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 border border-[1px]  border-gray-400 hover:bg-gray-300  px-0 py-1 rounded-full"
        >
           <Icon icon="material-symbols-light:keyboard-arrow-right" className="text-white text-2xl" />
        </button> 
      </div>
      <div className="absolute bottom-0 lg:bottom-7 left-0 w-full z-20">
        <AnnouncementBanner />
      </div>
    </div>
  );
};

export default HeroSection;
