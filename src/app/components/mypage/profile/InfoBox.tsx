interface InfoBoxProps {
  title: string;
  content: string;
}

const InfoBox = ({ title, content }: InfoBoxProps) => {
  return (
    <div className="w-[356px] h-[50px] relative rounded-[10px] border border-neutral-400 flex-col justify-start items-start inline-flex">
      <div className="w-[83.25px] text-white text-base font-semibold font-['Pretendard']">
        {title}
      </div>
      <div className="w-[47.30px] text-right text-white text-base font-semibold font-['Pretendard']">
        {content}
      </div>
    </div>
  );
};

export default InfoBox;
