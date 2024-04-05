import { useRecoilState } from 'recoil';
import {
  fileBlobState,
  filestate,
  imageBlobState,
  orderState,
  textState,
  thumbnailState,
  uploadDataState,
  uploadForm,
} from 'recoil/upload';

const useInit = () => {
  const [items, setItems] = useRecoilState<DndTextTypes[]>(textState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const [images, setImages] = useRecoilState<BlobImages[]>(imageBlobState);
  const [blobFiles, setBlobFiles] = useRecoilState<BlobFiles[]>(fileBlobState);
  const [thumbnail, setThumbnail] = useRecoilState<File | null>(thumbnailState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [uploadFormData, setUploadFormData] =
    useRecoilState<FormData>(uploadForm);

  const initPF = () => {
    console.log('초기화');
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
    setItems([]);
    setFiles([]);
    setImages([]);
    setBlobFiles([]);
    setOrderId(0);
    setThumbnail(null);
  };

  return {
    initPF,
  };
};

export default useInit;
