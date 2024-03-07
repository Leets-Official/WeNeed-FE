'use client';

import Button from 'components/common/Button';
import { useRecoilValue } from 'recoil';
import { postRecruiterState } from 'recoil/crew';

interface RecruiteSubmissionProps {
  text: string;
  articleId: string;
}

const RecruiteSubmission = ({ text, articleId }: RecruiteSubmissionProps) => {
  const recruiterValue = useRecoilValue(postRecruiterState);

  const onSubmitRecruiter = async () => {
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
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-[80%] flex justify-end mt-[37px] mb-[100px]">
      <Button
        buttonText={text}
        isDisabled={false}
        onClickHandler={onSubmitRecruiter}
        type="upload_recruiter"
      />
    </div>
  );
};

export default RecruiteSubmission;
