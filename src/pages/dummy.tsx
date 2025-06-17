import React from 'react';
import { motion } from 'framer-motion';

interface DonationSectionProps {
  onClose: () => void;
}

const DonationSection: React.FC<DonationSectionProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black text-white overflow-auto"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold z-[101]"
        aria-label="Close modal"
      >
        &times;
      </button>
    <header className="ml-2 py-4 md:px-8 relative z-30">
        <div className="container mx-auto">
          <a href="/" className="inline-block w-fit group focus:outline-none focus:ring-2 focus:ring-red-500 rounded">
            {/* Logo - Using a stylized D! */}
            <div className="w-11 h-14 relative">
              <svg width="44" height="59" viewBox="0 0 44 59" fill="currentColor" className="text-white">
                <path d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"/>
                <path d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"/>
              </svg>
            </div>
          </a>
        </div>
      </header>
      {/* Full Donation Section Content */}
      <section className="px-9 mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          {/* Left column - Sticky title */}
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl font-semibold text-white">Select Global Chapter:</h2>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="text-white font-headline leading-[0.4] tracking-tight text-[100px] col-span-12 space-y-12 lg:col-span-7 lg:col-start-6 ">
            <h1 className='hover:text-orange-600'>UNITED KINGDOM</h1>
            <h1 className='hover:text-orange-600'>IRELAND</h1>
            <h1 className='hover:text-orange-600'>BRASIL</h1>
            <h1 className='hover:text-orange-600'>AUSTRALIA</h1>

            
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DonationSection;
