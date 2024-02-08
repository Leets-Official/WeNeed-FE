'use client';
import Icons from 'components/common/Icons';
import SearchTeamInput from './SearchTeamInput';
import Button from 'components/common/Button';
import { closeIcon } from 'ui/IconsPath';
interface SearchTeamProps {
  closeModal?: () => void;
}

const SearchTeam = ({ closeModal }: SearchTeamProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col w-[922px] h-[244px] rounded-[9px] bg-white">
        <div
          onClick={closeModal}
          className="flex flex-row-reverse mt-[15px] mr-[15px]"
        >
          <Icons name={closeIcon} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-y-[26px] text-lg font-semibold ml-[40px]">
          <p>팀원 추가하기</p>
          <SearchTeamInput />
        </div>
        <div className="flex flex-row-reverse mt-[25px] mr-10">
          <Button
            buttonText={'확인'}
            type={'small'}
            isDisabled={false}
            onClickHandler={() => console.log('클릭')}
            className="flex w-[186px] h-[34px] text-white text-base bg-gradient-to-r from-cyan-300 to-blue-500 rounded-[10px] justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchTeam;
