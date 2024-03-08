'use client';
import { useRecoilValue } from 'recoil';
import { filestate } from 'recoil/upload';
import { closeIcon } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import VideoForUpdate from '../VideoForUpdate';
import DocsForUpdate from '../DocsForUpdate';

interface FileStatusProps {
  fileType: string;
  closeStatus: () => void;
}

const FileStatus = ({ fileType, closeStatus }: FileStatusProps) => {
  const files = useRecoilValue(filestate);
  console.log('files현황: ', files);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col w-[922px] h-[289px] bg-white rounded-lg">
        <div
          onClick={closeStatus}
          className="flex flex-row-reverse mt-4 mr-[18px]"
        >
          <Icons name={closeIcon} className="cursor-pointer" />
        </div>
        <div className="pl-10 pr-10">
          <div className="flex text-lg font-bold mb-[24px]">
            {fileType} 수정
          </div>
          <div className="flex flex-col w-[842px] h-[118px] gap-y-2.5 px-3.5 py-4 rounded-lg border-2 border-neutral-700 border-dashed overflow-y-auto">
            {files.map((file: DNDFileTypes, index) => {
              if (fileType === '문서' && file.type === 'docs') {
                return (
                  <DocsForUpdate
                    key={index}
                    fileName={file.data}
                    id={file.id}
                    deleteMode={false}
                  />
                );
              } else if (fileType === '비디오' && file.type === 'video') {
                return (
                  <VideoForUpdate
                    key={index}
                    fileName={file.data}
                    id={file.id}
                    deleteMode={false}
                  />
                );
              }
            })}
          </div>
          <div className="flex flex-row-reverse mt-5">
            <ConfirmButton
              btnClick={closeStatus}
              btnText={fileType}
              isWritten={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileStatus;
