'use client';
import { useState } from 'react';
import { searchTeamIcon } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import Image from 'next/image';
import Input from 'components/common/Input';
import SelectedNames from './SelectedNames';

const SearchTeamInput = () => {
  const [searchText, setSearchText] = useState('');
  const [relatedUsers, setRelatedUsers] = useState<userInfo[]>([]);
  const [selectedNickName, setSelectedNickName] = useState<string[]>([]);

  async function MainRecruitingPage() {
    const { users }: ResponseUploadSearch = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/upload/portfolio/search/${searchText}`,
      { cache: 'no-store' },
    ).then((res) => res.json());
    const relatedUsers = users;
    setRelatedUsers(relatedUsers);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
    MainRecruitingPage();
  };

  const handleSelect = (nickname: string) => {
    console.log(`${nickname} 멤버 추가 기능 실행`);
    setSelectedNickName((prevNames) => [...prevNames, nickname]);
  };

  return (
    <div>
      <div className="flex w-[842px] h-[64.5px] rounded-[9px] border border-zinc-300 items-center overflow-y-auto">
        <div className="flex items-center gap-x-[15px] flex-wrap w-[680px] ml-[110px]">
          <SelectedNames selectedNames={selectedNickName} />
          <Input
            type={'upload'}
            className=""
            placeholder="함께한 팀원의 이름을 검색해보세요."
            textValue={searchText}
            onChange={handleChange}
          />
        </div>
        <Icons name={searchTeamIcon} />
      </div>
      <div className="relative">
        {relatedUsers.length >= 0 && (
          <div className="absolute top-full left-0 w-[825px] max-h-[300px] bg-zinc-300 rounded-[9px] overflow-y-auto">
            {relatedUsers.map((user, index) => (
              <div
                key={user.userId}
                className="flex items-center w-[797px] h-[48px] gap-x-[39px] cursor-pointer hover:bg-gray-100 border-t border-white pl-[37px]"
                onClick={() => handleSelect(user.nickname)}
              >
                {/* <Image
                  src={user.profile}
                  alt="프로필"
                  width="24"
                  height="24"
                  className="rounded-full"
                /> */}
                <div className="text-base font-semibold">{user.nickname}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchTeamInput;
