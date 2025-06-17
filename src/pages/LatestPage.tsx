import React, { useState } from 'react';
import {motion} from 'framer-motion';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  chapter: string;
  date: string;
  time: string;
  image: string;
  href: string;
  lang: string;
}

interface FilterButtonProps {
  value: string;
  label: string;
  isSelected: boolean;
  onClick: (value: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ value, label, isSelected, onClick }) => {
  return (
    <label className="no-focus group/focus group cursor-pointer">
      <span className="sr-only">
        <input
          type="radio"
          value={value}
          checked={isSelected}
          onChange={() => onClick(value)}
        />
      </span>
      <span className={`inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black ${
        isSelected 
          ? 'bg-orange-600 text-black' 
          : 'bg-gray-800 text-gray-400 hover:bg-white hover:text-black'
      }`}>
        {label}
      </span>
    </label>
  );
};

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="opacity-100 transform-none">
      <a
        href={article.href}
        className="group relative transition-colors block h-full w-full focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black"
      >
        <article className="grid grid-cols-12 gap-y-6 md:gap-x-8" lang={article.lang}>
          <div className="relative col-span-12 max-w-md overflow-hidden xl:col-span-6">
            <figure className="flex h-auto w-full flex-col items-center justify-center">
              <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                <img
                  alt=""
                  loading="lazy"
                  width="1080"
                  height="1080"
                  className="block object-cover object-center"
                  src={article.image}
                />
              </div>
            </figure>
          </div>
          <div className="col-span-12 space-y-4 xl:col-span-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs  bg-gray-800 text-gray-400">
                {article.category}
              </span>
              <span className="inline-block max-w-fit rounded-full px-3 py-1 text-lg  bg-gray-800 text-gray-400">
                {article.chapter}
              </span>
              <span className="text-xs font-semibold">
                {article.date}, {article.time}
              </span>
            </div>
            <h2 className="text-gray-300 text-xl md:text-3xl leading-tight">
              {article.title}
            </h2>
            <p className="text-gray-400  leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </article>
      </a>
    </div>
  );
};

const LatestSectionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedChapter, setSelectedChapter] = useState('all');

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'Events', label: 'Events' },
    { value: 'Case Studies', label: 'Case Studies' },
    { value: 'Updates', label: 'Updates' },
    { value: 'Perspective', label: 'Perspective' }
  ];

  const chapters = [
    { value: 'all', label: 'All' },
    { value: 'uk', label: 'D! UK' },
    { value: 'ie', label: 'D! Ireland' },
    { value: 'au', label: 'D! Australia' }
  ];

  const articles: Article[] = [
    {
      id: '1',
      title: 'Embedding Sustainability in the Design Curriculum',
      excerpt: 'Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design\'s curriculum for BA Graphic Design students.',
      category: 'Case Studies',
      chapter: 'D! Ireland',
      date: '30.04.2025',
      time: '04 PM:30',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F3xff4iuw%2Fproduction%2Fd23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-IE'
    },
    {
      id: '2',
      title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
      excerpt: 'Recap: SD4P Collective working session – 28th March 2025',
      category: 'Events',
      chapter: 'D! UK',
      date: '24.04.2025',
      time: '03 PM:30',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F1012aa8c47395cb7ffbb2892f27a6ca6c33c996b-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-GB'
    },
    {
      id: '3',
      title: 'Sasha Titchkosky Interview',
      excerpt: 'An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky',
      category: 'Perspective',
      chapter: 'D! Australia',
      date: '18.12.2024',
      time: '08 AM:38',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6sp3gm8t%2Fproduction%2F9d6e15d759ea86a10645893c3dcf0d4df49e31d2-720x400.jpg%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-AU'
    },
    {
      id: '4',
      title: 'Andrew Simpson Interview',
      excerpt: 'An Interview with Vert Design and Design Declares Australia CEO - Andrew Simpson',
      category: 'Perspective',
      chapter: 'D! Australia',
      date: '10.12.2024',
      time: '08 AM:37',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6sp3gm8t%2Fproduction%2F03289f2160b618b109516378b8c9e99ba2599187-2500x1667.jpg%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-AU'
    },
    {
      id: '5',
      title: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
      excerpt: 'Design Declares\' November Event Challenges Perspectives on Sustainability and Innovation',
      category: 'Events',
      chapter: 'D! UK',
      date: '06.12.2024',
      time: '02 PM:30',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Fc14ec32bdd174e2b1aae209822310319b860ef51-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-GB'
    },
    {
      id: '6',
      title: 'D! June Event Recap',
      excerpt: 'Design Declares has always been about people. From the moment that Design Council CDO Cat Drew introduced Alexie Sommer and Jo Barnard back in 2022, followed by Abb-d Taiyo and Aurelie Lionet coming onboard and aligning to the vision, we knew Design Declares was something special.',
      category: 'Events',
      chapter: 'D! UK',
      date: '27.06.2024',
      time: '04 PM:30',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Fba178a2b2d9ed8715531c2bb746228599bfc48e0-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-GB'
    },
    {
      id: '7',
      title: 'Reducing Website Carbon Emissions',
      excerpt: 'In an industry first, MEK have documented exactly how they approached and solved this challenge so they can inspire others to do the same and help businesses transition to sustainable digital practices.',
      category: 'Case Studies',
      chapter: 'D! UK',
      date: '26.06.2024',
      time: '02 PM:30',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F33e1b9504479bab9a9d143374785e79bc504627a-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-GB'
    },
    {
      id: '8',
      title: 'Creative Climate Investigations',
      excerpt: 'A showcase of 8 projects exploring greenwashing, air quality, environmental effects on wellbeing, plastic, the ecological impacts of data harvesting, trees, global dimming, and green spaces, collected together for the first time in a thoughtfully designed limited-edition book.',
      category: 'Case Studies',
      chapter: 'D! UK',
      date: '01.01.2024',
      time: '07 PM:30',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F10d8eea5aadeb4638261d490a7069f7a41724ca1-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-GB'
    },
    {
      id: '9',
      title: 'Becoming a Community Interest Company',
      excerpt: 'Design Declares has become a certified CIC, a people-powered Community Interest Company with planet-led ambitions.',
      category: 'Updates',
      chapter: 'D! UK',
      date: '04.09.2023',
      time: '04 PM:21',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F99774b6a92236d1cc5815ca49d0881f28f64172a-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-GB'
    },
    {
      id: '10',
      title: 'Connecting climate scientists and design educators together',
      excerpt: 'Climify podcast is to connect climate scientists and design educators together so that we can bring climate-related projects into our classrooms.',
      category: 'Case Studies',
      chapter: 'D! UK',
      date: '11.06.2023',
      time: '09 PM:30',
      image: 'https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F89694fa4a734459f39149f8c22bfeea697f5d795-2160x2160.png%3Fmax-w%3D1440&w=1080&q=75',
      href: '#',
      lang: 'en-GB'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const chapterMatch = selectedChapter === 'all' || 
      (selectedChapter === 'uk' && article.chapter === 'D! UK') ||
      (selectedChapter === 'ie' && article.chapter === 'D! Ireland') ||
      (selectedChapter === 'au' && article.chapter === 'D! Australia');
    
    return categoryMatch && chapterMatch;
  });

  return (
    <main id="latest" className="relative z-[1] -mb-8 rounded-b-[2rem] bg-black pb-48">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="mx-auto"
      >
      <header className="ml-4 py-4 md:px-8 relative z-30">
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
      <section className="px-6 py-4 md:px-12">
        <div className=" mx-auto">
          <div className="opacity-100 transform-none">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
              {/* Left column - Filters */}
              <div className="col-span-12 lg:col-span-4">
                <div className="md:sticky md:top-8">
                  <h1 className="text-2xl font-semibold sr-only">Latest</h1>
                  <div className="space-y-8">
                    {/* Categories Filter */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold text-white">Categories</h2>
                      <div 
                        role="radiogroup" 
                        aria-label="Filter articles by category"
                        className="flex flex-wrap gap-2"
                      >
                        {categories.map((category) => (
                          <FilterButton
                            key={category.value}
                            value={category.value}
                            label={category.label}
                            isSelected={selectedCategory === category.value}
                            onClick={setSelectedCategory}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Chapters Filter */}
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold text-white">View by Chapter</h2>
                      <div 
                        role="radiogroup" 
                        aria-label="Filter articles by chapter"
                        className="flex flex-wrap gap-2"
                      >
                        {chapters.map((chapter) => (
                          <FilterButton
                            key={chapter.value}
                            value={chapter.value}
                            label={chapter.label}
                            isSelected={selectedChapter === chapter.value}
                            onClick={setSelectedChapter}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Articles */}
              <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                <div className="space-y-20">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                  
                  {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-400 text-lg">
                        No articles found matching your filters.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      </motion.div>
    </main>
  );
};

export default LatestSectionPage;