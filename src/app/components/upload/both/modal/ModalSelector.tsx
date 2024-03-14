import {
  docs,
  image,
  link,
  share,
  sound,
  text,
  video,
} from 'ui/upload/fileType';
import UploadFile from './uploadFile/UploadFile';
import UploadText from './uploadFile/UploadText';

interface ModalSelectorProps {
  fileType: string;
  closeModal: () => void;
  isEdit?: boolean;
  id?: string;
}

const ModalSelector = ({
  fileType,
  closeModal,
  isEdit,
  id,
}: ModalSelectorProps) => {
  switch (fileType) {
    case '텍스트':
      return (
        <UploadText
          uploadInfo={text}
          closeModal={closeModal}
          isEdit={isEdit}
          id={id}
        />
      );
    case '오디오':
      return (
        <UploadText
          uploadInfo={sound}
          closeModal={closeModal}
          isEdit={isEdit}
          id={id}
        />
      );
    case '링크':
      return (
        <UploadText
          uploadInfo={link}
          closeModal={closeModal}
          isEdit={isEdit}
          id={id}
        />
      );
    case '이미지':
      return (
        <UploadFile
          uploadInfo={image}
          closeModal={closeModal}
          isEdit={isEdit}
          id={id}
        />
      );
    case '문서':
      return (
        <UploadFile
          uploadInfo={docs}
          closeModal={closeModal}
          isEdit={isEdit}
          id={id}
        />
      );
    case '나누고 싶은 문장':
      return (
        <UploadText
          uploadInfo={share}
          closeModal={closeModal}
          isEdit={isEdit}
          id={id}
        />
      );
    case '비디오':
      return (
        <UploadFile
          uploadInfo={video}
          closeModal={closeModal}
          isEdit={isEdit}
          id={id}
        />
      );
    default:
      return null;
  }
};

export default ModalSelector;
