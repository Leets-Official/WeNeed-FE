'use client';

import { USER_INFO } from 'constants/userinfoset';
import Button from 'components/common/Button';
import { userInfoState, userInfoSetState } from 'recoil/userinfo';
import { useRecoilState } from 'recoil';
import DropDown from 'components/mypage/profile/DropDown';
import { useState } from 'react';

const fetchData = async (nickName: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/user/checkNickname?nickName=${nickName}`,
      {
        method: 'POST',
        cache: 'no-store',
      },
    ).then((res) => res.json());

    if (response === false) {
      console.log('Fetch check nickname Data Success:', response);
    } else {
      console.log('Fetch check nickname Data Fail:', response);
    }
    return response;
  } catch (error) {
    console.error('Error during Fetch Data:', error);
    return error;
  }
};

const UserInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [userInfoSet, setUserInfoSet] = useRecoilState(userInfoSetState);
  const [successNickname, setSuccessNickname] = useState(0);
  const [isGradeOpen, setIsGradeOpen] = useState<boolean>(false);
  const [isMajorOpen, setIsMajorOpen] = useState<boolean>(false);
  const [isDoubleMajorOpen, setIsDoubleMajorOpen] = useState<boolean>(false);
  const [isInterestFieldOpen, setIsInterestFieldOpen] =
    useState<boolean>(false);

  const handleItemSelect = (type: string) => (item: string) => {
    handleIsOpen(type);
    setUserInfo((prev) => ({
      ...prev,
      userGrade: type === 'grade' ? parseInt(item[0]) : prev.userGrade,
      major: type === 'major' ? item : prev.major,
      doubleMajor: type === 'doubleMajor' ? item : prev.doubleMajor,
      interestField: type === 'interestField' ? item : prev.interestField,
    }));
    console.log(userInfo);
  };

  const handleIsOpen = (type: string) => {
    switch (type) {
      case 'grade':
        setIsGradeOpen((prev) => !prev);
        setIsMajorOpen(false);
        setIsDoubleMajorOpen(false);
        setIsInterestFieldOpen(false);
        break;
      case 'major':
        setIsGradeOpen(false);
        setIsMajorOpen((prev) => !prev);
        setIsDoubleMajorOpen(false);
        setIsInterestFieldOpen(false);
        break;
      case 'doubleMajor':
        setIsGradeOpen(false);
        setIsMajorOpen(false);
        setIsDoubleMajorOpen((prev) => !prev);
        setIsInterestFieldOpen(false);
        break;
      case 'interestField':
        setIsGradeOpen(false);
        setIsMajorOpen(false);
        setIsDoubleMajorOpen(false);
        setIsInterestFieldOpen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleNickname = async () => {
    const response = await fetchData(userInfo.nickname);
    console.log('handle nickname response', response);
    if (response === false) {
      setUserInfoSet((prev) => ({ ...prev, successNickname: true }));
      setSuccessNickname(1);
    } else {
      setUserInfoSet((prev) => ({ ...prev, successNickname: false }));
      setSuccessNickname(2);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="absolute left-20 top-20 text-[20px] font-semibold ">
        {USER_INFO.TITLE}
      </div>
      <div className="w-[320px] h-full">
        <div className="absolute top-40 flex justify-between w-[320px]">
          <label className="relative flex items-center">
            <input
              className={`w-[239px] h-[38px] pr-4 rounded-[8px] focus:outline-none border ${
                successNickname === 1
                  ? 'border-[#517EF3]'
                  : successNickname === 2
                    ? 'border-[#FF7272]'
                    : 'border-zinc-300'
              } text-[#3A3A3A] text-xs font-semibold text-right`}
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
          {successNickname === 1 ? (
            <div className="absolute right-1 top-8 mt-3 text-[#517EF3] text-[10px] font-normal">
              {USER_INFO.NICKNAME_SUCCESS}
            </div>
          ) : successNickname === 2 ? (
            <div className="absolute right-1 top-8 mt-3 text-[#FF7272] text-[10px] font-normal">
              {USER_INFO.NICKNAME_FAIL}
            </div>
          ) : null}
          <Button
            buttonText={USER_INFO.NICKNAME_BTN}
            type="userinfo"
            className={`w-[68px] h-[38px] ${
              userInfo.nickname.length === 0
                ? 'bg-zinc-300 text-black'
                : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
            } rounded-[8px] justify-center items-center flex text-[10px] font-normal`}
            isDisabled={userInfo.nickname.length === 0}
            onClickHandler={handleNickname}
          />
        </div>
        <DropDown
          sortedItemList={[...USER_INFO.GRADE_LIST]}
          selectedItem={
            userInfo.userGrade === 0
              ? USER_INFO.GRADE
              : `${userInfo.userGrade}학년`
          }
          onItemSelect={handleItemSelect('grade')}
          onOpen={() => handleIsOpen('grade')}
          isOpen={isGradeOpen}
          className={`absolute top-52 mt-4 w-[320px] max-h-[300px]`}
          buttonClassName={`relative w-[320px] h-[38px] rounded-[8px] border border-zinc-300 ${
            userInfo.userGrade !== 0 ? 'text-[#3A3A3A]' : 'text-neutral-400'
          } text-xs font-semibold text-left flex justify-between items-center px-4`}
          dropDownClassName={`z-40 relative w-[320px] max-h-[210px] border rounded-[9px] bg-gray-200 overflow-y-scroll scrollbar-hide`}
          itemClassName={`w-[300px] h-[30px] py-2 pl-2 text-xs font-normal hover:text-black`}
        />
        <DropDown
          sortedItemList={[...USER_INFO.MAJOR_LIST].sort()}
          selectedItem={
            userInfo.major.length === 0 ? USER_INFO.MAJOR : userInfo.major
          }
          onItemSelect={handleItemSelect('major')}
          onOpen={() => handleIsOpen('major')}
          isOpen={isMajorOpen}
          className={`absolute top-64 mt-4 w-[320px] max-h-[300px]`}
          buttonClassName={`relative w-[320px] h-[38px] rounded-[8px] border border-zinc-300 ${
            userInfo.major !== '' ? 'text-[#3A3A3A]' : 'text-neutral-400'
          } text-xs font-semibold text-left flex justify-between items-center px-4`}
          dropDownClassName={`z-30 relative w-[320px] max-h-[210px] border rounded-[9px] bg-gray-200 overflow-y-scroll scrollbar-hide`}
          itemClassName={`w-[300px] h-[30px] py-2 pl-2 text-xs font-normal hover:text-black`}
        />
        <DropDown
          sortedItemList={[...USER_INFO.DOUBLE_MAJOR_LIST].sort()}
          selectedItem={
            userInfo.doubleMajor.length === 0
              ? USER_INFO.DOUBLE_MAJOR
              : userInfo.doubleMajor
          }
          onItemSelect={handleItemSelect('doubleMajor')}
          onOpen={() => handleIsOpen('doubleMajor')}
          isOpen={isDoubleMajorOpen}
          className={`absolute top-[304px] mt-4 w-[320px] max-h-[300px]`}
          buttonClassName={`relative w-[320px] h-[38px] rounded-[8px] border border-zinc-300 ${
            userInfo.doubleMajor !== '' ? 'text-[#3A3A3A]' : 'text-neutral-400'
          } text-xs font-semibold text-left flex justify-between items-center px-4`}
          dropDownClassName={`z-30 relative w-[320px] max-h-[210px] border rounded-[9px] bg-gray-200 overflow-y-scroll scrollbar-hide`}
          itemClassName={`w-[300px] h-[30px] py-2 pl-2 text-xs font-normal hover:text-black`}
        />
        <DropDown
          sortedItemList={[...USER_INFO.INTEREST_FIELD_LIST]}
          selectedItem={
            userInfo.interestField.length === 0
              ? USER_INFO.INTEREST_FIELD
              : userInfo.interestField
          }
          onItemSelect={handleItemSelect('interestField')}
          onOpen={() => handleIsOpen('interestField')}
          isOpen={isInterestFieldOpen}
          className={`absolute top-[352px] mt-4 w-[320px] max-h-[300px]`}
          buttonClassName={`relative w-[320px] h-[38px] rounded-[8px] border border-zinc-300 ${
            userInfo.interestField !== ''
              ? 'text-[#3A3A3A]'
              : 'text-neutral-400'
          } text-xs font-semibold text-left flex justify-between items-center px-4`}
          dropDownClassName={`z-30 relative w-[320px] max-h-[210px] border rounded-[9px] bg-gray-200 overflow-y-scroll scrollbar-hide`}
          itemClassName={`w-[300px] h-[30px] py-2 pl-2 text-xs font-normal hover:text-black`}
        />
      </div>
    </div>
  );
};

export default UserInfo;
