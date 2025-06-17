import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <main className="relative z-[1] -mb-8 rounded-b-[2rem] bg-black pb-48">
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
      <div>
        
        <h1 className="sr-only">About</h1>
        
        {/* About Design Declares Section */}
        <section id="about" className="px-6 md:px-12 py-32 first-of-type:pt-4 last-of-type:pb-4">
          <div className=" mx-auto">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
              {/* Left column - Sticky title */}
              <div className="col-span-12 lg:col-span-4">
                <div className="md:sticky md:top-8">
                  <h2 className="text-2xl font-semibold text-white">About Design Declares</h2>
                </div>
              </div>
              
              {/* Right column - Content */}
              <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                <div className="space-y-12">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    Climate breakdown has begun. And business as usual is not an option.
                  </h2>
                  
                  <p className="text-xl leading-relaxed text-gray-300">
                    <strong>That's why we started Design Declares.</strong>
                  </p>
                  
                  <p className="text-xl leading-relaxed text-gray-300">
                    Inspired by a global declaration movement sounding the alarm in industries everywhere, we're an industry-recognised initiative representing the fears, hopes and commitment to action of a growing group of designers, design studios, agencies and institutions.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="/"
                      className="group relative flex w-full md:max-w-fit items-center justify-center rounded-full px-6 py-3 md:py-4 text-center transition-colors bg-white text-black hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black font-medium"
                    >
                      See Global Declarations
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p className="text-gray-300 leading-relaxed">
                        Together, we sit at the very beginning of the creative process. The tools we use and the choices we make can influence society's behaviour, change economies and challenge everything that's come before.
                      </p>
                    </div>
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p className="text-gray-300 leading-relaxed">
                        Because design, whether it's a product, a piece of packaging or an exhibition space, has impact. It's up to us whether that impact is harmful or healing.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We're glad you're here. Let's get to work.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="/#declaration"
                      className="group relative flex w-full md:max-w-fit items-center justify-center rounded-full px-6 py-3 md:py-4 text-center transition-colors bg-white text-black hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black font-medium"
                    >
                      Declare Emergency Now
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <ul className="space-y-1 text-gray-300 leading-relaxed list-disc pl-4">
                        <li>Design Declares is free.</li>
                        <li>'Design' to us means industrial, digital, graphic, communication and service design.</li>
                        <li>Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.</li>
                        <li>Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients.</li>
                      </ul>
                    </div>
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <ul className="space-y-1 text-gray-300 leading-relaxed list-disc pl-4">
                        <li>We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site.</li>
                        <li>As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Partnerships Section */}
        <section className="px-6 md:px-12 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
              {/* Left column - Sticky title */}
              <div className="col-span-12 lg:col-span-4">
                <div className="md:sticky md:top-8">
                  <h2 className="text-2xl font-semibold text-white">Global Partnerships</h2>
                </div>
              </div>
              
              {/* Right column - Content */}
              <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                <div className="space-y-12">
                  <p className="text-xl leading-relaxed text-gray-300">
                    We invite our colleagues from across the design industry to join us in declaring an emergency, and starting to take urgent action.*
                  </p>
                  
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p className="text-gray-300 leading-relaxed">
                        The acts of emergency above are the first (big) steps. As we all commit to this work, we must also commit to doing it in a way that is genuinely inclusive and equitable.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        It doesn't matter where on the journey you are. What matters is that you're here, and you're ready to do the work. Because there is no design on a dead planet.
                      </p>
                    </div>
                    <div className="col-span-2 space-y-4 xl:col-span-1">
                      <p className="text-gray-300 leading-relaxed">
                        *We are actively seeking partnerships to expand Design Declares around the world. If that sounds like something you're interested in, please get in touch.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Join our list of global partners...
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {/* <a href="/" className="inline w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black">UK</a>, <a href="/" className=\"inline w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black">Ireland</a>, <a href="/" className=\"inline w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black">Brazil</a>, <a href="/" className=\"inline w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black">Australia</a> */}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="/contact"
                      className="group relative flex w-full md:max-w-fit items-center justify-center rounded-full px-6 py-3 md:py-4 text-center transition-colors bg-white text-black hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black font-medium"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Designers Behind Section */}
        <section className="px-6 md:px-12 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
              {/* Left column - Sticky title */}
              <div className="col-span-12 lg:col-span-4">
                <div className="md:sticky md:top-8">
                  <h2 className="text-2xl font-semibold text-white">The Designers Behind Design Declares UK</h2>
                </div>
              </div>
              
              {/* Right column - Content */}
              <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                <div className="space-y-12">
                  <p className="text-gray-300 leading-relaxed">
                    Inspired by the global emergency declaration movement demanding accountability and action across industries, Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe in the power of design to change things.
                  </p>
                  
                  {/* Partner Logos Grid */}
                  <div className="grid grid-cols-2 gap-x-16 gap-y-24">
                    <div className="flex items-center col-span-1">
                      <a
                        href="https://www.designforlife.earth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black block"
                        aria-label="Go to Design for Life's website"
                      >
                        <div className="flex h-auto w-full flex-col items-center justify-center">
                          <div className="relative flex aspect-auto h-full max-h-14 w-full max-w-44">
                            <img
                              alt="Logo for Design for Life"
                              loading="lazy"
                              width="290"
                              height="56"
                              className="block object-contain object-left text-white"
                              src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Feef6913e335c69e4b094a1eb32b5d1203c4840ae-290x56.svg%3Fmax-w%3D1440&w=1080&q=75"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    
                    <div className="flex items-center col-span-1">
                      <a
                        href="https://driftime.media"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black block"
                        aria-label="Go to Driftime®'s website"
                      >
                        <div className="flex h-auto w-full flex-col items-center justify-center">
                          <div className="relative flex aspect-auto h-full max-h-14 w-full max-w-44">
                            <img
                              alt="Logo for Driftime®"
                              loading="lazy"
                              width="166"
                              height="32"
                              className="block object-contain object-left text-white"
                              src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Ffe235f0c24f5465498ea9ba83e7eff983961a427-166x32.svg%3Fmax-w%3D1440&w=1080&q=75"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    
                    <div className="flex items-center col-span-1">
                      <a
                        href="https://www.morrama.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black block"
                        aria-label="Go to Morroma's website"
                      >
                        <div className="flex h-auto w-full flex-col items-center justify-center">
                          <div className="relative flex aspect-auto h-full max-h-14 w-full max-w-44">
                            <img
                              alt="Logo for Morroma"
                              loading="lazy"
                              width="196"
                              height="24"
                              className="block object-contain object-left text-white"
                              src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Fa03a37e4a4bcd8745ee6d7930573174bf13d23ac-196x24.svg%3Fmax-w%3D1440&w=1080&q=75"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    
                    <div className="flex items-center col-span-1">
                      <a
                        href="https://www.studiowood.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black block"
                        aria-label="Go to Studio Wood's website"
                      >
                        <div className="flex h-auto w-full flex-col items-center justify-center">
                          <div className="relative flex aspect-auto h-full max-h-14 w-full max-w-44">
                            <img
                              alt="Logo for Studio Wood"
                              loading="lazy"
                              width="271"
                              height="40"
                              className="block object-contain object-left text-white"
                              src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F73ad4f9a263d71dc223c588ecd5a2fce66561626-271x40.svg%3Fmax-w%3D1440&w=1080&q=75"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    
                    <div className="flex items-center col-span-1">
                      <a
                        href="https://thomasmatthews.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black block"
                        aria-label="Go to Thomas.Matthews's website"
                      >
                        <div className="flex h-auto w-full flex-col items-center justify-center">
                          <div className="relative flex aspect-auto h-full max-h-14 w-full max-w-44">
                            <img
                              alt="Logo for Thomas.Matthews"
                              loading="lazy"
                              width="241"
                              height="64"
                              className="block object-contain object-left text-white"
                              src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Fada25b334eb920fc0aebf096e6c61b87282868b2-241x64.svg%3Fmax-w%3D1440&w=1080&q=75"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    
                    <div className="flex items-center col-span-1">
                      <a
                        href="https://urgecollective.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-fit underline transition-colors hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-black block"
                        aria-label="Go to URGE Collective's website"
                      >
                        <div className="flex h-auto w-full flex-col items-center justify-center">
                          <div className="relative flex aspect-auto h-full max-h-14 w-full max-w-44">
                            <img
                              alt="Logo for URGE Collective"
                              loading="lazy"
                              width="132"
                              height="72"
                              className="block object-contain object-left text-white"
                              src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F69be8518748504b11342c7937965574bd6d7493e-132x72.svg%3Fmax-w%3D1440&w=1080&q=75"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steering Group Section */}
        <section className="px-6 md:px-12 pt-24 pb-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
              {/* Left column - Sticky title */}
              <div className="col-span-12 lg:col-span-4">
                <div className="md:sticky md:top-8">
                  <h2 className="text-2xl font-semibold text-white">Steering Group</h2>
                </div>
              </div>
              
              {/* Right column - Content */}
              <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto md:grid md:grid-cols-12">
                  <div className="space-y-3 w-[50vw] flex-shrink-0 snap-center md:col-span-3 md:w-auto">
                    <div className="flex h-auto w-full flex-col items-center justify-center">
                      <div className="relative h-full w-full contrast-[1.1] grayscale">
                        <img
                          alt="Photograph of Abb-d Taiyo"
                          loading="lazy"
                          width="600"
                          height="800"
                          className="block object-cover object-center"
                          src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F735f5280c655e648d271314df15d7bd130219f48-1024x1536.jpg%3Frect%3D303%2C233%2C487%2C649%26w%3D600%26h%3D800%26max-w%3D1440&w=1080&q=75"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-white">Abb-d Taiyo</p>
                      <p className="text-sm text-gray-400">Driftime®</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 w-[50vw] flex-shrink-0 snap-center md:col-span-3 md:w-auto">
                    <div className="flex h-auto w-full flex-col items-center justify-center">
                      <div className="relative h-full w-full contrast-[1.1] grayscale">
                        <img
                          alt="Photograph of Alexie Sommer"
                          loading="lazy"
                          width="600"
                          height="800"
                          className="block object-cover object-center"
                          src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F5c2fba0be083af622957e8b41729c278a9f3a597-1024x1427.jpg%3Frect%3D0%2C0%2C1024%2C1365%26w%3D600%26h%3D800%26max-w%3D1440&w=1080&q=75"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-white">Alexie Sommer</p>
                      <p className="text-sm text-gray-400">URGE Collective</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 w-[50vw] flex-shrink-0 snap-center md:col-span-3 md:w-auto">
                    <div className="flex h-auto w-full flex-col items-center justify-center">
                      <div className="relative h-full w-full contrast-[1.1] grayscale">
                        <img
                          alt="Photograph of Aurelie Lionet"
                          loading="lazy"
                          width="600"
                          height="800"
                          className="block object-cover object-center"
                          src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F36397c01986187debcc53073347368138cd46a86-1024x683.jpg%3Frect%3D380%2C246%2C328%2C437%26w%3D600%26h%3D800%26max-w%3D1440&w=1080&q=75"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-white">Aurelie Lionet</p>
                      <p className="text-sm text-gray-400">Design for Life</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 w-[50vw] flex-shrink-0 snap-center md:col-span-3 md:w-auto">
                    <div className="flex h-auto w-full flex-col items-center justify-center">
                      <div className="relative h-full w-full contrast-[1.1] grayscale">
                        <img
                          alt="Photograph of Jo Barnard"
                          loading="lazy"
                          width="600"
                          height="800"
                          className="block object-cover object-center"
                          src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2Fe67cf8253e3f5fa3d6fe575bd89abbda3d6c0d96-1024x926.jpg%3Frect%3D232%2C129%2C598%2C797%26w%3D600%26h%3D800%26max-w%3D1440&w=1080&q=75"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-white">Jo Barnard</p>
                      <p className="text-sm text-gray-400">Morrama</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </motion.div>
    </main>
  );
};

export default AboutSection;