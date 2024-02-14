interface InfoBoxProps {
  title: string;
  content: string;
}

const InfoBox = ({ title, content }: InfoBoxProps) => {
  return (
    <div className="w-[356px] h-[50px] relative rounded-[10px] border border-neutral-400 flex-row justify-between items-center flex px-8">
      <div className="text-white font-semibold">{title}</div>
      <div className="text-right text-white font-semibold">{content}</div>
    </div>
  );
};

export default InfoBox;
