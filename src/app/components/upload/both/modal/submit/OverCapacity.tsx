import Icons from 'components/common/Icons';
import { closeIcon } from 'ui/IconsPath';

const OverCapacity = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className=" relative w-[922px] h-[166px] bg-white rounded-[9px]">
        <Icons
          name={closeIcon}
          className="absolute top-[16px] right-[15px] cursor-pointer"
        />
        <div className="absolute text-neutral-500 text-base font-semibold top-[73px] right-[263.5px]">
          용량이 초과되었습니다, 허용 범위에 맞춰 다시 업로드 해주세요!
        </div>
      </div>
    </div>
  );
};

export default OverCapacity;
