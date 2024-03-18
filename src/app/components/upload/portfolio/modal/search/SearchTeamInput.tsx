'use client';
import { useEffect, useState } from 'react';
import { searchTeamIcon } from 'ui/IconsPath';
import GradientProfileSM from 'ui/gradient/GradientProfileSM';
import Icons from 'components/common/Icons';
import Image from 'next/image';
import Input from 'components/common/Input';
import SelectedNames from './SelectedNames';
import { useRecoilState } from 'recoil';
import { userId } from 'recoil/upload';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { exceedAlert, overlapAlert } from 'components/upload/both/showToast';

const SearchTeamInput = () => {
  const [searchText, setSearchText] = useState('');
  const [relatedUsers, setRelatedUsers] = useState<UserInfo[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<UserInfo[]>([]);
  const [userIds, setUserIds] = useRecoilState(userId);
  const serverUrl = process.env.NEXT_PUBLIC_NEXT_SERVER;

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    if (searchText !== '') {
      const res = await fetch(
        `${serverUrl}/api/upload/portfolio/searchName?searchText=${searchText}`,
        { cache: 'no-store' },
      );
      const data = await res.json();
      setRelatedUsers(data);
    }
  };

  const handleSelect = (user: UserInfo) => {
    setRelatedUsers([]);
    const isAlreadySelected = selectedUsers.some(
      (selectedUser) => selectedUser.userId === user.userId,
    );
    if (selectedUsers.length >= 2) {
      exceedAlert();
    } else if (isAlreadySelected) {
      overlapAlert();
    } else {
      setSelectedUsers((prevUsers) => [...prevUsers, user]);
      setUserIds((prevUserId) => [...prevUserId, user.userId]);
    }
    setSearchText('');
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex w-[842px] h-[64.5px] rounded-[9px] border border-zinc-300 items-center overflow-y-auto">
        <div className="flex items-center gap-x-[15px] flex-wrap w-[740px] ml-10">
          <SelectedNames
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
          />
          <Input
            type={'upload'}
            className="flex-grow"
            placeholder="함께한 팀원의 이름을 검색해보세요.                  "
            textValue={searchText}
            onChange={handleChange}
          />
        </div>
        <Icons name={searchTeamIcon} />
      </div>
      <div className="relative">
        {relatedUsers.length >= 0 && (
          <div className="absolute top-full left-0 w-[842px] max-h-[300px] bg-zinc-300 rounded-[9px] overflow-y-auto">
            {relatedUsers.map((user, index) => (
              <div
                key={user.userId}
                className="flex items-center w-[840px] h-[48px] gap-x-[39px] cursor-pointer hover:bg-gray-100 border-t border-white pl-[37px]"
                onMouseLeave={() => handleSelect(user)}
              >
                {user.profileImage ? (
                  <Image
                    src={user.profileImage}
                    alt="프로필사진"
                    width="24"
                    height="24"
                    className="rounded-full"
                  />
                ) : (
                  <GradientProfileSM />
                )}

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
