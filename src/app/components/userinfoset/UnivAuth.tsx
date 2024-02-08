'use client';
import Button from 'components/common/Button';
import { UNIV_AUTH } from 'constants/userinfoset';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  univAuthEmailState,
  univAuthCodeState,
  univAuthState,
} from 'recoil/userinfo';

const fetchEmailData = async (email: string) => {
  try {
    const response = await fetch(`/api/v1/certify?email=${email}`, {
      method: 'POST',
      cache: 'no-store',
    });

    if (response.status === 200) {
      console.log('Fetch Email Data Success:', response.statusText);
      return response.status;
    } else {
      console.error('Fetch Email Data Error:', response.statusText);
      return response.status;
    }
  } catch (error) {
    console.error('Error during Fetch Email Data:', error);
  }
};

const fetchCodeData = async (email: string, code: string) => {
  try {
    const response = await fetch(`/api/v1/certifycode`, {
      method: 'POST',
      body: JSON.stringify({ code, email }),
      cache: 'no-store',
    });

    return response.status;
  } catch (error) {
    console.error('Error during Fetch Code:', error);
  }
};

const UnivAuth = () => {
  const [univAuthEmail, setUnivAuthEmail] = useRecoilState(univAuthEmailState);
  const [univAuthCode, setUnivAuthCode] = useRecoilState(univAuthCodeState);
  const [univAuth, setUnivAuth] = useRecoilState(univAuthState);
  const [emailPost, setEmailPost] = useState(false);
  const [codePost, setCodePost] = useState(0);

  const emailButtonHandler = async () => {
    const emailStatus = await fetchEmailData(univAuthEmail);
    if (emailStatus === 200) {
      setEmailPost(true);
    } else {
      console.log('Email Fetch Error:', emailStatus);
    }
  };

  const codeButtonHandler = async () => {
    const codeStatus = await fetchCodeData(univAuthEmail, univAuthCode);
    if (codeStatus === 200) {
      setCodePost(1);
      setUnivAuth(true);
    } else {
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
          className="w-[217px] h-[38px] pl-4 rounded-[8px] focus:outline-none border border-zinc-300 justify-start items-center flex text-neutral-400 text-xs font-semibold"
          type="text"
          value={univAuthEmail}
          placeholder={UNIV_AUTH.EMAIL}
          onChange={(e) => {
            setUnivAuthEmail(e.target.value);
            console.log(univAuthEmail);
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
      {emailPost && (
        <div className="absolute right-20 top-48 mt-3 text-[#517EF3] text-[10px] font-normal">
          {UNIV_AUTH.EMAIL_SUCCESS}
        </div>
      )}
      <div className="absolute top-56 mt-1 flex justify-between w-[320px]">
        <input
          className="w-[217px] h-[38px] pl-4 rounded-[8px] focus:outline-none border border-zinc-300 justify-start items-center flex text-neutral-400 text-xs font-semibold"
          type="text"
          value={univAuthCode}
          placeholder={UNIV_AUTH.AUTH_CODE}
          onChange={(e) => {
            setUnivAuthCode(e.target.value);
            console.log(univAuthCode);
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
          isDisabled={false}
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
