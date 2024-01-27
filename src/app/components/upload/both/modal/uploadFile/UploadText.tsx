'use client';
import Icons from 'components/common/Icons';
import { useState } from 'react';
import { closeIcon } from 'ui/IconsPath';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import { v4 as uuidv4 } from 'uuid';
import { uploadState } from 'recoil/upload';
import { useRecoilState } from 'recoil';
interface UploadTextProps {
  uploadInfo: UploadPropTypes;
}

const UploadText = ({ uploadInfo }: UploadTextProps) => {
  const { fileType, announcement, rule } = uploadInfo;
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useRecoilState(uploadState);

  const startEdit = () => {
    setIsEditing(true);
  };

  const addText = () => {
    setItems((prevData) => [
      ...prevData,
      {
        id: uuidv4(),
        type: 'text',
        content: text,
      },
    ]);
  };

  const addLink = () => {
    setItems((prevData) => [
      ...prevData,
      {
        id: uuidv4(),
        type: 'link',
        content: text,
      },
    ]);
  };

  const addSound = () => {
    setItems((prevData) => [
      ...prevData,
      {
        id: uuidv4(),
        type: 'sound',
        content: text,
      },
    ]);
  };

  const handleConfirm = () => {
    if (fileType === '링크') {
      addLink();
    } else if (fileType === '텍스트') {
      addText();
    } else if (fileType === '음성') {
      addSound();
    } else {
      console.log('기타 파일을 처리합니다.');
    }
  };

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
          <ConfirmButton btnClick={handleConfirm} btnText={text} />
        </div>
      </div>
    </div>
  );
};

export default UploadText;
