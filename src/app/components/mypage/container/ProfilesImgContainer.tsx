'use client';

import { MY_PAGE } from 'constants/mypage';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { mypageMyInfoState } from 'recoil/mypage';
import GradientProfile from 'ui/gradient/GradientProfile';

interface ProfilesImgContainerProps {
  profile: string | undefined;
}

const ProfilesImgContainer = ({ profile }: ProfilesImgContainerProps) => {
  const [profileImage, setProfileImage] = useState(profile);
  const [mypageMyInfo, setMypageMyInfo] = useRecoilState(mypageMyInfoState);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (reader.readyState === 2) {
          const newProfileImage = e.target?.result as string;
          setProfileImage(newProfileImage);
          setMypageMyInfo((prev) => ({
            ...prev,
            profileImage: newProfileImage,
          }));
        }
      };
    }
  };

  return (
    <div className="w-full relative top-20 flex flex-col justify-center items-center">
      {profileImage ? (
        <Image
          src={profileImage}
          alt="profile"
          width={77}
          height={77}
          objectFit="cover"
          className="rounded-full w-[77px] h-[77px]"
        />
      ) : (
        <GradientProfile />
      )}
      <label
        htmlFor="file-upload"
        className="mt-4 text-zinc-300 text-[8px] font-light border-b border-b-zinc-300 cursor-pointer"
      >
        {MY_PAGE.PROFILE_IMAGE_CHANGE}
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleImage}
        style={{ display: 'none' }}
      />

      <div className="mt-10 text-white text-2xl font-bold">{MY_PAGE.TITLE}</div>
    </div>
  );
};

export default ProfilesImgContainer;
