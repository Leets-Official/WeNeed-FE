import Image from 'next/image';

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
      <Image src={profile} alt="profile" width={80} height={80} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-xl font-bold">{nickname}</div>
        <div className="gap-2.5 flex text-stone-300 text-small font-medium">
          {major} | {userGrade}
        </div>
      </div>
    </div>
  );
};
