'use client';
import Icons from 'components/common/Icons';
import { closeIcon } from 'ui/IconsPath';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import useAddText from 'hooks/upload/useAddText';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { uploadDataState } from 'recoil/upload';
interface UploadTextProps {
  uploadInfo: UploadPropTypes;
  closeModal?: () => void;
  isEdit?: boolean;
  id?: string;
}

const UploadText = ({
  uploadInfo,
  closeModal,
  isEdit,
  id,
}: UploadTextProps) => {
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const { fileType, announcement, rule } = uploadInfo;
  const { text, setText, handleConfirm, isEditing, startEdit, updateText } =
    useAddText();
  const isShare = fileType === '나누고 싶은 큰 문장';
  console.log(isShare);
  useEffect(() => {
    if (id) {
      if (id === 'share') {
        setText(uploadData.sharedText || '');
      } else {
        const content = uploadData.content.find((item) => item.id === id);
        if (content) {
          if (content.type === 'text' || 'link' || 'audio') {
            setText(content.data);
          }
        }
      }
    }
  }, []);
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
          <div onClick={closeModal} className="flex flex-row-reverse mt-[24px]">
            <ConfirmButton
              btnClick={
                !isEdit
                  ? () => handleConfirm(fileType)
                  : () => {
                      if (isShare) {
                        console.log(text, '나누고싶은 문장 변경');
                        setUploadData({ ...uploadData, sharedText: text });
                      } else {
                        updateText(id || '', text);
                      }
                    }
              }
              btnText={text}
              isWritten={text.trim() === ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadText;
