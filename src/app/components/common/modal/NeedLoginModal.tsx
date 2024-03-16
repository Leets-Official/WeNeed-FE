import { weneedLarge } from 'ui/IconsPath';
import Icons from '../Icons';
import { NEED_LOGIN_MODAL } from 'constants/common';
import GoogleLoginButton from 'components/login/GoogleLoginButton';

const NeedLoginModal = () => {
  return (
    <div className="z-50 flex flex-col bg-white rounded-2xl w-[922px] h-[370px] gap-[20px] items-center py-[80px]">
      <div className="flex justify-center ">
        <Icons name={weneedLarge} />
        <div className="py-2 ml-2 font-bold text-[30px] ">
          {NEED_LOGIN_MODAL.title}
        </div>
      </div>
      <div className="font-bold text-lg mb-[50px]">
        {NEED_LOGIN_MODAL.sub_title}
      </div>
      <GoogleLoginButton />
    </div>
  );
};

export default NeedLoginModal;
