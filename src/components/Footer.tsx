import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && isChecked) {
      console.log('Newsletter subscription:', { email, consent: isChecked });
      // Handle form submission here
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
      setIsChecked(false);
    }
  };

  return (
   <footer
  style={{
    backgroundColor: "rgb(255, 99, 64)",
  }}
  className="sticky bottom-0 border-t-[2rem] border-black px-6 py-12 text-black md:px-12"
>
      <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="mx-auto ">
        <div className="grid grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-16">
          {/* Logo Section */}
          <div className="col-span-12 row-span-2 md:col-span-4">
            

            <span className="block w-min text-[5rem] font-black leading-none text-current font-headline font-light text-[200px] leading-[0.85] tracking-tight">
              Design Declares
            </span>
          </div>

          {/* Navigation Section */}
          <div className="col-span-12 md:col-span-4">
            <nav className="grid grid-cols-2 flex-col items-start gap-x-8 gap-y-2" aria-label="Footer Menu">
              <div className="col-span-1 sm:col-span-2">
                <a 
                  href="/contact" 
                  className="group relative w-fit transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                >
                  Contact
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a 
                  href="https://www.instagram.com/design_declares/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-fit transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                >
                  Instagram
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a 
                  href="https://www.linkedin.com/groups/12699995/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-fit transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                >
                  LinkedIn
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a 
                  href="/privacy-policy" 
                  className="group relative w-fit transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                >
                  Privacy Policy
                </a>
              </div>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-12 space-y-4 md:col-span-4">
            <p className="font-bold">Sign up to the D! Newsletter</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 text-black">
              {/* Email Input */}
              <div className="relative -mt-px flex flex-col gap-x-2 border border-black px-4 py-4 focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-orange-600 md:flex-row md:py-0">
                <label 
                  htmlFor="newsletter-email" 
                  className="max-w-full whitespace-nowrap transition-colors md:py-3.5"
                >
                  Email:*
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent placeholder:text-black focus:outline-none md:py-3.5"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-4">
                  {/* Consent Checkbox */}
                  <div className="flex flex-row flex-wrap gap-4 text-sm">
                    <label className="group flex items-center gap-x-2 transition-colors">
                      <span className="sr-only">
                        <input
                          type="checkbox"
                          required
                          checked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
                          name="newsletterConsent"
                        />
                      </span>
                      <span 
                        className="mb-auto mt-0 flex h-12 w-12 flex-shrink-0 items-center justify-center border border-black focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-orange-600"
                        aria-hidden="true"
                      >
                        <input
                          type="checkbox"
                          required
                          checked={isChecked}
                          onChange={(e) => setIsChecked(e.target.checked)}
                          className="sr-only"
                          name="newsletterConsent"
                        />
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-12 w-12 rotate-45 transition-transform ${
                            isChecked ? 'scale-100' : 'scale-0'
                          }`}
                        >
                          <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                      <span className="max-w-full whitespace-normal py-0 transition-colors md:py-3.5">
                        I would like to be added to the Design Declares! newsletter and receive further updates.
                      </span>
                    </label>
                  </div>
                  <a
                    href="/privacy-policy"
                    className="block w-fit text-sm underline transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                  >
                    View our Privacy Policy
                  </a>
                </div>
                <div className="flex items-center gap-x-4">
                  <button
                    type="submit"
                    className="group relative flex max-h-fit w-full items-center justify-center rounded-full border border-transparent bg-white px-6 py-3 text-center font-medium text-black transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 md:max-w-fit md:py-4"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Footer Text Section */}
          <div className="col-span-12 space-y-4 md:col-span-8">
            <div className="space-y-6">
              <p className="text-sm">
                This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand.{' '}
                <a
                  href="https://digitalbeacon.co/report/designdeclares-com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline w-fit underline transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                >
                  Learn more about our carbon footprint
                </a>
                .
              </p>
              <p className="text-sm">
                Empowered by{' '}
                <a
                  href="https://driftime.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline w-fit underline transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                >
                  Driftime®
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </motion.section>
    </footer>
  );
};

export default Footer;