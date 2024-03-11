'use client';
import Button from 'components/common/Button';
import GradientCompleted from 'ui/gradient/GradientCompleted';
import Share from './Share';
import { useState } from 'react';

const SubmitCompleted = () => {
  const [onShare, setOnShare] = useState(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-42 backdrop-blur-1">
      {onShare && <Share />}
      <div className="relative w-[922px] h-[340px] items-center bg-white rounded-[9px]">
        <div className="absolute top-[57.5px] left-[409px]">
          <GradientCompleted />
        </div>
        <div className="absolute top-[199px] left-[392.5px] text-neutral-500 text-3xl font-bold">
          업로드 완료
        </div>
        <Button
          buttonText={'다음'}
          type={'upload'}
          isDisabled={false}
          onClickHandler={() => setOnShare(true)}
          className="absolute bottom-[22.5px] left-[40.3px] bg-[#D9D9D9] hover:bg-gradient-to-r from-[#00E0EE] to-[#517EF3] hover:text-white"
        />
      </div>
    </div>
  );
};

export default SubmitCompleted;
