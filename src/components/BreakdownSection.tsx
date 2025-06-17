import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onToggle }) => {
  return (
    <div className="border-t border-gray-600">
      <button
        type="button"
        onClick={onToggle}
        className="mt-4 flex w-full items-center justify-between"
        aria-expanded={isOpen}
      >
        <h3 className="text-gray-300 text-2xl font-medium">{title}</h3>
        <span aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-6 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <path strokeLinecap="square" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pb-4">
          <p className="text-gray-300 leading-relaxed">
            Content for {title} would go here. This section would contain detailed information about the topic.
          </p>
        </div>
      )}
    </div>
  );
};

const BreakdownSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (itemKey: string) => {
    setOpenItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const accordionItems = [
    { key: 'role-of-design', title: 'The Role of Design' },
    { key: 'time-for-change', title: 'Time for Change' },
    { key: 'act-with-urgency', title: 'Act with Urgency' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="px-6 md:px-12 py-32 bg-black text-white"
    >
      <div className="mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          {/* Left column - Sticky title */}
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl font-semibold text-white">This is Breakdown</h2>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              {/* Main heading */}
              <h2 className="text-gray-200 text-4xl md:text-5xl lg:text-6xl leading-tight">
                The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
              </h2>

              {/* Accordion items */}
              <div className="space-y-10 text-2xl md:text-xl">
                {accordionItems.map((item) => (
                  <AccordionItem
                    key={item.key}
                    title={item.title}
                    isOpen={openItems[item.key] || false}
                    onToggle={() => toggleItem(item.key)}
                  />
                ))}
              </div>

              {/* Call to action button */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://youtu.be/XpnOe94eXdM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full md:max-w-fit items-center justify-center rounded-full px-6 md:py-4 text-center transition-colors bg-gray-200 text-xl text-black font-semibold hover:bg-orange-600 hover:text-white"
                >
                  View our D! Intro Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BreakdownSection;
