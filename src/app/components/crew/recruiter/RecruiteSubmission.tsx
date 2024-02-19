'use client';

import Button from 'components/common/Button';

const RecruiteSubmission = () => {
  return (
    <div className="w-[80%] flex justify-end mt-[37px] mb-[100px]">
      <Button
        buttonText="완료"
        isDisabled={false}
        onClickHandler={() => console.log('제출됨')}
        type="upload_recruiter"
      />
    </div>
  );
};

export default RecruiteSubmission;
