import { useRecoilState } from 'recoil';
import { filestate, orderState, uploadForm } from 'recoil/upload';
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
  const [uploadFormData, setUploadFormData] =
    useRecoilState<FormData>(uploadForm);
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
      console.log('선택된 파일이 없습니다.');
    }
  };

  const addFile = (file: File, type: string) => {
    const blob = new Blob([file], { type: file.type });
    if (type === 'image') {
      uploadFormData.append('images', blob, file.name);
      setItems((prevData) => [
        ...prevData,
        {
          id: String(orderId),
          type: type,
          data: fileInfo.url,
        },
      ]);
      setOrderId(orderId + 1);
    } else {
      uploadFormData.append('files', file);
      setFiles((prevData) => [
        ...prevData,
        {
          id: String(file.name),
          type: type,
          data: file.name,
          url: fileInfo.url,
        },
      ]);
    }
  };

  return {
    fileInfo,
    handleConfirm,
    inputRef,
    divClick,
    handleFileChange,
    handleDrop,
  };
};
export default useAddFile;
