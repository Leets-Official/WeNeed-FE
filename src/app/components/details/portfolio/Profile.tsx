import Icons from 'components/common/Icons';
import Image from 'next/image';
import { view } from 'ui/IconsPath';
import GradientBookmark from 'ui/gradient/GradientBookmark';
import GradientHeart from 'ui/gradient/GradientHeart';
import GradientView from 'ui/gradient/GradientView';
import { formatUploadTime } from 'utils/date';

interface ProfileProps {
  writer: WriterProfile;
  date: string;
  count: number[];
}

const Profile = ({ writer, date, count }: ProfileProps) => {
  const { nickname, major, profile, grade } = writer;
  return (
    <div className="w-full  mt-[48px] mb-[60px] flex justify-between items-center">
      <div className="w-[80%] flex items-center gap-[20px]">
        <Image
          width={80}
          height={80}
          alt="writer"
          className="w-20 h-20 rounded-full"
          src={profile}
        />
        <div className="flex flex-col gap-3">
          <p>{nickname}</p>
          <div className="flex gap-1.5 text-sm">
            <p>{major} |</p>
            <p>{grade}학년 |</p>
            <p>{formatUploadTime(date)}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[32px] w-[20%]">
        <p className="flex  gap-[10px] cursor-pointer">
          <GradientView width={24} height={18} /> {count[0]}
        </p>
        <p className="flex  gap-[10px] cursor-pointer">
          <GradientHeart width={24} height={24} /> {count[0]}
        </p>
        <p className="flex  gap-[10px] cursor-pointer">
          <GradientBookmark width={17} height={24} /> {count[0]}
        </p>
      </div>
    </div>
  );
};

export default Profile;
