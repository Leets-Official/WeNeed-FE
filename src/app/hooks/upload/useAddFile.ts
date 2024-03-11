import { useRecoilState } from 'recoil';
import {
  fileBlobState,
  filestate,
  imageBlobState,
  orderState,
} from 'recoil/upload';
import { textState } from 'recoil/upload';
import { useRef, useState } from 'react';

interface FileInfo {
  name: string;
  size: number;
  url: string;
}

const useAddFile = () => {
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [items, setItems] = useRecoilState<DndTextTypes[]>(textState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const [images, setImages] = useRecoilState<BlobImages[]>(imageBlobState);
  const [blobFiles, setBlobFiles] = useRecoilState<BlobFiles[]>(fileBlobState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<FileInfo>({
    name: '',
    size: 0,
    url: '',
  });

  const divClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    handleFileInfo(selectedFile);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files?.[0];
    handleFileInfo(selectedFile);
  };

  const handleFileInfo = (selectedFile: File | undefined) => {
    if (selectedFile) {
      setFileInfo({
        name: selectedFile.name,
        size: selectedFile.size,
        url: URL.createObjectURL(selectedFile),
      });
    } else {
      alert('올바른 파일이 선택되지 않았습니다!');
    }
  };

  const handleConfirm = (fileType: string) => {
    const selectedFile = inputRef.current?.files?.[0];
    if (selectedFile) {
      if (fileType === '이미지') {
        addFile(selectedFile, 'image');
      } else if (fileType === '문서') {
        addFile(selectedFile, 'docs');
      } else if (fileType === '영상') {
        addFile(selectedFile, 'video');
      }
    } else {
      alert('선택된 파일이 없습니다.');
    }
  };

  const updateFile = (id: string, fileType: string) => {
    const file = inputRef.current?.files?.[0];

    if (file) {
      const blob = new Blob([file], { type: file.type });
      console.log('blob이미지 배열', images);

      if (fileType === '이미지') {
        setImages((prevImages) =>
          prevImages.map((image) =>
            image.id === id
              ? { id: id, blob: blob, filename: file.name }
              : image,
          ),
        );
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, data: fileInfo.url } : item,
          ),
        );
      } else {
        console.log('가져온 파일 관리아이디는 다음과 같음', id);
        setFiles((prevFiles) =>
          prevFiles.map((item) =>
            item.id === id
              ? { ...item, id: file.name, data: file.name, url: fileInfo.url }
              : item,
          ),
        );
        console.log('다음 파일로 변경', file);

        setBlobFiles((prevFiles) =>
          prevFiles.map((editedfile) =>
            editedfile.id === id
              ? { id: file.name, file: file, filename: file.name }
              : editedfile,
          ),
        );
      }
    }
  };

  const addFile = (file: File, type: string) => {
    const blob = new Blob([file], { type: file.type });
    if (type === 'image') {
      console.log('사진 추가', file);

      setItems((prevData) => [
        ...prevData,
        {
          id: String(orderId),
          type: type,
          data: fileInfo.url,
        },
      ]);

      setImages((prevImages) => [
        ...prevImages,
        {
          id: String(orderId),
          blob: blob,
          filename: file.name,
        },
      ]);
      setOrderId(orderId + 1);

      console.log('추가 후 orderId', orderId);
      console.log('추가 후 images', images);
    } else {
      setFiles((prevData) => [
        ...prevData,
        {
          id: file.name,
          type: type,
          data: file.name,
          url: fileInfo.url,
        },
      ]);
      setBlobFiles((prevFiles) => [
        ...prevFiles,
        {
          id: file.name,
          file: file,
          filename: file.name,
        },
      ]);
      console.log('추가 후 file', blobFiles);
    }
  };

  const removeFile = (id: string, fileType: string) => {
    if (fileType === 'image') {
      setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    } else {
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
      setBlobFiles((prevBlobFiles) =>
        prevBlobFiles.filter((blobFile) => blobFile.id !== id),
      );
    }
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const removeAllFile = () => {
    setFiles([]);
    setBlobFiles([]);
  };

  return {
    fileInfo,
    handleConfirm,
    inputRef,
    divClick,
    handleFileChange,
    handleDrop,
    updateFile,
    removeFile,
    removeAllFile,
  };
};
export default useAddFile;
