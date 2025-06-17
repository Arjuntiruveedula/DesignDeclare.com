import React from "react";
import { motion } from "framer-motion";

const DesignDeclaresIntro: React.FC = () => {
  return (
    <div className="container flex flex-col justify-between mx-auto max-w-[1440px] pt-5 pb-20 overflow-hidden">
      <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
        {/* Left section */}
        <div className="col-span-12 lg:col-span-7">
          <h1 className="font-display relative">
            {/* D Animation */}
            <motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 1] }}
  transition={{
    delay: 0.4,           // Wait 0.4s before starting animation
    duration: 2.3,        // Total duration of full animation
    ease: 'easeOut',
    times: [0, 0.13, 0.87, 1], // Relative keyframes: fade in, stay, then fade out
  }}
  className="absolute top-[-13px] z-[0] text-[195px] text-white font-headline leading-none tracking-tight"
>
  D
</motion.div>
<motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 1] }}
  transition={{
    delay: 1.4, // start after D is gone
    duration: 1,
    ease: 'easeOut',
    times: [0, 0.13, 0.87, 1],
  }}
  className="absolute top-[-13px] left-[108px] z-[0] text-[195px] text-white font-headline leading-none tracking-tight"
>
  !
</motion.div>


            {/* ! Animation (sudden jump after D) */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3, ease: 'easeOut' }}
              className="absolute top-0 z-[2] text-[200px] text-[#FF5035] font-headline leading-none tracking-tight"
            >
              !
            </motion.div> */}

            {/* Design Declares UK "water filling" animation */}
            <div className="relative z-[1] font-headline font-light text-[200px] leading-[0.85] tracking-tight">
  {/* DESIGN */}
  <motion.div
    initial={{ clipPath: 'inset(100% 0 0 0)' }}
    animate={{ clipPath: 'inset(0% 0 0 0)' }}
    transition={{ delay: 2, duration: 0.5, ease: 'easeInOut' }}
    className="overflow-hidden"
  >
    <h1 className="text-gray-200">DESIGN</h1>
  </motion.div>

  {/* DECLARES */}
  <motion.div
    initial={{ clipPath: 'inset(100% 0 0 0)' }}
    animate={{ clipPath: 'inset(0% 0 0 0)' }}
    transition={{ delay: 2, duration: 0.5, ease: 'easeInOut' }}
    className="overflow-hidden"
  >
    <div className="text-gray-200">DECLARES</div>
  </motion.div>

  {/* UK */}
  <motion.div
    initial={{ clipPath: 'inset(100% 0 0 0)' }}
    animate={{ clipPath: 'inset(0% 0 0 0)' }}
    transition={{ delay: 2, duration: 0.5, ease: 'easeInOut' }}
    className="overflow-hidden"
  >
    <div className="text-[#FF5035]">UK</div>
  </motion.div>
</div>

          </h1>
        </div>

        {/* Right section */}
        <div className="col-span-12 lg:col-span-5">
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 3.8 }}
          >
            <div className="opacity-100 transform-none">
              <p className="max-w-lg lg:ml-auto lg:mr-0 text-[1.125rem] leading-[1.4] text-[#c4c4c4] font-normal font-[var(--font-inter),Helvetica,sans-serif]">
                Design Declares is a growing group of designers, design studios,
                agencies and institutions here to declare a climate and
                ecological emergency. As part of the global declaration movement,
                we commit to harnessing the tools of our industry to reimagine,
                rebuild and heal our world.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Bottom right buttons */}
        {/* <div className="fixed bottom-8 right-8 flex flex-col gap-2">
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 4 }}
          >
            <button className="bg-gray-200 text-black px-6 py-3 text-lg font-medium flex items-center justify-between min-w-[140px] border-color-black hover:bg-orange-600 transition-colors">
              <span>Menu</span>
              <span className="text-2xl ml-11">+</span>
            </button>
            <button className="bg-gray-200 text-black px-6 py-3 text-lg font-medium hover:bg-orange-600 transition-colors">
              Declare Now
            </button>
          </motion.section>
        </div> */}
      </div>
    </div>
  );
};

export default DesignDeclaresIntro;
