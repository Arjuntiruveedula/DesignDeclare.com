
import React from 'react';
import { motion } from 'framer-motion';

const LandingIntro: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-10">
      {/* Step 1: D and ! animation */}
      <div className="flex space-x-6 text-[120px] md:text-[180px] font-bold font-headline">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          D,
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          !
        </motion.div>
      </div>

      {/* Step 2: DECLARE DESIGN slide-up */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        className="text-center leading-tight"
      >
        <h1 className="text-[60px] md:text-[100px] font-headline font-extrabold tracking-tight">
          DECLARE<br />DESIGN
        </h1>
      </motion.div>
    </div>
  );
};

export default LandingIntro;
