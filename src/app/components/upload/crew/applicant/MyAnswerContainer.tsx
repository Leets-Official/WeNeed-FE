'use client';

import Input from 'components/common/Input';
import DetailCategories from 'components/main/common/DetailCategories';
import { APPLICANT_QUESTIONS, CREW_KEYWORDS } from 'constants/crew';
import useInputChange from 'hooks/upload/useInputChange';
import { ChangeEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { postApplicantReqState } from 'recoil/crew';
import { REQUIREMENT } from '../recruiter/ProjectInfoQ';

interface MyAnswerContainerProps {
  user: WriterProfile;
  crewQuestions: string[];
}

const MyAnswerContainer = ({ user, crewQuestions }: MyAnswerContainerProps) => {
  const setApplicantData = useSetRecoilState(postApplicantReqState);
  const {
    applicantData,
    onChangeInput,
    onChangeInputArray,
    onChangeInputFile,
    onSelectKeyword,
  } = useInputChange('applicant');

  const onRemoveCategory = (tag: string) => {
    setApplicantData((prev) => ({
      ...prev,
      keywords: applicantData.keywords.filter((cat) => cat !== tag),
    }));
  };

  return (
    <div className="flex flex-col w-[80%] h-fit bg-white rounded-lg p-[30px] gap-[20px]">
      <h5 className="flex gap-1 mb-[18px] font-semibold">{`${user.nickname}님이 궁금한 질문`}</h5>
      {crewQuestions.map((question, i) => (
        <div className="w-full" key={question}>
          <div className="flex gap-1">
            {REQUIREMENT}
            {question}
          </div>
          <Input
            name="crewAnswers"
            type="upload_recruiter"
            onChange={(e) => onChangeInputArray(e, i)}
            textValue={applicantData.crewAnswers[i]}
            placeholder="입력해주세요."
          />
        </div>
      ))}
      <div className="w-full">
        <div className="flex gap-1.5">
          {REQUIREMENT}
          {APPLICANT_QUESTIONS.appeal[0]} (
          <p className="text-neutral-500 text-xs font-light ">
            pdf 파일만 등록해주세요.
          </p>
          )
        </div>
        <Input
          name="appeal"
          type="upload_recruiter"
          inputType="file"
          onChange={(e) => onChangeInputFile(e)}
          placeholder="파일"
          className="flex pt-2.5"
        />
      </div>
      <div className="w-full">
        <div className={`flex gap-1`}>
          {REQUIREMENT}
          {APPLICANT_QUESTIONS.aboutMe}
        </div>
        <Input
          name="aboutMe"
          type="upload_recruiter"
          onChange={(e) => onChangeInput(e)}
          textValue={applicantData.aboutMe}
          placeholder="입력해주세요."
        />
      </div>
      <div>
        <div className="flex gap-1 ">
          {REQUIREMENT}
          {APPLICANT_QUESTIONS.content}
        </div>
        <textarea
          name="content"
          className="h-36 w-full rounded-lg border-1.5 border-black resize-none mt-[5px] py-[16px] px-[31px]  text-neutral-500 text-sm font-normal "
          placeholder="입력해주세요"
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div>
        <div className="flex gap-1 mb-[10px] ">
          {REQUIREMENT}
          {APPLICANT_QUESTIONS.keywords}
        </div>
        <div className="text-white flex w-full flex-wrap gap-[10px]">
          {CREW_KEYWORDS.map((keyword) => (
            <div
              key={keyword}
              onClick={() => onSelectKeyword('keywords', keyword)}
            >
              <DetailCategories
                category={keyword}
                selected={applicantData.keywords.includes(keyword)}
                onClick={() => onRemoveCategory(keyword)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAnswerContainer;

export const renderInputField = (
  name: string,
  question: string,
  placeholder: string,
  applicantData: ApplicationForm,
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void,
  additionalText?: string,
) => {
  return (
    <div className={`w-[30%] ${name === 'phone' && 'mt-[63px]'}`}>
      <div className={`flex gap-1`}>
        {name !== 'doubleMajor' && REQUIREMENT}
        {question}
      </div>
      <Input
        name={name}
        type="upload_recruiter"
        onChange={(e) => onChangeInput(e)}
        textValue={applicantData[name] as string}
        placeholder={placeholder}
      />
      {additionalText && (
        <p className="text-neutral-500 text-xs font-light ">{additionalText}</p>
      )}
    </div>
  );
};
