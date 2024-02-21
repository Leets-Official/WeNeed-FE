'use client';

import Icons from 'components/common/Icons';
import Input from 'components/common/Input';
import { RECRUITER_QUESTIONS } from 'constants/crew';
import { questions_plus } from 'ui/IconsPath';

const ContentsQ = () => {
  return (
    <div className="font-semibold w-[80%] flex flex-col bg-white rounded-lg p-[30px]">
      <div>
        <div className="flex gap-1">{RECRUITER_QUESTIONS.crew_questions}</div>
        <Input
          type="upload_recruiter"
          onChange={() => {}}
          textValue=""
          placeholder="입력해주세요."
        />
        <Input
          type="upload_recruiter"
          onChange={() => {}}
          textValue=""
          placeholder="입력해주세요."
        />
        <Input
          type="upload_recruiter"
          onChange={() => {}}
          textValue=""
          placeholder="입력해주세요."
        />
        <div className="w-full flex justify-center mt-[30px] mb-[50px]">
          <Icons name={questions_plus} />
        </div>
      </div>
      <div>
        <div className="flex gap-1 ">{RECRUITER_QUESTIONS.content}</div>
        <textarea
          className="h-36 w-full rounded-lg border border-black resize-none mt-[5px] py-[16px] px-[31px]  text-neutral-500 text-sm font-normal "
          placeholder="입력해주세요"
        />
      </div>
      <div>
        <div className="flex gap-1">{RECRUITER_QUESTIONS.keywords}</div>
      </div>
    </div>
  );
};
export default ContentsQ;
