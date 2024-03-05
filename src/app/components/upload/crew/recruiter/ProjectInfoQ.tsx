'use client';

import Input from 'components/common/Input';
import { DetailCategoriesContainer } from 'components/main/containers';
import { RECRUITER_QUESTIONS } from 'constants/crew';
import { QUESTIONS_BOX_STYLE } from 'constants/styles';

const ProjectInfoQ = () => {
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
        <div className="w-full overflow-hidden text-white font-medium">
          <DetailCategoriesContainer />
        </div>
      </div>
      <div className={QUESTIONS_BOX_STYLE.mini()}>
        <p>{RECRUITER_QUESTIONS.deadline[0]}</p>
        <div className="w-[38%]">
          <Input
            type="upload_recruiter"
            onChange={() => {}}
            textValue=""
            placeholder="입력해주세요."
          />
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
            onChange={() => {}}
            textValue=""
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
