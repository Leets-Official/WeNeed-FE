import { docs, image, link, sound, text, video } from 'ui/upload/fileType';
import UploadFile from './uploadFile/UploadFile';
import UploadText from './uploadFile/UploadText';

interface ModalSelectorProps {
  fileType: string;
  closeModal: () => void;
}

const ModalSelector = ({ fileType, closeModal }: ModalSelectorProps) => {
  switch (fileType) {
    case '텍스트':
      return <UploadText uploadInfo={text} closeModal={closeModal} />;
    case '오디오':
      return <UploadText uploadInfo={sound} closeModal={closeModal} />;
    case '링크':
      return <UploadText uploadInfo={link} closeModal={closeModal} />;
    case '이미지':
      return <UploadFile uploadInfo={image} closeModal={closeModal} />;
    case '문서':
      return <UploadFile uploadInfo={docs} closeModal={closeModal} />;
    case '비디오':
      return <UploadFile uploadInfo={video} closeModal={closeModal} />;
    default:
      return null;
  }
};

export default ModalSelector;