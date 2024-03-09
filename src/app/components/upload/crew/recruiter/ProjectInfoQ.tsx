'use client';

import Input from 'components/common/Input';
import useInputChange from 'hooks/upload/useInputChange';
import { DetailCategoriesContainer } from 'components/main/containers';
import { RECRUITER_QUESTIONS } from 'constants/crew';
import { QUESTIONS_BOX_STYLE } from 'constants/styles';
import DetailCategories from 'components/main/common/DetailCategories';

const ProjectInfoQ = () => {
  const { onChangeDate, onChangeInput, onSelectKeyword, recruiterData } =
    useInputChange();
  const REQUIREMENT = (
    <div className={QUESTIONS_BOX_STYLE.requirement()}>*</div>
  );

  return (
    <div className="font-semibold w-[80%] flex flex-col gap-[20px]">
      <div className={QUESTIONS_BOX_STYLE.mini()}>
        <div className="flex gap-1 ">
          {RECRUITER_QUESTIONS.detailTag}
          {REQUIREMENT}
        </div>
        <div className="w-full h-full overflow-hidden text-white font-medium">
          <DetailCategoriesContainer onCrew onSelectKeyword={onSelectKeyword} />
        </div>
        <div className="flex text-white">
          {recruiterData.detailTags.map((tag) => (
            <DetailCategories category={tag} key={tag} />
          ))}
        </div>
      </div>
      <div className={QUESTIONS_BOX_STYLE.mini()}>
        <p>{RECRUITER_QUESTIONS.deadline[0]}</p>
        <div className="w-[38%] flex flex-col text-[#7C7C7C] gap-[5px] font-normal text-sm">
          <div className="relative flex justify-center items-center border-1.5 border-black rounded-lg h-[50px] pr-[31px] pl-[20px]">
            <div className=" w-[180px] h-full">
              <Input
                className=" focus:outline-none flex justify-end text-end pr-2"
                type="default"
                name="년"
                onChange={(e) => onChangeDate(e)}
                textValue={recruiterData.deadline[0]}
              />
            </div>
            <p>년</p>
            <div className="pl-[30px] w-[150px] h-full ">
              <Input
                className="focus:outline-none text-end pr-2"
                type="default"
                name="월"
                onChange={(e) => onChangeDate(e)}
                textValue={recruiterData.deadline[1]}
              />
            </div>
            <p>월</p>
            <div className="pl-[30px] w-[150px] h-full">
              <Input
                className="focus:outline-none text-end pr-2"
                type="default"
                name="일"
                onChange={(e) => onChangeDate(e)}
                textValue={recruiterData.deadline[2]}
              />
            </div>
            <p>일</p>
          </div>
          <p className={QUESTIONS_BOX_STYLE.guide()}>
            {RECRUITER_QUESTIONS.deadline[1]}
          </p>
        </div>
      </div>
      <div className={QUESTIONS_BOX_STYLE.mini()}>
        <p>{RECRUITER_QUESTIONS.description[0]}</p>
        <div className="w-full">
          <Input
            type="upload_recruiter"
            name="description"
            onChange={(e) => onChangeInput(e)}
            textValue={recruiterData.description}
            placeholder={RECRUITER_QUESTIONS.description[1]}
          />
          <p className={QUESTIONS_BOX_STYLE.guide()}>
            {RECRUITER_QUESTIONS.description[2]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoQ;
