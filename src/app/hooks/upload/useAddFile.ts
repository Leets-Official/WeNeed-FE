import { useRecoilState } from 'recoil';
import { filestate, orderState, imageForm, fileForm } from 'recoil/upload';
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
  const [imageFormData, setImageFormData] = useRecoilState<FormData>(imageForm);
  const [fileFormData, setFileFormData] = useRecoilState<FormData>(fileForm);
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
      imageFormData.append('file', blob, file.name);
      setItems((prevData) => [
        ...prevData,
        {
          id: String(orderId),
          type: type,
          content: fileInfo.name,
          url: fileInfo.url,
        },
      ]);
      setOrderId(orderId + 1);
    } else {
      fileFormData.append('file', blob, file.name);
      setFiles((prevData) => [
        ...prevData,
        {
          id: String(file.name),
          type: type,
          content: file.name,
          url: fileInfo.url,
        },
      ]);
    }

    for (const value of imageFormData.values()) {
      console.log('이미지의 폼의 value는 다음과 같음', value);
    }

    for (const value of fileFormData.values()) {
      console.log('file의 폼의 value는 다음과 같음', value);
    }
  };

  return {
    fileInfo,
    handleConfirm,
    inputRef,
    divClick,
    handleFileChange,
    handleDrop,
    imageFormData,
  };
};
export default useAddFile;
