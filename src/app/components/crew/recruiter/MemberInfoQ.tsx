'use client';

import Profile from 'components/details/common/Profile';
import { RECRUITER_QUESTIONS } from 'constants/crew';
import { QUESTIONS_BOX_STYLE } from 'constants/styles';

const MemberInfoQ = () => {
  const REQUIREMENT = (
    <div className={QUESTIONS_BOX_STYLE.requirement()}>*</div>
  );

  return (
    <div className="font-semibold w-[80%] flex flex-col gap-[20px] bg-white my-[20px] rounded-lg p-[30px]">
      <h5 className="flex gap-1 mb-[50px]">인적사항 {REQUIREMENT} </h5>
      <div className="mb-[40px]">
        <p className="mb-[15px]">작성자</p>
        <Profile writer={mockWriter} size="large" date="" />
      </div>
      <div className="flex gap-1">{RECRUITER_QUESTIONS.task_need}</div>
      <div className="flex gap-1">{RECRUITER_QUESTIONS.member_count}</div>
      <div className="flex gap-1">{RECRUITER_QUESTIONS.phone}</div>
    </div>
  );
};

const mockWriter = {
  userId: 1,
  writerNickname: '위니드',
  major: '경영학전공',
  profile: null,
  grade: 3,
};

export default MemberInfoQ;
