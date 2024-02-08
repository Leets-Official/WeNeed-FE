'use client';
import { USER_INFO } from 'constants/userinfoset';
import Button from 'components/common/Button';
import { userInfoState } from 'recoil/userinfo';
import { useRecoilState } from 'recoil';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="absolute left-20 top-20 text-[20px] font-semibold ">
        {USER_INFO.TITLE}
      </div>
      <div className="absolute top-40 flex justify-between w-[320px]">
        <label className="relative flex items-center">
          <input
            className="w-[239px] h-[38px] pr-4 rounded-[8px] focus:outline-none border border-zinc-300 text-[#3A3A3A] text-xs font-semibold text-right"
            type="text"
            value={userInfo.nickname}
            placeholder=""
            onChange={(e) => {
              const userInput = e.target.value;
              // 영어와 한글만 허용, 공백과 특수문자를 제
              const filteredInput = userInput.replace(
                /[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/g,
                '',
              );
              // 최대 길이 16자로 제한
              const trimmedInput = filteredInput.slice(0, 16);
              setUserInfo({ ...userInfo, nickname: trimmedInput });
            }}
          />
          <span className="absolute ml-4 text-neutral-400 text-xs font-semibold">
            {USER_INFO.NICKNAME}
          </span>
        </label>
        <Button
          buttonText={USER_INFO.NICKNAME_BTN}
          type="userinfo"
          className={`w-[68px] h-[38px] ${
            userInfo.nickname.length === 0
              ? 'bg-zinc-300 text-black'
              : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
          } rounded-[8px] justify-center items-center flex text-[10px] font-normal`}
          isDisabled={userInfo.nickname.length === 0}
          onClickHandler={() => {}}
        />
      </div>
    </div>
  );
};

export default UserInfo;
