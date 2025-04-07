 "use client"; // needed for Framer Motion in Next.js app router

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const logos = [
  "/infosys.png",
  "/tcs.png",
  "/ibs.png",
  "/amazon.png",
  "/ust.png",
  "/quest.png",
];

const Companies = () => {
  const controls = useAnimation();

  useEffect(() => {
    const loopScroll = async () => {
      while (true) {
        await controls.start({
          x: "-50%",
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
        controls.set({ x: "0%" }); // reset
      }
    };

    loopScroll();
  }, [controls]);

  return (
    <div className="mx-3 bg-red-300 flex flex-col items-center justify-center py-3 bg-[url(/green.jpg)] rounded-2xl bg-cover bg-no-repeat bg-center overflow-hidden">
      <h2 className="font-sans font-regular text-center text-lg lg:text-2xl pt-7 text-white">
        Leading Companies Welcoming Our Talent
      </h2>

      <div className="relative w-full overflow-hidden py-7">
        <motion.div
          className="flex gap-20 w-max"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {/* Duplicate the logos for seamless loop */}
          {[...logos, ...logos].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt="Company Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Companies;
