'use client';
import Button from 'components/common/Button';
import GradientCompleted from 'ui/gradient/GradientCompleted';

const SubmitCompleted = () => {
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
        className="absolute bottom-[22.5px] left-[40.3px] bg-[#D9D9D9] hover:bg-gradient-to-r from-[#00E0EE] to-[#517EF3] hover:text-white"
      />
    </div>
  );
};

export default SubmitCompleted;
