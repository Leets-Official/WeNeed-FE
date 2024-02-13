import Image from 'next/image';

export const UserInfoContainer = () => {
  return (
    <div className="relative top-0 flex flex-col justify-center items-center gap-2.5">
      <Image src="/Icons/profile.png" alt="profile" width={80} height={80} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-xl font-bold">위니드</div>
        <div className="gap-2.5 flex text-stone-300 text-small font-medium">
          시각디자인학과 | 4학년
        </div>
      </div>
    </div>
  );
};
