interface CrewHeaderProps {
  header: {
    type?: string;
    title: string;
    subtitle?: string;
  };
}

const CrewHeader = ({ header }: CrewHeaderProps) => {
  return (
    <div className="w-screen pt-[47px]  pb-[42px] bg-white flex flex-col items-center mb-[57px]">
      {header.type && <h2 className="mb-[52px]">{header.type}</h2>}
      <h1 className="font-bold text-3xl mb-[20px]">{header.title}</h1>
      {header.subtitle && (
        <h3 className="text-lg font-bold">{header.subtitle}</h3>
      )}
    </div>
  );
};

export default CrewHeader;
