'use client';
import Icons from 'components/common/Icons';
import { closeIcon } from 'ui/IconsPath';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import useAddText from 'hooks/upload/useAddText';

interface UploadTextProps {
  uploadInfo: UploadPropTypes;
}

const UploadText = ({ uploadInfo }: UploadTextProps) => {
  const { fileType, announcement, rule } = uploadInfo;
  const { text, setText, handleConfirm, isEditing, startEdit } = useAddText();

  return (
    <div className="flex flex-col w-[922px] h-[360px] bg-white rounded-[9px]">
      <div className="flex flex-row-reverse mt-[15px] mr-[15px]">
        <Icons name={closeIcon} className="cursor-pointer" />
      </div>
      <div className="px-[40px]">
        <div className="text-black text-lg font-bold">{fileType}</div>
        <div className="w-[843px] h-[184px] flex flex-col items-center justify-center rounded-[9px] border-2 border-dashed border-neutral-700 mt-[26px]  text-[#D9D9D9]">
          {isEditing ? (
            <div className="flex text-sm font-normal overflow-y-auto">
              <textarea
                value={text}
                className="w-[782px] h-[124px] border-none text-black font-semibold focus:outline-none focus:border-none"
                onChange={(e) => {
                  setText(e.target.value);
                }}
                autoFocus
              ></textarea>
            </div>
          ) : (
            <div
              className="flex flex-col items-center gap-y-[6px] text-[#D9D9D9] font-semibold"
              onClick={startEdit}
            >
              <span className="text-base">{announcement}</span>
              <span className="text-xs">{rule}</span>
            </div>
          )}
        </div>
        <div className="flex flex-row-reverse mt-[24px]">
          <ConfirmButton
            btnClick={() => handleConfirm(fileType)}
            btnText={text}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadText;
