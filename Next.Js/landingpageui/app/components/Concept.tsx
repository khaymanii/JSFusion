import React from "react";
interface FocusAreaCardProps {
  title: string;
  description: string;
}

const FocusAreaCard = ({ title, description }: FocusAreaCardProps) => (
  <div className="w-full sm:w-80 h-52 rounded-xl bg-white px-4 py-4 text-center flex flex-col justify-between">
    <h1 className="font-bold pb-2">{title}</h1>
    <p>{description}</p>
  </div>
);

const Concept = () => {
  const focusAreas = [
    {
      title: "Service Incubator",
      description:
        "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
    },
    {
      title: "Virtualting",
      description:
        "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource",
    },
    {
      title: "Diiming",
      description:
        "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl mb-16">
      <div className="mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4">
          Our Concept Innovation
        </h1>
        <p className="text-base md:text-lg">
          We have proprietary concept innovations that will support the startup
          ecosystem, <br /> support solution-providers/entrepreneurs and
          ultimately help democratize success;
        </p>
      </div>
      <div className="flex flex-wrap  justify-between gap-6 sm:gap-20 mx-4">
        {focusAreas.map((area) => (
          <FocusAreaCard
            key={area.title}
            title={area.title}
            description={area.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Concept;
