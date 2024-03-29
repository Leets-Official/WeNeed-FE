'use client';

import Button from 'components/common/Button';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import {
  postApplicantAppealState,
  postApplicantBoolState,
  postApplicantReqState,
  postRecruiterState,
} from 'recoil/crew';

interface CrewSubmissionProps {
  text: string;
  articleId: string;
  type: string;
}

const CrewSubmission = ({ text, articleId, type }: CrewSubmissionProps) => {
  const recruiterValue = useRecoilValue(postRecruiterState);
  const postApplicantReq = useRecoilValue(postApplicantReqState);
  const postApplicantBool = useRecoilValue(postApplicantBoolState);
  const postApplicantAppeal = useRecoilValue(postApplicantAppealState);
  const router = useRouter();

  const onSubmitRecruiter = async () => {
    const keys = Object.keys(recruiterValue);
    for (const key of keys) {
      if (!recruiterValue[key]) {
        alert('모든 항목을 작성해주세요.');
        return;
      }
    }
    const newData = {
      ...recruiterValue,
      deadline: recruiterValue.deadline.join('/'),
    };
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/upload/crew/recruiter?articleId=${articleId}`,
        {
          method: 'POST',
          body: JSON.stringify(newData),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      router.push(`/crew/recruitment/${articleId}`);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitApplicant = async () => {
    const keys = Object.keys(postApplicantReq);
    for (const key of keys) {
      if (!postApplicantReq[key] && key !== 'doubleMajor') {
        alert('모든 항목을 작성해주세요.');
        return;
      }
    }
    if (!postApplicantAppeal) {
      alert('어필할 수 있는 파일을 올려주세요.');
      return;
    }
    const newData = { ...postApplicantReq, international: postApplicantBool };
    const formData = new FormData();
    formData.append(
      'request',
      new Blob([JSON.stringify(newData)], { type: 'application/json' }),
    );
    if (postApplicantAppeal) {
      formData.append('appeal', postApplicantAppeal, postApplicantAppeal.name);
    }

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/upload/crew/applicant?articleId=${articleId}`,
        {
          method: 'POST',
          body: formData,
        },
      );
      router.push(`/upload/crew/applicant/success`);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickHandler = (type: string) => {
    switch (type) {
      case 'routerApplicant':
        router.push(`/upload/crew/applicant/${articleId}`);
        break;
      case 'submitRecruit':
        onSubmitRecruiter();
        break;
      case 'submitApplicant':
        onSubmitApplicant();
        break;
      case 'onCloseApplication':
        router.back();
        break;
      case 'backToArticle':
        router.push(`/recruiting/${articleId}`);
        break;
      default:
    }
  };

  return (
    <Button
      buttonText={text}
      isDisabled={false}
      onClickHandler={() => onClickHandler(type)}
      type="upload_recruiter"
    />
  );
};

export default CrewSubmission;
