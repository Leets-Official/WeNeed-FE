import { INFOBOX_STYLE } from 'constants/styles';

interface InfoBoxProps {
  title: string;
  content: string | string[];
  type: string;
}

const InfoBox = ({ title, content, type }: InfoBoxProps) => {
  console.log('type : ', type);
  const infoboxStyle = INFOBOX_STYLE.infobox(type);
  const titleStyle = INFOBOX_STYLE.title(type);
  const contentStyle = INFOBOX_STYLE.content(type);

  return (
    <div
      className={`w-[300px] ${infoboxStyle} relative rounded-[10px] border border-neutral-400 justify-between items-center flex px-8`}
    >
      <div className={`${titleStyle} text-white text-xs font-semibold`}>
        {title}
      </div>
      <div className={`${contentStyle} text-white text-xs font-semibold`}>
        {content}
      </div>
    </div>
  );
};

export default InfoBox;
