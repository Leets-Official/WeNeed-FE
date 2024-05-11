import { useRecoilState } from 'recoil';
import {
  filestate,
  imageBlobState,
  orderState,
  textState,
  thumbnailState,
  thumbnailUrlState,
  uploadDataState,
} from 'recoil/upload';

const useInit = () => {
  const [items, setItems] = useRecoilState<DndTextTypes[]>(textState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const [images, setImages] = useRecoilState<BlobImages[]>(imageBlobState);
  const [thumbnail, setThumbnail] = useRecoilState<File | null>(thumbnailState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlState);

  const initPF = () => {
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
    setItems([]);
    setFiles([]);
    setImages([]);
    setOrderId(0);
    setThumbnail(null);
    setThumbnailUrl('');
  };

  return {
    initPF,
  };
};

export default useInit;
