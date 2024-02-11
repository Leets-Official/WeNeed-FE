'use client';
import { useState } from 'react';
import { searchTeamIcon } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import Image from 'next/image';
import Input from 'components/common/Input';
import SelectedNames from './SelectedNames';
import { useRecoilState } from 'recoil';
import { userIdForm } from 'recoil/upload';

const SearchTeamInput = () => {
  const [searchText, setSearchText] = useState('');
  const [relatedUsers, setRelatedUsers] = useState<UserInfo[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<UserInfo[]>([]);
  const [userIds, setUserIds] = useRecoilState(userIdForm);

  const searchUser = async (searchText: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/upload/portfolio/searchName?searchText=${searchText}`,
      { cache: 'no-store' },
    );
    const data = await res.json();
    return data;
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(() => event.target.value);
    const relatedUsers = await searchUser(searchText);
    if (relatedUsers) {
      setRelatedUsers(relatedUsers);
    }
  };

  const handleSelect = (user: UserInfo) => {
    setSelectedUsers((prevUsers) => [...prevUsers, user]);
    setUserIds((prevUserId) => [...prevUserId, user.userId]);
  };

  return (
    <div>
      <div className="flex w-[842px] h-[64.5px] rounded-[9px] border border-zinc-300 items-center overflow-y-auto">
        <div className="flex items-center gap-x-[15px] flex-wrap w-[680px] ml-[110px]">
          <SelectedNames
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
          />
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
                onClick={() => handleSelect(user)}
              >
                <Image
                  src={user.profileImage}
                  alt="프로필사진"
                  width="24"
                  height="24"
                  className="rounded-full"
                />
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
