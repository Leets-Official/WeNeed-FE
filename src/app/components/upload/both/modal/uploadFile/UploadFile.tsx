'use client';
import { useRef, useState } from 'react';
import { closeIcon } from 'ui/IconsPath';
import Image from 'next/image';
import Icons from 'components/common/Icons';
import ProgressBar from './ProgressBar';
import { imgAndVideo } from 'ui/upload/fileType';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import { v4 as uuidv4 } from 'uuid';
import { uploadState } from 'recoil/upload';
import { filestate } from 'recoil/dndFiles';
import { useRecoilState } from 'recoil';

interface FileInfo {
  name: string;
  size: number;
  url: string;
}

interface UploadFileProps {
  uploadInfo: UploadPropTypes;
}

const UploadFile = ({ uploadInfo }: UploadFileProps) => {
  const { fileType, sizeLimit, announcement, rule, accept } = uploadInfo;
  const [fileInfo, setFileInfo] = useState<FileInfo>({
    name: '',
    size: 0,
    url: '',
  });
  const [items, setItems] = useRecoilState<DndTextTypes[]>(uploadState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);

  const inputRef = useRef<HTMLInputElement>(null);

  const divClick = () => inputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFileInfo({
        name: selectedFile.name,
        size: selectedFile.size,
        url: URL.createObjectURL(selectedFile),
      });
    } else {
      alert('올바른 파일이 선택되지 않았습니다!');
    }
  };

  const addImage = () => {
    setItems((prevData) => [
      ...prevData,
      {
        id: uuidv4(),
        type: 'image',
        content: fileInfo.name,
        url: fileInfo.url,
      },
    ]);
  };

  const addVideo = () => {
    setFiles((prevData) => [
      ...prevData,
      {
        id: uuidv4(),
        type: 'video',
        content: fileInfo.name,
        url: fileInfo.url,
      },
    ]);
  };

  const addDocs = () => {
    setFiles((prevData) => [
      ...prevData,
      {
        id: uuidv4(),
        type: 'docs',
        content: fileInfo.name,
        url: fileInfo.url,
      },
    ]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files?.[0];
    setFileInfo({
      name: selectedFile?.name,
      size: selectedFile.size,
      url: URL.createObjectURL(selectedFile),
    });
  };

  const handleConfirm = () => {
    if (fileType === '영상') {
      addVideo();
    } else if (fileType === '문서') {
      addDocs();
    } else if (fileType === '이미지') {
      addImage();
    } else {
      return 0;
    }
  };

  return (
    <div className="flex flex-col w-[922px] h-[360px] bg-white rounded-[9px]">
      <div className="flex flex-row-reverse mt-[15px] mr-[15px]">
        <Icons name={closeIcon} className="cursor-pointer" />
      </div>
      <div className="px-[40px]">
        <div className="text-black text-lg font-bold">{fileType}</div>
        <div className="text-right text-neutral-400 text-xs font-medium">
          최대용량 : {sizeLimit}
        </div>
        <div
          className="w-[843px] h-[184px] rounded-[9px] border-2 border-dashed border-neutral-700 mt-[11px] cursor-pointer"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={divClick}
        >
          {fileInfo.name != '' ? (
            <div className="flex gap-x-[12px] mt-[30px] ml-[22px] text-black text-xs font-medium">
              <div>
                {fileType === '이미지' && (
                  <Image
                    src={fileInfo.url}
                    alt={fileInfo.name}
                    {...imgAndVideo}
                  />
                )}
                {fileType === '영상' && (
                  <video src={fileInfo.url} {...imgAndVideo} />
                )}
              </div>
              <div
                className={`flex ${
                  fileType === '문서'
                    ? 'gap-x-[20px] items-center'
                    : 'flex-col gap-y-[12px]'
                }`}
              >
                <div>{fileInfo.name}</div>
                <div>
                  {fileInfo.size >= 100000
                    ? `${(fileInfo.size / 1024 ** 2).toFixed(2)}mb`
                    : `${Math.floor(fileInfo.size / 1024)}kb`}
                </div>
                <ProgressBar />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-y-[12.5px] mt-[60px] text-[#D9D9D9] font-semibold">
              <span className="text-base">{announcement}</span>
              <span className="text-center text-xs whitespace-pre-wrap">
                {rule}
              </span>
            </div>
          )}
          <input
            type="file"
            multiple
            ref={inputRef}
            onChange={handleFileChange}
            className="w-auto h-auto hidden"
            accept={accept}
          />
        </div>
        <div className="flex flex-row-reverse mt-[14px]">
          <ConfirmButton btnClick={handleConfirm} btnText={fileInfo.name} />
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
