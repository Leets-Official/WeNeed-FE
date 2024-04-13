'use client';
import Button from 'components/common/Button';
import { UNIV_AUTH } from 'constants/userinfoset';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  univAuthEmailState,
  univAuthCodeState,
  univAuthState,
} from 'recoil/userinfo';

const fetchEmailData = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/certify?email=${email}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    ).then((res) => res.json());

    if (response.code === 200) {
      return response;
    } else {
      console.error('Fetch Email Data Error:', response.message);
      return response;
    }
  } catch (error) {
    console.error('Error during Fetch Email Data:', error);
    return 500;
  }
};

const fetchCodeData = async (email: string, code: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/certifycode`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, email }),
        cache: 'no-store',
      },
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.error('Error during Fetch Code:', error);
    return 500;
  }
};

const UnivAuth = () => {
  const [univAuthEmail, setUnivAuthEmail] = useRecoilState(univAuthEmailState);
  const [univAuthCode, setUnivAuthCode] = useRecoilState(univAuthCodeState);
  const setUnivAuth = useSetRecoilState(univAuthState);
  const [emailPost, setEmailPost] = useState(0);
  const [codePost, setCodePost] = useState(0);

  const emailButtonHandler = async () => {
    const emailStatus = await fetchEmailData(univAuthEmail);
    if (emailStatus.code === 200) {
      setEmailPost(1);
    } else {
      emailStatus.message.includes('이미') ? setEmailPost(3) : setEmailPost(2);
    }
  };

  const codeButtonHandler = async () => {
    const codeStatus = await fetchCodeData(univAuthEmail, univAuthCode);
    if (codeStatus.success) {
      setCodePost(1);
      setUnivAuth(true);
    } else {
      setUnivAuth(false);
      setCodePost(2);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="absolute left-20 top-20 text-[20px] font-semibold ">
        {UNIV_AUTH.TITLE}
      </div>
      <div className="absolute top-40 flex justify-between w-[320px]">
        <input
          className={`w-[217px] h-[38px] pl-4 rounded-[8px] focus:outline-none border ${
            emailPost === 1
              ? 'border-[#517EF3]'
              : emailPost === 2 || emailPost === 3
                ? 'border-[#FF7272]'
                : 'border-zinc-300'
          } justify-start items-center flex ${
            univAuthEmail.length !== 0 ? 'text-black' : 'text-neutral-400'
          } text-xs font-semibold`}
          type="text"
          value={univAuthEmail}
          placeholder={UNIV_AUTH.EMAIL}
          onChange={(e) => {
            setUnivAuthEmail(e.target.value);
          }}
        />
        <Button
          buttonText={emailPost ? UNIV_AUTH.EMAIL_REBTN : UNIV_AUTH.EMAIL_BTN}
          type="userinfo"
          className={`w-[90px] h-[38px] ${
            univAuthEmail.length === 0 || emailPost
              ? 'bg-zinc-300 text-black'
              : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
          } rounded-[8px] justify-center items-center flex text-[10px] font-normal`}
          isDisabled={univAuthEmail.length === 0}
          onClickHandler={emailButtonHandler}
        />
      </div>
      <div className="absolute left-20 top-48 mt-3 ml-1 text-neutral-400 text-[10px] font-normal">
        {UNIV_AUTH.EMAIL_INFO}
      </div>
      {emailPost === 1 ? (
        <div className="absolute right-20 top-48 mt-3 text-[#517EF3] text-[10px] font-normal">
          {UNIV_AUTH.EMAIL_SUCCESS}
        </div>
      ) : emailPost === 2 ? (
        <div className="absolute right-20 top-48 mt-3 text-[#FF7272] text-[10px] font-normal">
          {UNIV_AUTH.EMAIL_FAIL}
        </div>
      ) : emailPost === 3 ? (
        <div className="absolute right-20 top-48 mt-3 text-[#FF7272] text-[10px] font-normal">
          {UNIV_AUTH.EMAIL_EXIST}
        </div>
      ) : null}
      <div className="absolute top-56 mt-1 flex justify-between w-[320px]">
        <input
          className={`w-[217px] h-[38px] pl-4 rounded-[8px] focus:outline-none border ${
            codePost === 1
              ? 'border-[#517EF3]'
              : codePost === 2
                ? 'border-[#FF7272]'
                : 'border-zinc-300'
          } justify-start items-center flex ${
            univAuthCode.length !== 0 ? 'text-black' : 'text-neutral-400'
          } text-xs font-semibold`}
          type="text"
          value={univAuthCode}
          placeholder={UNIV_AUTH.AUTH_CODE}
          onChange={(e) => {
            setUnivAuthCode(e.target.value);
          }}
        />
        <Button
          buttonText={UNIV_AUTH.AUTH_CODE_BTN}
          type="userinfo"
          className={`w-[90px] h-[38px] ${
            univAuthCode.length === 0 || codePost !== 0
              ? 'bg-zinc-300 text-black'
              : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
          } rounded-[8px] justify-center items-center flex text-black text-[10px] font-normal`}
          isDisabled={univAuthCode.length === 0}
          onClickHandler={codeButtonHandler}
        />
      </div>
      {codePost !== 0 && (
        <div
          className={`absolute right-20 top-64 mt-4 ${
            codePost === 1 ? 'text-[#517EF3]' : 'text-[#FF7272]'
          } text-[10px] font-normal`}
        >
          {codePost === 1 ? UNIV_AUTH.SUCCESS_CODE : UNIV_AUTH.WRONG_CODE}
        </div>
      )}
    </div>
  );
};

export default UnivAuth;
