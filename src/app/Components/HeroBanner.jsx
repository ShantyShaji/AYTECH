 'use client';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';

const announcements = [
  {
    text1:
      'Our next batch for software testing and full stack development training with placement will start on 5th February 2025.',
    text2: 'For more details contact us at 8074588583',
  },
  {
    text1: 'Join our AI/ML Bootcamp with expert mentors starting March 2025.',
    text2: 'Call us at 9000000001 for inquiries.',
  },
  {
    text1: 'Admissions open for Cyber Security training – April 2025 batch.',
    text2: 'Contact support at 8080808080',
  },
];

const AnnouncementBanner = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % announcements.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat w-full py-2 lg:py-0 h-auto sm:h-[90px] flex flex-col sm:flex-row items-center px-6 text-white"
      style={{
        backgroundColor: 'rgba(194, 191, 191, 0.5)',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Icon */}
      <div
  className="mr-4 bg-[#1e4c7f] w-[32px] h-[32px] rounded flex items-center justify-center hidden sm:block"
>
  <Icon
    icon="material-symbols-light:chat-info-outline"
    width="24"
    height="24"
    className="text-white m-auto mt-1"
  />
</div>

      {/* Animated Icon + Text Together */}
      <div className="flex flex-1 items-center justify-center gap-2 overflow-hidden h-[60px] sm:h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: direction > 0 ? 50 : -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction > 0 ? -50 : 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 w-full"
          >
            <Icon icon="ei:arrow-up" width="40" height="40" style={{ transform: 'rotate(45deg)' }} />
            <div className="flex-1 text-left text-sm font-medium leading-tight">
              <span className="font-semibold underline">{announcements[index].text1}</span>
              <br />
              <span className="font-semibold">{announcements[index].text2}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-2 ml-4">
        <button onClick={handlePrev} className="text-white hover:text-gray-300 text-xl">
          &#x276E;
        </button>
        <button onClick={handleNext} className="text-white hover:text-gray-300 text-xl">
          &#x276F;
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
