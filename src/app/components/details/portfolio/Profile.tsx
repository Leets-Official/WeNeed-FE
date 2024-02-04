import Icons from 'components/common/Icons';
import { PROFILE_STYLE } from 'constants/styles';
import Image from 'next/image';
import { bookmark, heart, view } from 'ui/IconsPath';
import GradientBookmark from 'ui/gradient/GradientBookmark';
import GradientHeart from 'ui/gradient/GradientHeart';
import GradientView from 'ui/gradient/GradientView';
import { formatUploadTime } from 'utils/date';

interface ProfileProps {
  writer: WriterProfile;
  date: string;
  size: 'large' | 'medium' | 'small';
  onComment?: boolean;
  count?: number[];
  user?: {
    bookmarked: boolean;
    hearted: boolean;
  };
}

const Profile = ({
  writer,
  date,
  count,
  onComment,
  size,
  user,
}: ProfileProps) => {
  const { nickname, major, profile, grade } = writer;
  const profileStyles = PROFILE_STYLE[size || '']();
  return (
    <div className="w-full  mt-[48px]  flex justify-between items-center">
      <div className="w-[80%] flex items-center gap-[20px] ">
        <div className={`rounded-full overflow-hidden ${profileStyles} `}>
          <Image
            width={onComment ? 56 : 80}
            height={onComment ? 56 : 80}
            alt="writer"
            src={profile}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          className={`flex ${onComment ? 'items-center' : 'flex-col'} gap-3`}
        >
          <p className="text-lg">{nickname}</p>
          <div className="flex gap-1.5 text-sm">
            <p>{major} |</p>
            <p>{grade}학년 |</p>
            <p>{formatUploadTime(date)}</p>
          </div>
        </div>
      </div>
      {count && (
        <div className="flex gap-[32px] w-[20%]">
          <p className="flex  gap-[10px] cursor-pointer">
            <GradientView width={24} height={18} /> {count[0]}
          </p>
          <p className="flex  gap-[10px] cursor-pointer">
            {user?.hearted ? (
              <GradientHeart width={24} height={24} />
            ) : (
              <Icons name={heart} />
            )}
            {count[0]}
          </p>
          <p className="flex  gap-[10px] cursor-pointer">
            {user?.bookmarked ? (
              <GradientBookmark width={17} height={24} />
            ) : (
              <Icons name={bookmark} />
            )}
            {count[0]}
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
