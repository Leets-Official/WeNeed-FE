import { useRecoilState } from 'recoil';
import { useResetRecoilState } from 'recoil';
import {
  fileBlobState,
  filestate,
  imageBlobState,
  orderState,
  textState,
  uploadDataState,
  uploadForm,
} from 'recoil/upload';

const useInit = () => {
  const [items, setItems] = useRecoilState<DndTextTypes[]>(textState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const [images, setImages] = useRecoilState<BlobImages[]>(imageBlobState);
  const [blobFiles, setBlobFiles] = useRecoilState<BlobFiles[]>(fileBlobState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [uploadFormData, setUploadFormData] =
    useRecoilState<FormData>(uploadForm);
  const initPF = () => {
    setItems([]);
    setFiles([]);
    setImages([]);
    setBlobFiles([]);
    setUploadData({
      articleType: 'PORTFOLIO',
      title: '',
      content: [],
      skills: [],
      tags: [],
      teamMembersId: [],
      sharedText: '',
      thumbnail: '',
    });
    uploadFormData.delete('request');
    uploadFormData.delete('files');
    uploadFormData.delete('images');
    setOrderId(0);
  };
  const initRC = () => {
    setItems([]);
    setImages([]);
    setUploadData({
      articleType: 'RECRUITING',
      title: '',
      content: [],
      skills: [],
      tags: [],
      teamMembersId: [],
      sharedText: '',
      thumbnail: '',
    });
    uploadFormData.delete('request');
    uploadFormData.delete('images');
    setOrderId(0);
  };

  return {
    initRC,
    initPF,
  };
};

export default useInit;
