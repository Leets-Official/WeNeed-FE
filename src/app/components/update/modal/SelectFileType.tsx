'use client';

import Icons from 'components/common/Icons';
import MiniFileType from 'components/upload/both/MiniFileType';
import { UPDATE_FILE_TYPES } from 'constants/update';
import { useModal } from 'hooks/upload/useModal';
import { closeIcon, miniFileIcon, updateFileIcon } from 'ui/IconsPath';
import EditDocsVideos from './EditDocsVideos';

interface SelectFileTypeProps {
  closeSelect: () => void;
}

const SelectFileType = ({ closeSelect }: SelectFileTypeProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  console.log('파일타입 선택하기 열림');

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col w-96 h-36 bg-white rounded-lg gap-x-10">
        <div
          onClick={closeSelect}
          className="flex flex-row-reverse mt-[15px] mr-[15px]"
        >
          <Icons name={closeIcon} className="cursor-pointer" />
        </div>
        <div className="flex justify-center gap-x-[40px] mt-2">
          {UPDATE_FILE_TYPES.map((item, index) => (
            <EditDocsVideos
              key={item}
              title={item}
              iconInfo={{ ...miniFileIcon, path: updateFileIcon[index] }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectFileType;
