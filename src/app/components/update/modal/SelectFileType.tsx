'use client';

import Icons from 'components/common/Icons';
import { UPDATE_FILE_TYPES } from 'constants/update';
import { closeIcon, miniFileIcon, updateFileIcon } from 'ui/IconsPath';
import EditDocsVideos from './EditDocsVideos';

interface SelectFileTypeProps {
  closeSelect: () => void;
}

const SelectFileType = ({ closeSelect }: SelectFileTypeProps) => {
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
