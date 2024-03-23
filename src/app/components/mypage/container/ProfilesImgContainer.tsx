import { MY_PAGE } from 'constants/mypage';
import Image from 'next/image';
import GradientProfile from 'ui/gradient/GradientProfile';

interface ProfilesImgContainerProps {
  profile: string | undefined;
}

const ProfilesImgContainer = ({ profile }: ProfilesImgContainerProps) => {
  return (
    <div className="w-full relative top-20 flex flex-col justify-center items-center">
      {profile ? (
        <Image src={profile} alt="profile" width={80} height={80} />
      ) : (
        <GradientProfile />
      )}
      <div className="mt-4 text-zinc-300 text-[8px] font-light border-b border-b-zinc-300">
        {MY_PAGE.PROFILE_IMAGE_CHANGE}
      </div>
      <div className="mt-10 text-white text-2xl font-bold">{MY_PAGE.TITLE}</div>
    </div>
  );
};

export default ProfilesImgContainer;
