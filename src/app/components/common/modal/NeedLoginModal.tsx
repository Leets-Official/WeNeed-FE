import { weneedLarge } from 'ui/IconsPath';
import Icons from '../Icons';
import { NEED_LOGIN_MODAL } from 'constants/common';
import GoogleLoginButton from 'components/login/GoogleLoginButton';

const NeedLoginModal = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl w-[922px] h-[370px] justify-between items-center py-[100px]">
      <div className="flex justify-center w-full text-center ">
        <Icons name={weneedLarge} />
        <div className="py-2 ml-2 font-bold text-[30px]">
          {NEED_LOGIN_MODAL.title}
        </div>
      </div>
      <div className="font-bold text-lg">{NEED_LOGIN_MODAL.sub_title}</div>
      <div className="mx-auto w-[476px] pb-[150px]">
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default NeedLoginModal;
