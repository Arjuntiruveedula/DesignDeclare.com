import React from 'react';
import { motion } from 'framer-motion';

const DonationSection: React.FC = () => {
  return (
    <section className=" md:px-12 py-32 bg-black text-white">
      <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className=" mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          {/* Left column - Sticky title */}
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl font-semibold text-white">Donate to D!</h2>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              {/* Description text */}
              <p className="text-2xl leading-relaxed text-gray-300">
                Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
              </p>
              
              {/* Donation buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://wise.com/pay/r/uZ5h3pxRMmTE_pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full md:max-w-fit items-center justify-center rounded-full px-6 py-3 md:py-4 text-center transition-colors bg-gray-100 text-xl text-black font-semibold hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black font-medium"
                >
                  Donate £10
                </a>
                <a
                  href="https://wise.com/pay/r/u2IiQNt2ebixruk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full md:max-w-fit items-center justify-center rounded-full px-6 py-3 md:py-4 text-center transition-colors bg-gray-100 text-xl text-black font-semibold hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black font-medium"
                >
                  Donate £20
                </a>
                <a
                  href="https://wise.com/pay/r/2vqUbqPfU9hvVLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full md:max-w-fit items-center justify-center rounded-full px-6 py-1 md:py-4 text-center transition-colors bg-gray-100 text-xl text-black font-semibold hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black font-medium"
                >
                  Donate £50
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export default DonationSection;