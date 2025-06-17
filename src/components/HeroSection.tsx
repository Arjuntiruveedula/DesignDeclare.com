import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col">
      {/* Main content area */}
      <div className="flex-1 px-6 py-8 md:px-12 lg:px-16">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left column - Title */}
            <div className="font-headline font-light text-[200px] leading-[0.85] tracking-tight">
          <div  className="text-gray-200">DESIGN</div>
          <div className="text-gray-200">DECLARES</div>
          <div className="text-[#FF5035]">UK</div>
        </div>
            
            {/* Right column - Description */}
            <div className="lg:pt-8">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg">
                Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom right buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-2 z-[9999] pointer-events-auto">
  <button className="bg-gray-200 text-black px-6 py-3 text-lg font-medium flex items-center justify-between min-w-[140px] hover:bg-gray-300 transition-colors shadow-xl">
    <span>Menu</span>
    <span className="text-2xl ml-4">+</span>
  </button>
  <button className="bg-gray-200 text-black px-6 py-3 text-lg font-medium hover:bg-gray-300 transition-colors shadow-xl">
    Declare Now
  </button>
</div>

    </section>
  );
};

export default HeroSection;