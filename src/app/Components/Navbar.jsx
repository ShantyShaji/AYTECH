//  'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Icon } from '@iconify/react';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full h-24 flex justify-center items-center bg-red-300 relative">
//       <div className="mx-4 sm:mx-20  flex justify-between lg:justify-center items-center w-full h-full bg-green-300">
//         {/* Logo */}
//         <Image
//           src="/aytech_logo.png"
//           alt="Logo"
//           width={75}
//           height={0}
//           className="object-cover mr-7"
//         />

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex w-[60vw] h-[80%] justify-center items-center bg-white rounded-xl shadow-md">
//           <ul className="flex gap-5 lg:gap-7 xl:gap-13 text-black font-sans items-center">
//             <li className="text-[#006192] font-poppins font-semibold">Home</li>
//             <li>Services</li>
//             <li>Testimonials</li>
//             <li>Careers</li>
//             <li>Apply Jobs</li>
//             <div className="bg-[#006192] text-white rounded-full w-8 h-8 flex items-center justify-center">
//               <Icon icon="ic:baseline-whatsapp" width="22" height="22" />
//             </div>
//             <li>
//               <button className="px-4 py-1 bg-[#006192] text-white rounded-2xl">Contact</button>
//             </li>
//           </ul>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="lg:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             <Icon
//               icon={menuOpen ? 'ic:round-close' : 'ic:round-menu'}
//               width="30"
//               height="30"
//               className="text-white"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       {menuOpen && (
//         <div className="absolute top-24 left-0 w-full bg-white shadow-md z-50 flex flex-col items-center gap-4 py-6 lg:hidden">
//           <ul className="text-black font-sans flex flex-col gap-4 text-lg items-center">
//             <li className="text-[#006192] font-poppins font-semibold">Home</li>
//             <li>Services</li>
//             <li>Testimonials</li>
//             <li>Careers</li>
//             <li>Apply Jobs</li>
//             <div className="bg-[#006192] text-white rounded-full w-8 h-8 flex items-center justify-center">
//               <Icon icon="ic:baseline-whatsapp" width="22" height="22" />
//             </div>
//             <li>
//               <button className="px-4 py-1 bg-[#006192] text-white rounded-2xl">Contact</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const drawerVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
    exit: { y: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <div className="w-full h-24 flex justify-center items-center bg-[#EFEFEF] relative">
      <div className="mx-4 sm:mx-20 flex justify-between lg:justify-center items-center w-full h-full bg-green-300">
        {/* Logo */}
        <Image
          src="/aytech_logo.png"
          alt="Logo"
          width={75}
          height={0}
          className="object-cover mr-7"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-[60vw] h-[80%] justify-center items-center bg-white rounded-xl shadow-md">
          <ul className="flex gap-5 lg:gap-7 xl:gap-13 text-black font-sans items-center">
            <li className="text-[#006192] font-poppins font-semibold">Home</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Apply Jobs</li>
            <div className="bg-[#006192] text-white rounded-full w-8 h-8 flex items-center justify-center">
              <Icon icon="ic:baseline-whatsapp" width="22" height="22" />
            </div>
            <li>
              <button className="px-4 py-1 bg-[#006192] text-white rounded-2xl">Contact</button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Icon
              icon={menuOpen ? 'ic:round-close' : 'ic:round-menu'}
              width="30"
              height="30"
              className="text-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            className="absolute top-24 left-0 w-full bg-white shadow-md z-50 flex flex-col items-center gap-4 py-6 lg:hidden"
          >
            <ul className="text-black font-sans flex flex-col gap-4 text-lg items-center">
              <li className="text-[#006192] font-poppins font-semibold">Home</li>
              <li>Services</li>
              <li>Testimonials</li>
              <li>Careers</li>
              <li>Apply Jobs</li>
              <div className="bg-[#006192] text-white rounded-full w-8 h-8 flex items-center justify-center">
                <Icon icon="ic:baseline-whatsapp" width="22" height="22" />
              </div>
              <li>
                <button className="px-4 py-1 bg-[#006192] text-white rounded-2xl">Contact</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
