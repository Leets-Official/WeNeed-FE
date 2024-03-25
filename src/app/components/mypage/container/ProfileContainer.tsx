'use client';

import { InfoBoxContainer } from './InfoBoxContainer';
import { UserInfoContainer } from './UserInfoContainer';

interface ProfileContainerProps {
  userInfoItemList: MypageUserInfo | undefined;
  sameUser: boolean;
  userId: number;
}

export const ProfileContainer = ({
  userInfoItemList,
  sameUser,
  userId,
}: ProfileContainerProps) => {
  if (userInfoItemList) {
    const {
      profile,
      nickname,
      major,
      userGrade,
      doubleMajor,
      interestField,
      email,
      links,
      selfIntro,
    } = userInfoItemList;
    console.log('userInfoItemList', userInfoItemList);

    return (
      <div
        className={`w-[40%] min-h-screen h-auto flex flex-col items-end bg-neutral-900`}
      >
        <div className="h-full mt-20 flex flex-col items-center gap-16 mr-[5%]">
          <UserInfoContainer
            profile={profile}
            nickname={nickname}
            major={major}
            userGrade={userGrade}
          />
          <InfoBoxContainer
            doubleMajor={doubleMajor}
            interestField={interestField}
            email={email}
            links={links}
            selfIntro={selfIntro}
            sameUser={sameUser}
            userId={userId}
          />
        </div>
      </div>
    );
  }
};
