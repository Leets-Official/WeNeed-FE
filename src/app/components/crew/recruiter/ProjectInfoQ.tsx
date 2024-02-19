'use client';

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
        <div className="flex gap-1">
          {RECRUITER_QUESTIONS.category[0]}
          {REQUIREMENT}
        </div>
      </div>
      <div className={QUESTIONS_BOX_STYLE.mini()}>
        <div className="flex gap-1">
          {RECRUITER_QUESTIONS.detailTag}
          {REQUIREMENT}
        </div>
        <div className="w-full overflow-hidden ">
          <DetailCategoriesContainer />
        </div>
      </div>
      <div className={QUESTIONS_BOX_STYLE.mini()}>
        <p>{RECRUITER_QUESTIONS.deadline[0]}</p>
        {/* <Input type="upload_recruiter" /> */}
      </div>
      <div className={QUESTIONS_BOX_STYLE.mini()}>
        <p>{RECRUITER_QUESTIONS.description[0]}</p>
      </div>
    </div>
  );
};

export default ProjectInfoQ;
