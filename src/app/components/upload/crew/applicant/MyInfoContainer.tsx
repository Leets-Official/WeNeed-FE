'use client';

import Input from 'components/common/Input';
import Profile from 'components/details/common/Profile';
import { APPLICANT_QUESTIONS } from 'constants/crew';

const MyInfoContainer = () => {
  const renderInputField = (
    question: string,
    placeholder: string,
    additionalText?: string,
  ) => (
    <div className="w-[30%]">
      <div className="flex gap-1">{question}</div>
      <Input
        type="upload_recruiter"
        onChange={() => {}}
        textValue=""
        placeholder={placeholder}
      />
      {additionalText && (
        <p className="text-neutral-500 text-xs font-light ">{additionalText}</p>
      )}
    </div>
  );

  return (
    <div className="flex flex-col w-[80%] h-[896px] bg-white rounded-lg p-[30px] gap-[20px]">
      <h5 className="flex gap-1 mb-[50px] font-semibold">인적사항</h5>
      <div className="mb-[20px]">
        <p className="mb-[15px]">작성자</p>
        <Profile writer={mockWriter} size="large" date="" />
      </div>
      {renderInputField(APPLICANT_QUESTIONS.name, '입력해주세요.')}
      <div className="flex justify-start items-start gap-[20px] w-full">
        {renderInputField(APPLICANT_QUESTIONS.major, '입력해주세요.')}
        {renderInputField(
          APPLICANT_QUESTIONS.doubleMajor[0],
          '입력해주세요.',
          APPLICANT_QUESTIONS.doubleMajor[1],
        )}
      </div>
      {renderInputField(
        APPLICANT_QUESTIONS.grade[0],
        APPLICANT_QUESTIONS.grade[1],
      )}
      {renderInputField(APPLICANT_QUESTIONS.status[0], '')}
      {renderInputField(
        APPLICANT_QUESTIONS.phone[0],
        '',
        APPLICANT_QUESTIONS.phone[1],
      )}
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

export default MyInfoContainer;
