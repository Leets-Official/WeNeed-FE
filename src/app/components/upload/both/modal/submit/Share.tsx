'use client';
import Button from 'components/common/Button';
import Icons from 'components/common/Icons';
import { closeIcon } from 'ui/IconsPath';

const Share = () => {
  return (
    <div className=" relative w-[922px] h-[211px] bg-white rounded-[9px]">
      <Icons
        name={closeIcon}
        className="absolute top-[20.49px] right-[15.23px] cursor-pointer"
      />
      <div className="absolute text-black text-lg font-bold top-[32px] left-[40px]">
        작업물 공유
      </div>
      <Button
        buttonText={'링크복사'}
        type={'upload'}
        isDisabled={false}
        onClickHandler={() => console.log('링크가 복사되었습니다.')}
        className="absolute left-[40px] bottom-[72px] bg-zinc-300 text-sm "
      />
      <Button
        buttonText={'홈으로'}
        type={'upload'}
        isDisabled={false}
        onClickHandler={() => console.log('링크가 복사되었습니다.')}
        className="absolute left-[40px] bottom-[20px] text-sm text-white bg-[#000] opacity-[0.5] hover:bg-gradient-to-r from-[#00E0EE] to-[#517EF3] hover:opacity-100"
      />
    </div>
  );
};

export default Share;
