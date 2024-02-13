interface InfoBoxProps {
  title: string;
  content: string;
}

const InfoBox = ({ title, content }: InfoBoxProps) => {
  return (
    <div className="w-[300px] h-[40px] relative rounded-[10px] border border-neutral-400 flex-row justify-between items-center flex px-8">
      <div className="text-white text-xs font-semibold">{title}</div>
      <div className="text-right text-white text-xs font-semibold">
        {content}
      </div>
    </div>
  );
};

export default InfoBox;
