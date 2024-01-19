import Button from 'components/common/Button';
import Icons from 'components/common/Icons';
import { closeIcon } from 'ui/IconsPath';

const Share = () => {
  return (
    <div className=" relative w-[922px] h-[166px] bg-white rounded-[9px]">
      <Icons
        name={closeIcon}
        className="absolute top-[16px] right-[15px] cursor-pointer"
      />
      <div className="absolute text-black text-lg font-bold top-[32px] left-[40px]">
        작업물 공유
      </div>
      <Button
        buttonText={'링크복사'}
        type={'share'}
        isDisabled={false}
        onClickHandler={() => console.log('링크가 복사되었습니다.')}
        className="absolute left-[40px] top-[81px] w-[843px] h-[44px] bg-zinc-300 rounded-[9px] text-black text-sm cursor-pointer"
      />
    </div>
  );
};

export default Share;
