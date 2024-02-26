'use client';

import Input from 'components/common/Input';
import DetailCategories from 'components/main/common/DetailCategories';
import { APPLICANT_QUESTIONS, CREW_KEYWORDS } from 'constants/crew';

const MyAnswerContainer = () => {
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
    <div className="flex flex-col w-[80%] h-[901px] bg-white rounded-lg p-[30px] gap-[20px]">
      <h5 className="flex gap-1 mb-[50px] font-semibold">궁금한 질문</h5>
      {renderInputField(APPLICANT_QUESTIONS.available_time, '입력해주세요.')}
      {renderInputField(APPLICANT_QUESTIONS.about_me, '입력해주세요.')}
      {renderInputField(
        APPLICANT_QUESTIONS.appeal[0],
        APPLICANT_QUESTIONS.appeal[1],
      )}
      <div>
        <div className="flex gap-1 ">{APPLICANT_QUESTIONS.content}</div>
        <textarea
          className="h-36 w-full rounded-lg border-1.5 border-black resize-none mt-[5px] py-[16px] px-[31px]  text-neutral-500 text-sm font-normal "
          placeholder="입력해주세요"
        />
      </div>
      <div>
        <div className="flex gap-1 mb-[10px] ">
          {APPLICANT_QUESTIONS.keywords}
        </div>
        <div className="text-white flex w-full flex-wrap gap-[10px]">
          {CREW_KEYWORDS.map((keyword) => (
            <DetailCategories key={keyword} category={keyword} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAnswerContainer;
