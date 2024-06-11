import React from 'react';
import { FaPhoneAlt, FaSearch, FaRegHandshake, FaUsers, FaPlay } from 'react-icons/fa';

const HowWeWork = () => {
  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: "Contact",
      description: "Send us your project request or project idea."
    },
    {
      icon: <FaSearch />,
      title: "Analysis",
      description: "We will contact you to clarify your project requirements."
    },
    {
      icon: <FaRegHandshake />,
      title: "Proposal",
      description: "We will provide you with our free, non-binding proposal."
    },
    {
      icon: <FaUsers />,
      title: "Team",
      description: "We will allocate a team based on your requirements."
    },
    {
      icon: <FaPlay />,
      title: "Start",
      description: "You will meet the team and we will begin."
    },
  ];

  return (
    <div className="bg-[#f4f7ff] py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1b5bf7] mb-10 text-center">
          How We Work
        </h1>
        <div className="flex flex-wrap justify-around gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-56">
              <div className="text-4xl text-[#1b5bf7] mb-4">{step.icon}</div>
              <p className="text-xl font-semibold text-[#18191f] mb-2">{step.title}</p>
              <p className="text-center text-[#464359]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
