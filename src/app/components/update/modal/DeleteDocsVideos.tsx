'use client';
import { useRecoilState } from 'recoil';
import { filestate } from 'recoil/upload';
import { closeIcon } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import VideoForUpdate from '../VideoForUpdate';
import DocsForUpdate from '../DocsForUpdate';
import { useModal } from 'hooks/upload/useModal';
import DeleteIcon from 'ui/upload/DeleteIcon';
import useAddFile from 'hooks/upload/useAddFile';

const DeleteDocsVideos = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const { removeAllFile } = useAddFile();

  return (
    <div>
      <div onClick={openModal}>
        <DeleteIcon />
      </div>
      <div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="flex flex-col w-[922px] h-[381px] bg-white rounded-lg">
              <div
                onClick={closeModal}
                className="flex flex-row-reverse mt-4 mr-[18px]"
              >
                <Icons name={closeIcon} className="cursor-pointer" />
              </div>
              <div className="pl-10 pr-10">
                <div className="flex text-lg font-bold mb-0.5">삭제</div>
                <div
                  className="text-right text-red-400 text-xs font-medium mb-2.5"
                  onClick={removeAllFile}
                >
                  전체삭제
                </div>
                <div className="flex flex-col w-[842px] h-[209px] gap-y-2.5 p-4 rounded-lg border-2 border-neutral-700 border-dashed overflow-y-auto">
                  {files.map((file: DNDFileTypes, index) => {
                    if (file.type === 'docs') {
                      return (
                        <DocsForUpdate
                          key={index}
                          fileName={file.data}
                          id={file.id}
                          deleteMode={true}
                        />
                      );
                    } else if (file.type === 'video') {
                      return (
                        <VideoForUpdate
                          key={index}
                          fileName={file.data}
                          id={file.id}
                          deleteMode={true}
                        />
                      );
                    }
                  })}
                </div>
                <div className="flex flex-row-reverse mt-5">
                  <ConfirmButton
                    btnClick={closeModal}
                    btnText={'t'}
                    isWritten={false}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteDocsVideos;
