'use client';
import Image from 'next/image';
import Icons from 'components/common/Icons';
import ProgressBar from './ProgressBar';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import { closeIcon } from 'ui/IconsPath';
import { imgAndVideo } from 'ui/upload/fileType';
import useAddFile from 'hooks/upload/useAddFile';
interface UploadFileProps {
  uploadInfo: UploadPropTypes;
  closeModal: () => void;
}

const UploadFile = ({ uploadInfo, closeModal }: UploadFileProps) => {
  const { fileType, sizeLimit, announcement, rule, accept } = uploadInfo;
  const {
    fileInfo,
    handleConfirm,
    inputRef,
    divClick,
    handleFileChange,
    handleDrop,
  } = useAddFile();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col w-[922px] h-[360px] bg-white rounded-[9px]">
        <div
          onClick={closeModal}
          className="flex flex-row-reverse mt-[15px] mr-[15px]"
        >
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
            onDrop={(e) => handleDrop(e)}
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
              onChange={(e) => handleFileChange(e)}
              className="w-auto h-auto hidden"
              accept={accept}
            />
          </div>
          <div onClick={closeModal} className="flex flex-row-reverse mt-[14px]">
            <ConfirmButton
              btnClick={() => handleConfirm(fileType)}
              btnText={fileInfo.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
