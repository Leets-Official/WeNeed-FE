import Button from 'components/common/Button';
import { useState } from 'react';
import GradientCompleted from 'ui/gradient/GradientCompleted';

const SubmitCompleted = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
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
        onClickHandler={function (): void {
          console.log('다음 모달로 이동');
        }}
        className={`absolute bottom-[22.5px] left-[44.3px] ${
          isHovered
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
            : 'bg-[#D9D9D9]'
        }`}
        mouseEnterHandler={handleMouseEnter}
        mouseLeaveHandler={handleMouseLeave}
      />
    </div>
  );
};

export default SubmitCompleted;
