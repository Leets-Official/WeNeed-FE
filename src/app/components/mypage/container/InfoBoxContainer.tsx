import { MY_PAGE } from 'constants/mypage';
import InfoBox from '../profile/InfoBox';

interface InfoBoxContainerProps {
  userInfoItemList: string[];
}

export const InfoBoxContainer = ({
  userInfoItemList,
}: InfoBoxContainerProps) => {
  return (
    <div>
      {MY_PAGE.ITEM_LIST.map((item: string, index: number) => (
        <InfoBox key={index} title={item} content={userInfoItemList[index]} />
      ))}
    </div>
  );
};
