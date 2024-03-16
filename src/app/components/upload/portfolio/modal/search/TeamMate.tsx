'use client';
import Icons from 'components/common/Icons';
import Image from 'next/image';
import { cancelIcon } from 'ui/IconsPath';
import GradientProfileSM from 'ui/gradient/GradientProfileSM';

interface TeamMateProps {
  imageURL: string;
  nickName: string;
  deleteId: () => void;
}

const TeamMate = ({ imageURL, nickName, deleteId }: TeamMateProps) => {
  return (
    <div className="flex w-[auto] h-[37px] gap-x-3 items-center text-[16px] pl-2 pr-3 rounded-[9px] border border-[#00E0EE]">
      {imageURL ? (
        <Image
          src={imageURL}
          alt="profile"
          width="24"
          height="24"
          className="rounded-full"
        />
      ) : (
        <GradientProfileSM />
      )}
      <div className="text-neutral-700 font-semibold">{nickName}</div>
      <Icons onClick={deleteId} name={cancelIcon} className="cursor-pointer" />
    </div>
  );
};

export default TeamMate;
