'use client';

import { MY_PAGE } from 'constants/mypage';
import InfoBox from '../profile/InfoBox';
import Button from 'components/common/Button';
import { useRouter } from 'next/navigation';

interface InfoBoxContainerProps {
  doubleMajor: string;
  interestFiled: string;
  email: string;
  links: string[];
  selfIntro: string;
  sameUser: boolean;
  userId: number;
}

export const InfoBoxContainer = ({
  doubleMajor,
  interestFiled,
  email,
  links,
  selfIntro,
  sameUser,
  userId,
}: InfoBoxContainerProps) => {
  const router = useRouter();
  const itemList = [doubleMajor, interestFiled, email, links, selfIntro];

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {MY_PAGE.ITEM_LIST.map((item: string, index: number) => (
        <InfoBox
          type={index === 4 ? 'explanation' : 'default'}
          key={item}
          title={item}
          content={itemList[index]}
        />
      ))}
      {sameUser && (
        <Button
          buttonText={MY_PAGE.MODIFY_PROFILE}
          type="userinfo"
          className={`w-[300px] h-[40px] text-zinc-300 text-xs font-semibold relative rounded-[10px] bg-neutral-700 justify-center items-center flex px-8 hover:bg-gradient-to-r from-[#00E0EE] to-[#517EF3] hover:opacity-100`}
          isDisabled={false}
          onClickHandler={() => router.push(`/edit/${userId}`)}
        />
      )}
    </div>
  );
};
