import Icons from 'components/common/Icons';
import Image from 'next/image';
import { cancelIcon } from 'ui/IconsPath';

interface TeamMateProps {
  imageURL: string;
  nickName: string;
}

const TeamMate = ({ imageURL, nickName }: TeamMateProps) => {
  return (
    <div className="flex w-[auto] h-[37px] gap-x-3 items-center text-[16px] pl-2 pr-3 rounded-[9px] border border-[#00E0EE]">
      <Image
        src={imageURL}
        alt="프로필"
        width="24"
        height="24"
        className="rounded-[24px]"
      />
      <div className="text-neutral-700 font-semibold">{nickName}</div>
      <Icons name={cancelIcon} className="cursor-pointer" />
    </div>
  );
};

export default TeamMate;
