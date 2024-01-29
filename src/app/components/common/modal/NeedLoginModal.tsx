import { weneedLarge } from 'ui/IconsPath';
import Icons from '../Icons';
import { NEED_LOGIN_MODAL } from 'constants/common';

const NeedLoginModal = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl w-[922px] h-[370px] mb-[30px] justify-center items-center">
      <div className="flex justify-center w-full text-center">
        <Icons name={weneedLarge} />
        <div className="py-2 ml-2 font-bold text-[30px]">
          {NEED_LOGIN_MODAL.title}
        </div>
      </div>
      <div className="font-bold text-lg mb-[66px]">
        {NEED_LOGIN_MODAL.sub_title}
      </div>
      {/* 로그인버튼 */}
    </div>
  );
};

export default NeedLoginModal;
