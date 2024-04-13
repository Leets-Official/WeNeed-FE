'use client';

import Profile from 'components/details/common/Profile';
import { APPLICANT_QUESTIONS } from 'constants/crew';
import { renderInputField } from './MyAnswerContainer';
import { useState } from 'react';
import { postApplicantReqState } from 'recoil/crew';
import { useRecoilState } from 'recoil';
import DropDown from 'components/mypage/profile/DropDown';
import { GRADES, STUDENT_STATUS } from 'constants/recruit';
import useInputChange from 'hooks/upload/useInputChange';
import { REQUIREMENT } from '../recruiter/ProjectInfoQ';

interface MyInfoContainerProps {
  user: WriterProfile;
}

const MyInfoContainer = ({ user }: MyInfoContainerProps) => {
  const { onChangeInput } = useInputChange('applicant');
  const [applicantData, setApplicantData] = useRecoilState(
    postApplicantReqState,
  );
  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);
  const [isGradeOpen, setIsGradeOpen] = useState<boolean>(false);

  const handleItemSelect = (type: string) => (item: string) => {
    handleIsOpen(type);
    switch (type) {
      case 'grade':
        setApplicantData((prev) => ({
          ...prev,
          grade: item[0],
        }));
        break;
      case 'status':
        setApplicantData((prev) => ({
          ...prev,
          status: item,
        }));
        break;
      default:
    }
  };

  const handleIsOpen = (type: string) => {
    switch (type) {
      case 'grade':
        setIsGradeOpen((prev) => !prev);
        setIsStatusOpen(false);
        break;
      case 'status':
        setIsGradeOpen(false);
        setIsStatusOpen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  if (user)
    return (
      <div className="flex flex-col w-[80%] max-w-[1280px] h-fit bg-white rounded-lg p-[30px] gap-[20px]">
        <h5 className="flex gap-1 mb-[18px] font-semibold">인적사항</h5>
        <div className="mb-[20px]">
          <p className="mb-[15px]">작성자</p>
          <Profile writer={user} size="large" date="" />
        </div>
        {renderInputField(
          'name',
          APPLICANT_QUESTIONS.name,
          '입력해주세요.',
          applicantData,
          onChangeInput,
        )}
        <div className="flex justify-start items-start gap-[20px] w-full">
          {renderInputField(
            'major',
            APPLICANT_QUESTIONS.major,
            '입력해주세요.',
            applicantData,
            onChangeInput,
          )}
          {renderInputField(
            'doubleMajor',
            APPLICANT_QUESTIONS.doubleMajor[0],
            '입력해주세요.',
            applicantData,
            onChangeInput,
            APPLICANT_QUESTIONS.doubleMajor[1],
          )}
        </div>
        <div className="w-[30%] relative">
          <div className="pb-1.5 flex gap-1">
            {REQUIREMENT}
            {APPLICANT_QUESTIONS.grade[0]}
          </div>
          <DropDown
            sortedItemList={[...GRADES]}
            selectedItem={applicantData.grade ? applicantData.grade : GRADES[0]}
            onItemSelect={handleItemSelect('grade')}
            onOpen={() => handleIsOpen('grade')}
            isOpen={isGradeOpen}
            className={`absolute w-full h-full`}
            buttonClassName={`relative bg-white w-[291px] h-[50px] rounded-[10px] border-1.5 border-black text-neutral-500 text-sm font-normal text-left flex justify-between items-center px-4 `}
            dropDownClassName={`z-40 relative bg-white w-[291px] max-h-[240px] rounded-[15px] border border-black overflow-y-scroll scrollbar-hide`}
            itemClassName={`w-[291px] h-[40px] py-2 text-left px-4 text-xs font-normal hover:text-black`}
          />
        </div>
        <div className="w-[30%] relative mt-[63px]">
          <div className="pb-1.5  flex gap-1">
            {REQUIREMENT}
            {APPLICANT_QUESTIONS.status[0]}
          </div>
          <DropDown
            sortedItemList={[...STUDENT_STATUS]}
            onItemSelect={handleItemSelect('status')}
            selectedItem={
              applicantData.status ? applicantData.status : STUDENT_STATUS[0]
            }
            onOpen={() => handleIsOpen('status')}
            isOpen={isStatusOpen}
            className={`absolute w-full h-full`}
            buttonClassName={`relative bg-white w-[291px] h-[50px] rounded-[10px] border-1.5 border-black text-neutral-500 text-sm font-normal text-left flex justify-between items-center px-4 `}
            dropDownClassName={`z-40 relative bg-white w-[291px] max-h-[240px] rounded-[15px] border border-black overflow-y-scroll scrollbar-hide`}
            itemClassName={`w-[291px] h-[40px] py-2 text-left px-4 text-xs font-normal hover:text-black`}
          />
        </div>
        {renderInputField(
          'phone',
          APPLICANT_QUESTIONS.phone[0],
          '01011112222',
          applicantData,
          onChangeInput,
          APPLICANT_QUESTIONS.phone[1],
        )}
      </div>
    );
};

export default MyInfoContainer;
