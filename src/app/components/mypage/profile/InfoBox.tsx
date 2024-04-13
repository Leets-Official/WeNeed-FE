import { INFOBOX_STYLE } from 'constants/styles';

interface InfoBoxProps {
  title: string;
  content: string | string[];
  type: string;
}

const InfoBox = ({ title, content, type }: InfoBoxProps) => {
  const infoboxStyle = INFOBOX_STYLE.infobox(type);
  const titleStyle = INFOBOX_STYLE.title(type);
  const contentStyle = INFOBOX_STYLE.content(type);

  return (
    <div
      className={`w-[300px] ${infoboxStyle} relative rounded-[10px] border border-neutral-400 justify-between items-center flex px-8`}
    >
      <div
        className={`${titleStyle} w-[20%] relative text-white text-xs font-semibold`}
      >
        {title}
      </div>
      {type === 'links' && (
        <div
          className={`${contentStyle} w-[80%] my-3 relative text-white text-xs font-semibold`}
        >
          {typeof content === 'object' &&
            content.map((link, index) => (
              <div className="my-2" key={link + index}>
                {link}
              </div>
            ))}
        </div>
      )}
      {type !== 'links' && (
        <div className={`${contentStyle} text-white text-xs font-semibold`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default InfoBox;
