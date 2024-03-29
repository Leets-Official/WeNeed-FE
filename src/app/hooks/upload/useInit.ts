import { useRecoilState } from 'recoil';
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
    console.log('초기화');
    uploadFormData.delete('request');
    uploadFormData.delete('files');
    uploadFormData.delete('images');
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
    setOrderId(0);
  };

  return {
    initPF,
  };
};

export default useInit;
