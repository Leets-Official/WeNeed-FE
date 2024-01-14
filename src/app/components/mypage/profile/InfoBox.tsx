interface InfoBoxProps {
  title: string;
  content: string;
}

const InfoBox = ({ title, content }: InfoBoxProps) => {
  return (
    <div className="w-[356px] h-[50px] relative rounded-[10px] border border-neutral-400 flex-row justify-between items-center inline-flex px-8">
      <div className="text-white text-base font-semibold font-['Pretendard']">
        {title}
      </div>
      <div className="text-right text-white text-base font-semibold font-['Pretendard']">
        {content}
      </div>
    </div>
  );
};

export default InfoBox;
