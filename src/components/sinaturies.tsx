import React,{useState,useEffect} from 'react';
import {motion,useAnimation,useInView} from 'framer-motion';
import { useRef } from 'react';

interface Signatory {
  name: string;
  url: string;
}
interface AnimatedCountProps {
  target: number;
}


interface CountrySection {
  country: string;
  signatories: Signatory[];
}

const ukSignatories: Signatory[] = [
  { name: "21–87", url: "https://21-87.co.uk/" },
  { name: "216 Signs", url: "https://216signs.net/" },
  { name: "31% Wool", url: "https://31percentwool.com/" },
  { name: "400", url: "https://400.co.uk/" },
  { name: "A–Side.", url: "https://a-side.studio/" },
  { name: "Aalia Ahamed", url: "https://www.linkedin.com/in/aaliaahamed/" },
  { name: "Abbie Williams", url: "https://www.abbiewilliamsdesigns.com/" },
  { name: "abc", url: "https://cs/" },
  { name: "ACRE – A Creative Endeavour Ltd", url: "https://acre.studio/" },
  { name: "Active Matter", url: "https://activematter.co/" },
  { name: "ACX", url: "https://arcadia.cx/" },
  { name: "Adele Kelly", url: "https://akcreative.co.uk/" },
  { name: "AdesignStorie", url: "https://www.adesignstorie.com/" },
  { name: "Advocate Design Agency", url: "https://www.advocatedesign.co.uk/" },
  { name: "Aetha Design", url: "https://www.aethadesign.com/" },
  { name: "Aileron Design Ltd", url: "https://www.aileron.design/" },
  { name: "Alan Pitchforth", url: "https://www.alanpitchforth.co.uk/" },
  { name: "Alex Kimber Design", url: "https://alexkimberdesign.co.uk/" },
  { name: "Alexander Miller", url: "https://alexandermiller.co/" },
  { name: "Alexandra Lunn Studio", url: "https://www.alexandralunn.com/" },
  { name: "Alexie Sommer", url: "https://www.alexiesommer.com/" },
  { name: "Alexis Bardini", url: "https://www.alexisbardini.com/" },
  { name: "Ali Adair", url: "https://aliadair.co.uk/" },
  { name: "Andrew Carr", url: "https://na/" },
  { name: "ANdy Parker", url: "https://theuxcoach.com/" },
  { name: "Andy Thornton", url: "https://www.linkedin.com/in/thorntonandy/" },
  { name: "Anja Klüver", url: "https://www.kluver.works/" },
  { name: "Annabelle Vuille", url: "https://www.behance.net/annabellevuille1" },
  { name: "Apfel", url: "https://apracticeforeverydaylife.com/" },
  { name: "Applied Works", url: "https://applied.works/" },
  { name: "Archetype Accessories", url: "https://www.archetypeaccessories.com/" },
  { name: "Arif Yusop", url: "https://www.arifyusop.com/" },
  { name: "Arrival", url: "https://arrival.com/uk/en" },
  { name: "Avery & Brown", url: "https://www.averyandbrown.com/" },
  { name: "BA (Hons) Design for Sustainable Futures at Arts University Bournemouth", url: "https://aub.ac.uk/course/design-for-sustainable-futures" },
  { name: "BA Graphic Design at Kingston School of Art", url: "https://www.kingston.ac.uk/undergraduate/courses/graphic-design/" },
  { name: "Badfish Labs", url: "https://www.badfishlabs.com/" },
  { name: "Baines Design LTD", url: "https://www.lukebaines.co.uk/" },
  { name: "Barbara Chandler", url: "https://www.greengrads.co.uk/" },
  { name: "Barry Bloye", url: "https://barrybloye.co.uk/" },
  { name: "Batch.Works", url: "https://www.batch.works/" },
  { name: "Baxter & Bailey", url: "https://baxterandbailey.co.uk/" },
  { name: "Be The Future", url: "https://bethefuture.earth/" },
  { name: "Beco", url: "https://www.becopets.com/" },
  { name: "Beehive Green", url: "https://beehivegreen.com/" },
  { name: "Ben Clarke", url: "https://bnclarke.com/" },
  { name: "Ben Jessop", url: "https://instagram.com/b.jdesigns" },
  { name: "Bencium Limited", url: "https://www.bencium.co.uk/" },
  { name: "Benedict Povey", url: "https://www.benedictpovey.com/" },
  { name: "Beta Design Office", url: "https://betadesignoffice.com/" },
  { name: "BIB Design", url: "https://www.bibdesign.com/" },
  { name: "big fish", url: "https://bigfish.co.uk/" },
  { name: "Big Motive", url: "https://www.bigmotive.com/" },
  { name: "Bill Searle", url: "https://www.imaginationfactory.co.uk/" },
  { name: "Biomimicry Innovation Lab", url: "https://www.biomimicryinnovationlab.com/" },
  { name: "Bliss", url: "https://www.thissibliss.com/" },
  { name: "Blunt Crayon", url: "https://bluntcrayon.com/" },
  { name: "Bold Studio", url: "https://bold-studio.co.uk/" },
  { name: "Boyle & Perks", url: "https://boyleperks.com/" },
  { name: "Brand Narrative at Pentagram", url: "http://www.pentagram.com/" },
  { name: "Bravand", url: "https://bravand.com/" },
  { name: "Breezign", url: "https://www.breezign.co.uk/" },
  { name: "Bright Signals Design at Bright Signals Ltd.", url: "https://brightsignals.co.uk/" },
  { name: "Broadley Creative Ltd", url: "https://broadleycreative.co.uk/" },
  { name: "Bronwen Rees", url: "https://www.instagram.com/thebronblog/?hl=en" },
  { name: "Buff Motion", url: "https://www.buffmotion.com/" },
  { name: "Butterfly", url: "https://www.butterfly-air.com/" },
  { name: "BuyDesign", url: "https://buydesign.com/" }
];

const globalSupporters: CountrySection[] = [
  {
    country: "Australia",
    signatories: [
      { name: "Alena Smith Interior Design", url: "http://www.alenasmith.com.au/" },
      { name: "Andrew Sloan", url: "https://www.andrewsloan.com.au/" },
      { name: "Andrew Vaughan", url: "https://www.designshow.com.au/" },
      { name: "Andy Marks", url: "https://www.linkedin.com/company/symbioceneinstitute/" },
      { name: "Arielle Breit", url: "http://www.linkedin.com/in/arielle-breit" },
      { name: "Art Disrupt", url: "https://artdisrupt.com/" },
      { name: "Austin Smidt", url: "http://renystudio.com/austin" },
      { name: "AUTHENTIC DESIGN ALLIANCE (ADA)", url: "https://authenticdesignalliance.org/" },
      { name: "Ben Rennie", url: "https://benrennie.design/" },
      { name: "BETTER FUTURE", url: "https://betterfuture.design/" }
    ]
  },
  {
    country: "United States",
    signatories: [
      { name: "2911 Creative LLC d/b/a Missionspring Studio", url: "https://missionspringstudio.com/" },
      { name: "76West", url: "https://www.76west.agency/" },
      { name: "Amanda Bauer", url: "https://amandapbauer.com/" },
      { name: "Analogy", url: "https://analogyworldwide.com/" },
      { name: "Angeline Neo", url: "https://www.angelineneo.com/" },
      { name: "Autumn Dahlia Creative Services LLC", url: "https://www.autumndahliadesign.com/" },
      { name: "Box Clever", url: "https://www.bxclvr.com/" },
      { name: "Brayan", url: "https://www.brayanpabon.com/" },
      { name: "Business4Today.com", url: "https://business4today.com/" },
      { name: "Chameleon Studios", url: "https://chamstudios.com/" }
    ]
  },
  {
    country: "Germany",
    signatories: [
      { name: "Amarjith Sreekumar", url: "https://www.instagram.com/amar___jith/" },
      { name: "andreas popp", url: "https://supersoon.net/" },
      { name: "Ashley Scarborough", url: "https://www.ashleyscarborough.com/" },
      { name: "Bendcircular", url: "https://www.bendcircular.com/" },
      { name: "Bureau Braun", url: "https://bureaubraun.de/" },
      { name: "Gloria Ciceri", url: "https://www.gloriaciceri.com/" },
      { name: "hoch E", url: "https://hoch-e.com/" },
      { name: "JDS", url: "https://jonieldasilva.com/" },
      { name: "Jessica Metro", url: "http://www.jessicametro.com/" },
      { name: "Joshua Stehr", url: "https://joshuastehr.com/" }
    ]
  }
];

const AnimatedCount: React.FC<AnimatedCountProps> = ({ target }) => {
  const [count, setCount] = useState(500);
  // const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const current = Math.floor(start + (target - start) * progress);
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
    };
    requestAnimationFrame(animate);
  }
  }, [isInView, target]);

  return (
        <span ref={ref}>{count}</span>

  );
};


 const SignatoriesSection: React.FC = () => {
  return (
    <section className="px-6 md:px-8 py-32 first:pt-8 last:pb-8 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="mx-auto"
      >
      <div className=" mx-auto">
        <div className="opacity-100 transform-none">
          <div className="space-y-12">
            {/* UK Signatories */}
            <div className="space-y-12">
              <div>
              <div className="flex items-baseline text-6xl text-white mb-4">
  <span>#</span>
  <AnimatedCount target={513} />
</div>

                 
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-3xl md:text-4xl  text-white">Signatories and counting in </span>
                  <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs  transition-colors bg-orange-600 text-black">
                    D! UK
                  </span>
                </span>
              </div>

              <div className="columns-3 sm:columns-4 lg:columns-6 gap-4 space-y-1">
                {ukSignatories.map((signatory, index) => (
                  <a
                    key={index}
                    className="block max-w-fit text-xs font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200 break-inside-avoid mb-1"
                    href={signatory.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Go to ${signatory.name}'s website.`}
                  >
                    {signatory.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Global Supporters */}
            <div>
              <div className="flex items-baseline text-6xl text-white mb-4">
  <span>#</span>
  <AnimatedCount target={633} />
</div>
              <h2 className="text-3xl md:text-4xl  text-white mb-8">Global Supporters</h2>
            </div>

            <div className="columns-3 sm:columns-4 lg:columns-6 gap-4 space-y-4">
              {globalSupporters.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6 break-inside-avoid">
                  <h3 className="text-xs font-bold text-white mb-2">{section.country}</h3>
                  <div className="space-y-1">
                    {section.signatories.map((signatory, index) => (
                      <a
                        key={index}
                        className="block max-w-fit text-xs font-medium text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                        href={signatory.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Go to ${signatory.name}'s website.`}
                      >
                        {signatory.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default SignatoriesSection;