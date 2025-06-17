import React, { useState } from 'react';
import {motion} from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    team: '',
    enquiryType: '',
    message: '',
    newsletterConsent: false,
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const teams = [
    { value: 'hello@designdeclares.com', label: 'D! UK' },
    { value: 'hello@designdeclares.ie', label: 'D! Ireland' },
    { value: 'ola@designdeclares.com.br', label: 'D! Brasil' },
    { value: 'australia@designdeclares.com.au', label: 'D! Australia' },
  ];

  const enquiryTypes = [
    { value: 'Contribute to the toolkit', label: 'Contribute to the toolkit' },
    { value: 'Volunteer my time', label: 'Volunteer my time' },
    { value: 'Set up a new chapter', label: 'Set up a new chapter' },
    { value: 'Discuss something else', label: 'Discuss something else' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setOpenDropdown(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual submission logic here
  };

  return (
    <main className="relative z-[1] pb-48 ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="mx-auto"
      >
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
      <section className="px-4 md:px-8 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-0">
                <h1 className="sr-only">Contact</h1>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              </div>
            </div>

            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-8 border border-gray-600 p-4 md:p-10 text-white"
              >
                <h2 className="text-4xl font-bold mb-6">Send Us A Message</h2>

                {/* Name */}
                <div className="relative flex flex-col md:flex-row gap-x-2 border border-gray-600 px-4 py-4 md:py-0 focus-within:border-white">
                  <label className="max-w-full whitespace-nowrap md:py-3.5 text-gray-400">
                    Name:*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent md:py-3.5 placeholder:text-gray-400 focus:outline-none"
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div className="relative flex flex-col md:flex-row gap-x-2 border border-gray-600 px-4 py-4 md:py-0 focus-within:border-white">
                  <label className="max-w-full whitespace-nowrap md:py-3.5 text-gray-400">
                    Email:*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent md:py-3.5 placeholder:text-gray-400 focus:outline-none"
                    autoComplete="email"
                  />
                </div>

                {/* Team Dropdown */}
                <div className="relative flex flex-col md:flex-row gap-x-2 border border-gray-600 px-4 py-4 md:py-0 focus-within:border-white">
                  <label className="max-w-full whitespace-nowrap md:py-3.5 text-gray-400">
                    Team to contact:*
                  </label>
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(openDropdown === 'team' ? null : 'team')
                      }
                      className="flex w-full items-center justify-between text-left md:py-3.5 bg-transparent"
                    >
                      <span className={formData.team ? 'text-white' : 'text-gray-400'}>
                        {formData.team
                          ? teams.find((t) => t.value === formData.team)?.label
                          : 'Select team...'}
                      </span>
                      <ChevronDown
                        className={`size-6 transition-transform ${
                          openDropdown === 'team' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === 'team' && (
                      <div className="absolute top-full left-0 right-0 bg-black border border-gray-600 mt-1 z-10">
                        {teams.map((team) => (
                          <button
                            key={team.value}
                            type="button"
                            onClick={() => handleSelectChange('team', team.value)}
                            className="w-full text-left px-4 py-3 hover:bg-gray-800"
                          >
                            {team.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Enquiry Type Dropdown */}
                <div className="relative flex flex-col md:flex-row gap-x-2 border border-gray-600 px-4 py-4 md:py-0 focus-within:border-white">
                  <label className="max-w-full whitespace-nowrap md:py-3.5 text-gray-400">
                    Enquiry type:*
                  </label>
                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(openDropdown === 'enquiry' ? null : 'enquiry')
                      }
                      className="flex w-full items-center justify-between text-left md:py-3.5 bg-transparent"
                    >
                      <span
                        className={
                          formData.enquiryType ? 'text-white' : 'text-gray-400'
                        }
                      >
                        {formData.enquiryType || 'Select enquiry type...'}
                      </span>
                      <ChevronDown
                        className={`size-6 transition-transform ${
                          openDropdown === 'enquiry' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === 'enquiry' && (
                      <div className="absolute top-full left-0 right-0 bg-black border border-gray-600 mt-1 z-10">
                        {enquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => handleSelectChange('enquiryType', type.value)}
                            className="w-full text-left px-4 py-3 hover:bg-gray-800"
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="border border-gray-600 focus-within:border-white">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    placeholder="Please write your message here."
                    className="w-full bg-transparent px-4 py-3.5 placeholder:text-gray-400 focus:outline-none resize-none"
                  />
                </div>

                {/* Newsletter */}
                <div className="flex items-start gap-x-3">
                  <label className="group flex items-start gap-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletterConsent"
                      checked={formData.newsletterConsent}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span
                      className={`flex size-6 flex-shrink-0 items-center justify-center border mt-1 ${
                        formData.newsletterConsent
                          ? 'border-white bg-white'
                          : 'border-gray-400'
                      }`}
                    >
                      {formData.newsletterConsent && (
                        <Check className="size-4 text-black" strokeWidth={2} />
                      )}
                    </span>
                    <span
                      className={`text-sm ${
                        formData.newsletterConsent ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      I would like to be added to the Design Declares! newsletter and receive further updates.
                    </span>
                  </label>
                </div>

                {/* Privacy Policy */}
                <a
                  href="/privacy-policy"
                  className="text-sm underline text-gray-400 hover:text-orange-600 w-fit"
                >
                  View our Privacy Policy
                </a>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
    </main>
  );
};

export default ContactPage;
