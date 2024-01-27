import Icons from 'components/common/Icons';
import { closeIcon, titleIcon } from 'ui/IconsPath';
import { INTERESTED_TAG_LIST } from 'constants/portfolio';
import Dropdown from '../../both/modal/uploadFile/Dropdown';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import DropdownTag from 'components/upload/both/modal/uploadFile/DropdownTag';

const SelectDetailP = () => {
  return (
    <div className="flex flex-col w-[922px] h-[361px] bg-white rounded-[9px]">
      <div className="flex flex-row-reverse mt-[15px] mr-[14px]">
        <Icons name={closeIcon} />
      </div>
      <div className="w-[825px] ml-[40px] mb-[34px] text-black text-lg font-bold ">
        게시물 업로드
      </div>
      <div className="flex flex-col gap-y-[10px] mr-[58px] ml-[40px]">
        <div className="w-auto h-[49.96px] pl-[30px] pr-[27px] rounded-[10px] border border-zinc-300 flex items-center place-content-between">
          <div className="flex gap-x-[2px]">
            <p>제목</p>
            <p className="text-red-400">*</p>
          </div>
          <div className="flex flex-reverse-row w-auto items-center">
            <input className="w-[500px] text-right mr-[21px] focus:outline-none focus:border-none" />
            <Icons name={titleIcon} />
          </div>
        </div>
        <DropdownTag
          options={INTERESTED_TAG_LIST}
          title={'태그'}
          announcement={'게시물에 관련된 태그를 모두 선택해주세요!'}
        />
        <div className="w-auto h-[49.96px] pl-[30px] pr-[27px] rounded-[10px] border border-zinc-300 flex items-center place-content-between">
          <p>스킬</p>
          <div className="flex flex-reverse-row w-auto items-center">
            <input className="w-[500px] text-right mr-[21px] focus:outline-none focus:border-none" />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-[14px]">
          <ConfirmButton
            btnClick={() => console.log('클릭됨')}
            btnText={'빈 배열인지 확인'}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDetailP;
