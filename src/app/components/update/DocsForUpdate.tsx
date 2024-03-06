import Icons from 'components/common/Icons';
import ModalSelector from 'components/upload/both/modal/ModalSelector';
import { useModal } from 'hooks/upload/useModal';
import { dndDocsIcon, updatePen } from 'ui/IconsPath';

interface DocsForUpdateProps {
  fileName: string;
  id: string;
}

const DocsForUpdate = ({ fileName, id }: DocsForUpdateProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  console.log('videoforupdate에서 받아온 id', id);

  return (
    <div className="flex h-auto">
      <div className="flex items-center h-9 px-5 py-2 gap-x-4 rounded-[10px] bg-black">
        <Icons name={dndDocsIcon} />
        <div className="text-[#00E0EE] text-sm font-normal">{fileName}</div>
        <div onClick={openModal}>
          <Icons name={updatePen} />
        </div>
        <div>
          {isOpen && (
            <ModalSelector
              fileType={'문서'}
              closeModal={closeModal}
              isEdit={true}
              id={id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsForUpdate;
