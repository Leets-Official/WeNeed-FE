import { useRecoilState } from 'recoil';
import { imageForm, thumbnailForm } from 'recoil/upload';
import { useRef, useState } from 'react';

interface FileInfo {
  name: string;
  size: number;
  url: string;
}

const useAddThumbnail = () => {
  const [thumbnailData, setThumbnailData] =
    useRecoilState<FormData>(thumbnailForm);
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
      if (thumbnailData.has('file')) {
        thumbnailData.delete('file');
      }
      const blob = new Blob([selectedFile], { type: selectedFile.type });
      thumbnailData.append('file', blob, selectedFile.name);
    } else {
      console.log('선택된 파일이 없습니다.');
    }
    for (const value of thumbnailData.values()) {
      console.log('썸네일data의 value는 다음과 같음', value);
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
export default useAddThumbnail;
