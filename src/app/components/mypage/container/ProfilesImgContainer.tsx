'use client';

import { MY_PAGE } from 'constants/mypage';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { mypageMyInfoState, mypageMyProfileImgState } from 'recoil/mypage';
import GradientProfile from 'ui/gradient/GradientProfile';

interface ProfilesImgContainerProps {
  profile: string | undefined;
}

const ProfilesImgContainer = ({ profile }: ProfilesImgContainerProps) => {
  const [profileImage, setProfileImage] = useState(profile);
  const [mypageMyInfo, setMypageMyInfo] = useRecoilState(mypageMyInfoState);
  const [profileBlob, setProfileBlob] = useRecoilState(mypageMyProfileImgState);

  useEffect(() => {
    setProfileImage(profile);
  }, []);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedext = ['jpeg', 'png', 'jpg'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      console.log('fileExtension : ', fileExtension);

      if (fileExtension && allowedext.includes(fileExtension)) {
        const blob = new Blob([file], { type: file.type });
        setProfileBlob({ blob: blob, name: file.name });

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
      } else {
        alert('이미지 파일만 업로드 가능합니다.');
      }
    }
  };

  return (
    <div className="w-full relative top-20 flex flex-col justify-center items-center">
      <div className={`rounded-full overflow-hidden w-[77px] h-[77px]`}>
        {profileImage ? (
          <Image
            src={profileImage}
            alt="profile"
            width={77}
            height={77}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              width: '100%',
              height: '100%',
            }}
          />
        ) : (
          <GradientProfile />
        )}
      </div>
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
