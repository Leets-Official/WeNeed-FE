import Image from 'next/image';
import GradientProfileMD from 'ui/gradient/GradientProfileMD';

interface UserInfoContainerProps {
  profile: string;
  nickname: string;
  major: string;
  userGrade: number;
}

export const UserInfoContainer = ({
  profile,
  nickname,
  major,
  userGrade,
}: UserInfoContainerProps) => {
  return (
    <div className="relative top-0 flex flex-col justify-center items-center gap-2.5">
      <div className={`rounded-full overflow-hidden w-[56px] h-[56px]`}>
        {profile ? (
          <Image
            src={profile}
            alt="profile"
            width={56}
            height={56}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              width: '100%',
              height: '100%',
            }}
          />
        ) : (
          <GradientProfileMD />
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-xl font-bold">{nickname}</div>
        <div className="gap-2.5 flex text-stone-300 text-small font-medium">
          {major} | {userGrade}학년
        </div>
      </div>
    </div>
  );
};
