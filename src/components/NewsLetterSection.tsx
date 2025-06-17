import React, { useState } from 'react';
import {motion} from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Newsletter signup:', { email, consent: isChecked });
  };

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
            {/* Sticky Header */}
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="text-3xl md:text-2xl font-semibold text-white">
                  The Design Declares Newsletter and Toolkit
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="space-y-12">
                {/* Hero Image */}
                <figure className="flex h-auto w-full flex-col items-center justify-center">
                  <div className="relative h-full w-full">
                    <img 
                      alt="Design Declares Newsletter and Toolkit" 
                      loading="lazy" 
                      width="3840" 
                      height="2160" 
                      decoding="async" 
                      className="block object-cover object-center rounded-lg" 
                      src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F88fd99f7f3ecf6762e7dbe50ca090a59277eff87-3840x2160.png%3Fmax-w%3D1440&w=1920&q=75"
                    />
                  </div>
                </figure>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                    Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
                  </p>
                  <p className="text-base leading-relaxed text-gray-400">
                    Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
                  </p>
                </div>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 md:gap-y-8 text-gray-400">
                  {/* Email Input */}
                  <div className="relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-gray-400 text-white hover:border-white transition-colors duration-300 focus-within:border-white">
                    <label 
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-gray-400 group-data-[selected]:text-white"
                      htmlFor="email"
                    >
                      Email:*
                    </label>
                    <input 
                      className="w-full bg-transparent md:py-3.5 placeholder:text-gray-400 text-white outline-none"
                      autoComplete="email" 
                      required 
                      id="email" 
                      type="email" 
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex flex-row flex-wrap gap-4 text-sm">
                    <label className="group flex items-center gap-x-2 transition-colors cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        required
                      />
                      <span 
                        className={`flex size-12 flex-shrink-0 items-center justify-center border transition-all duration-300 ${
                          isChecked 
                            ? 'border-white bg-white/10' 
                            : 'border-gray-400 hover:border-white'
                        }`}
                      >
                        {/* <Check 
                          className={`size-6 rotate-45 transition-transform duration-300 ${
                            isChecked ? 'scale-100 text-white' : 'scale-0'
                          }`}
                        /> */}
                      </span>
                      <span className={`max-w-full transition-colors md:py-3.5 whitespace-normal ${
                        isChecked ? 'text-white' : 'text-gray-400'
                      }`}>
                        I would like to be added to the Design Declares! newsletter and receive further updates.
                      </span>
                    </label>
                  </div>

                  {/* Privacy Policy Link */}
                  <a 
                    className="text-sm block w-fit underline transition-colors hover:text-red-400 focus:text-red-400 text-gray-400"
                    href="/privacy-policy"
                  >
                    View our Privacy Policy
                  </a>

                  {/* Submit Button */}
                  <div className="flex items-center gap-x-4">
                    <button 
                      type="submit" 
                      className="group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-all duration-300 md:max-w-fit md:py-4 border border-transparent bg-gray-300 text-xl text-black hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white transform hover:scale-105 active:scale-95 font-medium"
                      disabled={!email || !isChecked}
                    >
                      <span className="relative z-10">Subscribe</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      
      </motion.section>
    </section>
  );
};

export default NewsletterSection;