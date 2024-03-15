'use client';

import Input from 'components/common/Input';
import Profile from 'components/details/common/Profile';
import { RECRUITER_QUESTIONS } from 'constants/crew';
import { QUESTIONS_BOX_STYLE } from 'constants/styles';
import useInputChange from 'hooks/upload/useInputChange';
import { useEffect, useState } from 'react';

interface MemberInfoQProps {
  articleId: string;
}

const MemberInfoQ = ({ articleId }: MemberInfoQProps) => {
  const { onChangeInput, recruiterData } = useInputChange('recruiter');
  const [user, setUser] = useState<WriterProfile | null>(null);

  const REQUIREMENT = (
    <div className={QUESTIONS_BOX_STYLE.requirement()}>*</div>
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting?articleId=${articleId}`,
        { cache: 'no-store' },
      );
      const responseData = await response.json();
      setUser((prev) => responseData.recruit.writer);
    };

    fetchData();
  }, []);

  if (user) {
    return (
      <div className="font-semibold w-[80%] flex flex-col gap-[20px] bg-white my-[20px] rounded-lg p-[30px]">
        <h5 className="flex gap-1 mb-[50px] font-semibold">
          {REQUIREMENT} 인적사항
        </h5>
        <div className="mb-[20px]">
          <p className="mb-[15px]">작성자</p>
          <Profile writer={user} size="large" date="" />
        </div>
        <div>
          <div className="flex gap-1">
            {REQUIREMENT} {RECRUITER_QUESTIONS.task_need[0]}
          </div>
          <Input
            type="upload_recruiter"
            name="taskNeed"
            onChange={(e) => onChangeInput(e)}
            textValue={recruiterData.taskNeed}
            placeholder="입력해주세요."
          />
          <p className="text-neutral-500 text-xs font-light ">
            {RECRUITER_QUESTIONS.task_need[1]}
          </p>
        </div>
        <div className="w-[38%]">
          <div className="flex gap-1">
            {REQUIREMENT} {RECRUITER_QUESTIONS.member_count}
          </div>
          <div className="flex gap-3 justify-center items-center">
            <Input
              type="upload_recruiter"
              name="memberCount"
              onChange={(e) => onChangeInput(e)}
              textValue={recruiterData.memberCount}
              placeholder="입력해주세요."
            />
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            {REQUIREMENT} {RECRUITER_QUESTIONS.phone}
          </div>
          <Input
            type="upload_recruiter"
            name="phone"
            onChange={(e) => onChangeInput(e)}
            textValue={recruiterData.phone}
            placeholder="입력해주세요."
          />
        </div>
      </div>
    );
  }
};

export default MemberInfoQ;
