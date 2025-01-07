import React from "react";

interface FocusAreaProps {
  number: string;
  title: string;
  bgColor: string;
}

const FocusAreaCard: React.FC<FocusAreaProps> = ({
  number,
  title,
  bgColor,
}) => (
  <div
    className={`w-full ${bgColor} text-white flex flex-col justify-between px-6 py-6`}
  >
    <p className="text-lg font-bold pb-0 sm:pb-16">{number}</p>
    <p className="text-lg">{title}</p>
  </div>
);

const AreaOfFocus: React.FC = () => {
  const focusAreas = [
    {
      number: "01",
      title: "Business Support & Incubation",
      bgColor: "bg-black",
    },
    {
      number: "02",
      title: "On-Demand and As-A-Service",
      bgColor: "bg-orange-500",
    },
    {
      number: "03",
      title: "Marketplace & Crowdsourcing",
      bgColor: "bg-pink-500",
    },
    {
      number: "04",
      title: "Aggregation & Shared Economy",
      bgColor: "bg-cyan-500",
    },
    {
      number: "05",
      title: "Decentralized Economy & Digital Assets",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl mb-16">
      <div className="mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4">
          Our Area of Focus
        </h1>
        <p className="text-base md:text-lg">
          In our quest to help make success available to everyone, we have
          initial strategic direction <br /> to focus on these five key areas at
          the lab
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mx-4">
        {focusAreas.map((area) => (
          <FocusAreaCard
            key={area.number}
            number={area.number}
            title={area.title}
            bgColor={area.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default AreaOfFocus;
