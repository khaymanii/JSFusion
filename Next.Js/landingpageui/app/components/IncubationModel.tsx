import React from "react";
import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ src, alt, children }) => {
  return (
    <div className="w-full md:w-[360px] h-auto md:h-60 bg-white rounded-xl py-4 px-4 flex flex-col justify-between">
      <Image src={src} alt={alt} width={30} height={30} />
      <p className="text-sm md:text-base pt-4 sm:pt-0">{children}</p>
    </div>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  centered = false,
}) => {
  return (
    <div className={`mb-12 mx-4 ${centered ? "text-center" : "sm:text-left"}`}>
      <h1 className="text-xl font-bold pb-2">{title}</h1>
      <p className="text-sm md:text-base">{children}</p>
    </div>
  );
};

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="w-full md:w-80 h-12 rounded-full bg-white flex items-center justify-center mx-2">
      <p className="text-lg font-semibold text-center">{children}</p>
    </div>
  );
};

const IncubationModel: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl mb-16 px-4 text-center">
      <div className="mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4">
          Our Service Incubation Model
        </h1>
        <p className="max-w-4xl mx-auto text-base md:text-lg">
          The Service Incubation Model is an alternate funding model for startup
          that allows professionals to offer their services to the startup in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12-24 months as been first to invest.
        </p>
      </div>

      <Section title="Hypothesis">
        Just a few reasons we know its time for this model within the ecosystem
      </Section>

      <div className="flex flex-col md:flex-row items-center justify-between mx-0 mb-12 space-y-4 md:space-y-0 md:space-x-4 text-left">
        <Card src="/triangle.svg" alt="triangle image">
          Most early-stage companies and pre-product startups cannot afford
          professional services especially those who don’t have family and
          friends’ network that can support
        </Card>
        <Card src="/quad.svg" alt="quad image">
          If startups can seed 5-10% in equity to incubators for $20k to $200k
          funding most times, they will be willing to seed 10% equity for a $25k
          service investment
        </Card>
        <Card src="/pent.svg" alt="pent image">
          Young professionals who don’t have a lot of money to invest nor an
          accredited investors will have opportunities to take equity at the
          early stage of their career, usually been the first to invest and
          almost guaranteed of return
        </Card>
      </div>

      <Section title="Case Study">
        See what Service Incubators get, the maths behind Service Equity (SEEQ)
        and what the value of your share equity can be over time
      </Section>

      <div className="flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0 md:space-x-4">
        <Button>Service Incubator Equity</Button>
        <Button>SEEQ Math Equation</Button>
        <Button>Value of my Equity Over Time</Button>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <p className="font-bold underline mr-1">Become A service Incubator</p>
        <span>
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_938_9006)">
              <path
                d="M17.4717 11.5H4.52734M17.4717 11.5L12.3223 6.35065M17.4717 11.5L12.3223 16.6494"
                stroke="#212121"
                stroke-width="2"
                stroke-linecap="square"
              />
            </g>
            <defs>
              <clipPath id="clip0_938_9006">
                <rect
                  width="15.5355"
                  height="15.5355"
                  fill="white"
                  transform="translate(0.015625 11.5) rotate(-45)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default IncubationModel;
