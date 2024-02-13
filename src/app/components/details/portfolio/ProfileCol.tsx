import Image from 'next/image';
import GradientProfile from 'ui/gradient/GradientProfile';

interface ProfileColProps {
  user: WriterProfile;
}

const ProfileCol = ({ user }: ProfileColProps) => {
  const { writerNickname, grade, major, profile, userId } = user;
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[10px] mb-[66px]">
      <div className="w-[76px] h-[76px] overflow-hidden rounded-full">
        {profile ? (
          <Image src={profile} width={76} height={76} alt="writer" />
        ) : (
          <GradientProfile />
        )}
      </div>
      <p className="text-lg">{writerNickname}</p>
      <div className="flex gap-2">
        <p>{major}</p>|<p>{grade}학년</p>
      </div>
    </div>
  );
};

export default ProfileCol;
