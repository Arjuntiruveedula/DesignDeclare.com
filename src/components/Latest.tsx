import React from 'react';
import {motion} from 'framer-motion';
interface Article {
  id: string;
  tags: string[];
  date: string;
  title: string;
  description: string;
  url: string;
  lang?: string;
}

const articles: Article[] = [
  {
    id: '1',
    tags: ['Events', 'D! UK'],
    date: '24.04.2025, 03 PM:30',
    title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
    description: 'Recap: SD4P Collective working session – 28th March 2025',
    url: '#',
    lang: 'en-GB'
  },
  {
    id: '2',
    tags: ['Events', 'D! UK'],
    date: '06.12.2024, 02 PM:30',
    title: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
    description: 'Design Declares\' November Event Challenges Perspectives on Sustainability and Innovation',
    url: '#',
    lang: 'en-GB'
  }
];

const LatestSection: React.FC = () => {
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
              <h2 className="text-2xl font-semibold text-white">Latest</h2>
            </div>
          </div>

            {/* Content */}
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="space-y-12 opacity-100 transform-none">
                <div className="space-y-16">
                  {articles.map((article) => (
                    <div key={article.id} className="opacity-100 transform-none">
                      <article 
                        className="grid grid-cols-12 gap-x-8 space-y-4 group  p-6 -m-6 rounded-lg"
                        lang={article.lang}
                      >
                        {/* Tags and Date */}
                        <div className="col-span-12 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                          {article.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-gray-800 text-gray-400 "
                            >
                              {tag}
                            </span>
                          ))}
                          <span className="text-xs font-semibold text-gray-500">
                            {article.date}
                          </span>
                        </div>

                        {/* Title */}
                        <div className="col-span-12 lg:col-span-6">
                          <h2 className="text-xl md:text-3xl leading-tight transition-colors ">
                            {article.title}
                          </h2>
                        </div>

                        {/* Description and Link */}
                        <div className="col-span-12 space-y-4 lg:col-span-6">
                          <p className="text-gray-400 leading-relaxed">
                            {article.description}
                          </p>
                          <a 
                            className="group/link relative w-fit underline transition-colors "
                            href={article.url}
                          >
                            Read story
                            {/* <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" /> */}
                          </a>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>

                {/* See All Button */}
                <div className="opacity-100 transform-none">
                  <a 
                    className="group h-full font-medium relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-all duration-300 md:max-w-fit md:py-4 border border-transparent bg-gray-300 text-black hover:bg-orange-600 "
                    href="/latest"
                  >
                    <span className="relative z-10 text-xl">See all the latest</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 "></div>
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

export default LatestSection;