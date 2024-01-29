'use client';
import Icons from 'components/common/Icons';
import { closeIcon, titleIcon } from 'ui/IconsPath';
import { INTERESTED_TAG_LIST } from 'constants/portfolio';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import DropdownTag from 'components/upload/both/modal/uploadFile/DropdownTag';
import { useState } from 'react';

const SelectDetailP = () => {
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleConfirm = () => {
    console.log('확인 버튼 클릭 시 로직');
  };

  return (
    <div className="flex flex-col w-[922px] h-[361px] bg-white rounded-[9px]">
      <div className="flex flex-row-reverse mt-[15px] mr-3.5">
        <Icons name={closeIcon} />
      </div>
      <div className="w-[825px] ml-10 mb-[34px] text-black text-lg font-bold ">
        게시물 업로드
      </div>
      <div className="flex flex-col gap-y-[10px] mr-[58px] ml-10">
        <div className="w-auto h-[49.96px] pl-[30px] pr-[27px] rounded-[10px] border border-zinc-300 flex items-center place-content-between">
          <div className="flex gap-x-[2px]">
            <p>제목</p>
            <p className="text-red-400">*</p>
          </div>
          <div className="flex flex-reverse-row w-auto items-center">
            <input
              className="w-[500px] text-right mr-[21px] focus:outline-none focus:border-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Icons name={titleIcon} />
          </div>
        </div>
        <DropdownTag
          options={INTERESTED_TAG_LIST}
          title={'태그'}
          announcement={'게시물에 관련된 태그를 모두 선택해주세요!'}
          onSelect={(tags) => setSelectedTags(tags)}
        />
        <div className="w-auto h-[49.96px] pl-[30px] pr-[27px] rounded-[10px] border border-zinc-300 flex items-center place-content-between">
          <p>스킬</p>
          <div className="flex flex-reverse-row w-auto items-center">
            <input className="w-[500px] text-right mr-[21px] focus:outline-none focus:border-none" />
          </div>
        </div>
        {(title.trim() === '' || selectedTags.length === 0) && (
          <div className="flex flex-row-reverse text-red-400 text-[10px] font-light ">
            필수항목을 모두 입력해주세요!{' '}
          </div>
        )}
        <div className="flex flex-row-reverse">
          <ConfirmButton
            btnClick={handleConfirm}
            btnText={'빈 배열인지 확인'}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDetailP;
