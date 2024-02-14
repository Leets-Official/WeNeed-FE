import { MY_PAGE } from 'constants/mypage';
import InfoBox from '../profile/InfoBox';

interface InfoBoxContainerProps {
  userInfoItemList: string[];
}

export const InfoBoxContainer = ({
  userInfoItemList,
}: InfoBoxContainerProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {MY_PAGE.ITEM_LIST.map((item: string, index: number) => (
        <InfoBox
          type={index === 4 ? 'explanation' : 'default'}
          key={index}
          title={item}
          content={userInfoItemList[index]}
        />
      ))}
    </div>
  );
};
