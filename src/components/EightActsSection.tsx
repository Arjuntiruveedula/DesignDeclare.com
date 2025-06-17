import React from 'react';
import {motion} from 'framer-motion';

interface ActCardProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ActCard: React.FC<ActCardProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="group">
      
      <div className="flex items-center border border-black">
        <h3 className="flex w-full leading-none text-black text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="flex w-14 h-14 md:w-20 md:h-20 flex-shrink-0 items-center justify-center tabular-nums text-4xl md:text-6xl font-medium border-r border-black">
  {number}
</span>



          <span className="flex w-full items-center border-l border-black p-2 text-xl md:text-2xl lg:text-5xl">
            {title}
          </span>
        </h3>
      </div>
      <div className={`flex border-x border-black p-2 pb-10 md:p-4 ${isLast ? 'border-b' : ''}`}>
        <div className="text-black text-lg">
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const EightActsSection: React.FC = () => {
  const acts = [
    {
      number: 1,
      title: "Sound the Alarm",
      description: "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice."
    },
    {
      number: 2,
      title: "Start the Journey",
      description: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start."
    },
    {
      number: 3,
      title: "Bring Clients with Us",
      description: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress."
    },
    {
      number: 4,
      title: "Measure What We Make",
      description: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out."
    },
    {
      number: 5,
      title: "Redefine 'Good'",
      description: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards."
    },
    {
      number: 6,
      title: "Educate, Accelerate",
      description: "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry."
    },
    {
      number: 7,
      title: "Design for Justice",
      description: "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world."
    },
    {
      number: 8,
      title: "Amplify Voices for Change",
      description: "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change."
    }
  ];

  return (
    <section className="px-6 md:px-12 py-32 bg-black text-white">
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
              <h2 className="text-2xl font-semibold text-white">8 Acts of Emergency</h2>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              {/* Introduction text */}
              <p className="text-xl leading-relaxed text-gray-300">
                What does it take to Declare? It's accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
              </p>
              
              {/* Acts cards */}
              <div className="space-y-0">
                <div className="bg-gray-200 text-black">
                  {acts.map((act, index) => (
                    <ActCard
                      key={act.number}
                      number={act.number}
                      title={act.title}
                      description={act.description}
                      isLast={index === acts.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export default EightActsSection;