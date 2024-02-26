import Image from 'next/image';
import Counts from './Counts';
import { PROFILE_STYLE } from 'constants/styles';
import { formatUploadTime } from 'utils/date';
import GradientProfile from 'ui/gradient/GradientProfile';
import GradientProfileSM from 'ui/gradient/GradientProfileMD';

interface ProfileProps {
  writer: WriterProfile;
  size: 'large' | 'medium' | 'small';
  date?: string;
  onComment?: boolean;
  count?: number[];
  user?: {
    bookmarked: boolean;
    hearted: boolean;
    userId?: number;
  };
}

const Profile = ({ writer, date, count, onComment, size }: ProfileProps) => {
  const { writerNickname, major, profile, grade } = writer;
  const profileStyles = PROFILE_STYLE[size || '']();
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-[80%] flex items-center gap-[20px] ">
        <div className={`rounded-full overflow-hidden ${profileStyles} z-20 `}>
          {profile ? (
            <Image
              width={onComment ? 56 : 76}
              height={onComment ? 56 : 76}
              alt="writer"
              src={profile}
              style={{
                objectFit: 'cover',
              }}
            />
          ) : onComment ? (
            <GradientProfileSM />
          ) : (
            <GradientProfile />
          )}
        </div>
        <div
          className={`flex ${onComment ? 'items-center' : 'flex-col'} gap-3`}
        >
          <p className="text-lg">{writerNickname}</p>
          <div className="font-normal flex gap-1.5 text-sm">
            <p>{major} </p>
            <p>| {grade}학년 </p>
            <div>{date && <p> | {formatUploadTime(date)}</p>}</div>
          </div>
        </div>
      </div>
      {count && <Counts count={count} />}
    </div>
  );
};

export default Profile;
