'use client';
import TeamMate from './TeamMate';
import { useRecoilState } from 'recoil';
import { userIdForm } from 'recoil/upload';

interface SelectedNamesProps {
  selectedUsers: UserInfo[];
  setSelectedUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>;
}

const SelectedNames = ({
  selectedUsers,
  setSelectedUsers,
}: SelectedNamesProps) => {
  const [userIds, setUserIds] = useRecoilState(userIdForm);

  const handleRemove = (userId: number) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.filter((user) => user.userId !== userId),
    );
    setUserIds((prevUserId) =>
      prevUserId.filter((removedId) => removedId !== userId),
    );
  };
  return (
    <div className="flex items-center gap-x-[15px] flex-wrap">
      {selectedUsers.map((user, index) => (
        <TeamMate
          key={user.userId}
          imageURL={user.profileImage}
          nickName={user.nickname}
          deleteId={() => handleRemove(user.userId)}
        />
      ))}
    </div>
  );
};
export default SelectedNames;
