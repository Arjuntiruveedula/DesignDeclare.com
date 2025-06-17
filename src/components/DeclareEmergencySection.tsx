import React, { useState } from 'react';
import {motion} from 'framer-motion';

interface RadioOption {
  value: string;
  label: string;
}

interface SelectOption {
  value: string;
  label: string;
}

const DeclareEmergencySection: React.FC = () => {
  const [formData, setFormData] = useState({
    entity: '',
    website: '',
    country: 'United Kingdom',
    discipline: '',
    email: '',
    message: '',
    dataConsent: false,
    newsletterConsent: false
  });

  const entityOptions: RadioOption[] = [
    { value: 'Business', label: 'As a business' },
    { value: 'Individual', label: 'As an individual' },
    { value: 'Institution', label: 'As a public institution' },
    { value: 'Team', label: 'As a team or department' }
  ];

  const disciplineOptions: SelectOption[] = [
    { value: '', label: 'Select discipline' },
    { value: 'Communication Design', label: 'Communication Design' },
    { value: 'Digital Design', label: 'Digital Design' },
    { value: 'Service Design', label: 'Service Design' },
    { value: 'Product Design', label: 'Product Design' }
  ];

  const countries: SelectOption[] = [
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'Denmark', label: 'Denmark' },
    { value: 'Norway', label: 'Norway' },
    // Add more countries as needed
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Declaration submission:', formData);
    alert('Thank you for declaring emergency! Your declaration has been submitted.');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="declaration" className="px-6 md:px-12 py-32 bg-black text-white">
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
              <h2 className="text-2xl font-semibold text-white">Declare Emergency Now</h2>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              {/* Introduction text */}
              <p className="text-xl leading-relaxed text-gray-300">
                Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.
              </p>
              
              {/* Declaration Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-8 border border-gray-600 p-4 md:p-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">I am Declaring Emergency</h2>
                
                {/* Entity Type Selection */}
                <div className="space-y-4">
                  <p className="text-gray-400 font-medium">What type of entity are you declaring as?</p>
                  <div className="flex flex-row flex-wrap gap-4">
                    {entityOptions.map((option) => (
                      <label key={option.value} className="group flex items-center gap-x-2 transition-colors cursor-pointer">
                        <span className="sr-only">
                          <input
                            type="radio"
                            name="entity"
                            value={option.value}
                            checked={formData.entity === option.value}
                            onChange={(e) => handleInputChange('entity', e.target.value)}
                            required
                          />
                        </span>
                        <span 
                          className={`flex size-12 flex-shrink-0 items-center justify-center border transition-colors ${
                            formData.entity === option.value 
                              ? 'border-white' 
                              : 'border-gray-600'
                          } focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:ring-offset-black`}
                          aria-hidden="true"
                        >
                          <input
                            type="radio"
                            name="entity"
                            value={option.value}
                            checked={formData.entity === option.value}
                            onChange={(e) => handleInputChange('entity', e.target.value)}
                            className="sr-only"
                            required
                          />
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`size-12 rotate-45 transition-transform ${
                              formData.entity === option.value ? 'scale-100' : 'scale-0'
                            }`}
                          >
                            <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </span>
                        <span className={`max-w-full transition-colors whitespace-normal ${
                          formData.entity === option.value ? 'text-white' : 'text-gray-400'
                        }`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-0">
                  {/* Website */}
                  <div className="relative -mt-px flex flex-col gap-x-2 border border-gray-600 px-4 py-4 md:flex-row md:py-0 focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:ring-offset-black">
                    <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-gray-400">
                      Website:*
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      required
                      className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none md:py-3.5 text-white"
                      placeholder="https://example.com"
                    />
                  </div>

                  {/* Country */}
                  <div className="relative -mt-px flex flex-col gap-x-2 border border-gray-600 px-4 py-4 md:flex-row md:py-0 focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:ring-offset-black">
                    <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-gray-400">
                      Country:*
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      required
                      className="w-full bg-transparent focus:outline-none md:py-3.5 text-white"
                    >
                      {countries.map((country) => (
                        <option key={country.value} value={country.value} className="bg-black">
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Discipline */}
                  <div className="relative -mt-px flex flex-col gap-x-2 border border-gray-600 px-4 py-4 md:flex-row md:py-0 focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:ring-offset-black">
                    <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-gray-400">
                      Discipline:*
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => handleInputChange('discipline', e.target.value)}
                      required
                      className="w-full bg-transparent focus:outline-none md:py-3.5 text-white"
                    >
                      {disciplineOptions.map((discipline) => (
                        <option key={discipline.value} value={discipline.value} className="bg-black">
                          {discipline.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Email */}
                  <div className="relative -mt-px flex flex-col gap-x-2 border border-gray-600 px-4 py-4 md:flex-row md:py-0 focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:ring-offset-black">
                    <label className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-gray-400">
                      Email:*
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      autoComplete="email"
                      className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none md:py-3.5 text-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative -mt-px flex flex-col gap-x-2 border border-gray-600 p-0 focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:ring-offset-black">
                    <label className="sr-only">
                      Why are you declaring? In a sentence or two, tell us why you're joining Design Declares.
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={8}
                      className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none px-4 py-3.5 text-white"
                      placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
                    />
                  </div>
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  {/* Data Consent */}
                  <div className="flex flex-row flex-wrap gap-4 text-sm">
                    <label className="group flex items-center gap-x-2 transition-colors cursor-pointer">
                      <span className="sr-only">
                        <input
                          type="checkbox"
                          name="dataConsent"
                          checked={formData.dataConsent}
                          onChange={(e) => handleInputChange('dataConsent', e.target.checked)}
                          required
                        />
                      </span>
                      <span 
                        className={`mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border transition-colors ${
                          formData.dataConsent ? 'border-white' : 'border-gray-600'
                        } focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:ring-offset-black`}
                        aria-hidden="true"
                      >
                        <input
                          type="checkbox"
                          name="dataConsent"
                          checked={formData.dataConsent}
                          onChange={(e) => handleInputChange('dataConsent', e.target.checked)}
                          className="sr-only"
                          required
                        />
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`size-12 rotate-45 transition-transform ${
                            formData.dataConsent ? 'scale-100' : 'scale-0'
                          }`}
                        >
                          <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                      <span className={`max-w-full transition-colors whitespace-normal ${
                        formData.dataConsent ? 'text-white' : 'text-gray-400'
                      }`}>
                        I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.
                      </span>
                    </label>
                  </div>

                  {/* Newsletter Consent */}
                  <div className="flex flex-row flex-wrap gap-4 text-sm">
                    <label className="group flex items-center gap-x-2 transition-colors cursor-pointer">
                      <span className="sr-only">
                        <input
                          type="checkbox"
                          name="newsletterConsent"
                          checked={formData.newsletterConsent}
                          onChange={(e) => handleInputChange('newsletterConsent', e.target.checked)}
                        />
                      </span>
                      <span 
                        className={`mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border transition-colors ${
                          formData.newsletterConsent ? 'border-white' : 'border-gray-600'
                        } focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 focus-within:ring-offset-black`}
                        aria-hidden="true"
                      >
                        <input
                          type="checkbox"
                          name="newsletterConsent"
                          checked={formData.newsletterConsent}
                          onChange={(e) => handleInputChange('newsletterConsent', e.target.checked)}
                          className="sr-only"
                        />
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`size-12 rotate-45 transition-transform ${
                            formData.newsletterConsent ? 'scale-100' : 'scale-0'
                          }`}
                        >
                          <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                      <span className={`max-w-full transition-colors whitespace-normal ${
                        formData.newsletterConsent ? 'text-white' : 'text-gray-400'
                      }`}>
                        I would like to be added to the Design Declares! newsletter and receive further updates.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Privacy Policy Link */}
                <a
                  href="/privacy-policy"
                  className="block w-fit text-sm underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black text-gray-400"
                >
                  View our Privacy Policy
                </a>

                {/* Submit Button */}
                <div className="flex items-center gap-x-4">
                  <button
                    type="submit"
                    className="group relative flex w-full md:max-w-fit items-center justify-center rounded-full px-6  md:py-4 text-center transition-colors bg-gray-200 text-xl text-black  font-semibold hover:bg-orange-600 hover:text-white "
                  >
                    Declare Emergency Now
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

export default DeclareEmergencySection;