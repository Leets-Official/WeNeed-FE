'use client';

import { useEffect, useState } from 'react';
import { InfoBoxContainer } from './InfoBoxContainer';
import { UserInfoContainer } from './UserInfoContainer';

export const ProfileContainer = () => {
  const [contentHeightStyles, setContentHeightStyles] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      const headerHeight = 60;
      const screenHeight = window.innerHeight;
      const contentHeight = screenHeight - headerHeight;
      setContentHeightStyles(`h-[${contentHeight}px]`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const userInfoItemList = [
    '-',
    '디자인',
    'weneed@gmail.com',
    'loud.kr/m/88100v2r',
    '안녕하세요 시각디자인과 박명수입니다 3D모델링 위주의 작업을 합니다! 😁',
  ];

  return (
    <div
      className={`w-[505px] ${contentHeightStyles} flex flex-col justify-center items-center bg-neutral-900`}
    >
      <div className="h-full flex flex-col justify-center items-center gap-16">
        <UserInfoContainer />
        <InfoBoxContainer userInfoItemList={userInfoItemList} />
      </div>
    </div>
  );
};
