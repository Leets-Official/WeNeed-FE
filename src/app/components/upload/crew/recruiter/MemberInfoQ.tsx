'use client';

import Input from 'components/common/Input';
import Profile from 'components/details/common/Profile';
import { RECRUITER_QUESTIONS } from 'constants/crew';
import { QUESTIONS_BOX_STYLE } from 'constants/styles';

const MemberInfoQ = () => {
  const REQUIREMENT = (
    <div className={QUESTIONS_BOX_STYLE.requirement()}>*</div>
  );

  return (
    <div className="font-semibold w-[80%] flex flex-col gap-[20px] bg-white my-[20px] rounded-lg p-[30px]">
      <h5 className="flex gap-1 mb-[50px] font-semibold">
        인적사항 {REQUIREMENT}
      </h5>
      <div className="mb-[20px]">
        <p className="mb-[15px]">작성자</p>
        <Profile writer={mockWriter} size="large" date="" />
      </div>
      <div>
        <div className="flex gap-1">{RECRUITER_QUESTIONS.task_need[0]}</div>
        <Input
          type="upload_recruiter"
          onChange={() => {}}
          textValue=""
          placeholder="입력해주세요."
        />
        <p className="text-neutral-500 text-xs font-light ">
          {RECRUITER_QUESTIONS.task_need[1]}
        </p>
      </div>
      <div className="w-[38%]">
        <div className="flex gap-1">{RECRUITER_QUESTIONS.member_count}</div>
        <div className="flex gap-3 justify-center items-center">
          <Input
            type="upload_recruiter"
            onChange={() => {}}
            textValue=""
            placeholder="입력해주세요."
          />
          <div className="w-[120px] h-[50px] mt-[6px] bg-black rounded-lg flex justify-center items-center gap-2.5 ">
            <div className="text-xs text-white ">직접입력</div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-1">{RECRUITER_QUESTIONS.phone}</div>
        <Input
          type="upload_recruiter"
          onChange={() => {}}
          textValue=""
          placeholder="입력해주세요."
        />
      </div>
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