// Reusable FrameworkCard Component
interface FrameworkCardProps {
  image: string;
  name: string;
}

const FrameworkCard: React.FC<FrameworkCardProps> = ({ image, name }) => (
  <div className="lg:w-1/2 w-full bg-gray-200 rounded-md p-10 mb-4">
    <div className="flex items-center justify-center">
      <img src={image} alt={name} className="w-[200px] h-[200px] mb-2" />
    </div>
    <p className="text-center font-bold text-gray-800">{name}</p>
  </div>
);

const Frameworks = () => {
  // Frameworks data
  const frameworksRow1 = [
    { name: "Vue", image: "/images/vue.svg" },
    { name: "Next", image: "/images/next.svg" },
    { name: "Gatsby", image: "/images/gatsby.png" },
  ];

  const frameworksRow2 = [
    { name: "React", image: "/images/react.svg" },
    { name: "React Native", image: "/images/react.svg" },
    { name: "Svelte", image: "/images/svelte.png" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto py-20">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl text-center mb-2">
          Available JavaScript Frameworks
        </h1>
        <p className="mt-4 text-lg text-gray-600 mb-8 text-center mx-4">
          Dive into projects organized by different JavaScript frameworks, each
          offering a unique perspective and set of tools
        </p>
        {/* First Row */}
        <div className="lg:flex lg:flex-row flex-col  justify-between items-center gap-5 lg:mx-10 mx-4 lg:mb-4">
          {frameworksRow1.map((framework, index) => (
            <FrameworkCard
              key={index}
              image={framework.image}
              name={framework.name}
            />
          ))}
        </div>
        {/* Second Row */}
        <div className="lg:flex lg:flex-row flex-col justify-between items-center gap-5  lg:mx-10 mx-4 lg:mb-4">
          {frameworksRow2.map((framework, index) => (
            <FrameworkCard
              key={index}
              image={framework.image}
              name={framework.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
