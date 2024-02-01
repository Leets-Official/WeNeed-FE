'use client';
import { useRecoilState } from 'recoil';
import { filestate, orderState } from 'recoil/upload';
import { textState } from 'recoil/upload';
import { useRef, useState } from 'react';

interface FileInfo {
  name: string;
  size: number;
  url: string;
}

const useAddFile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<FileInfo>({
    name: '',
    size: 0,
    url: '',
  });
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [items, setItems] = useRecoilState<DndTextTypes[]>(textState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);

  const divClick = () => {
    inputRef.current?.click();
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

  const addFile = (type: string) => {
    if (type === 'image') {
      setItems((prevData) => [
        ...prevData,
        {
          id: String(orderId),
          type: type,
          content: fileInfo.name,
        },
      ]);
    } else {
      setFiles((prevData) => [
        ...prevData,
        {
          id: String(orderId),
          type: type,
          content: fileInfo.name,
          url: fileInfo.url,
        },
      ]);
    }
    setOrderId(orderId + 1);
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

  const handleConfirm = (fileType: string) => {
    if (fileType === '사진') {
      addFile('image');
    } else if (fileType === '문서') {
      addFile('docs');
    } else if (fileType === '영상') {
      addFile('video');
    } else {
      console.log('기타 파일을 처리합니다.');
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
