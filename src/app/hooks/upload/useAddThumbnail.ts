import { useRecoilState } from 'recoil';
import {
  thumbnailState,
  thumbnailUrlState,
  uploadDataState,
} from 'recoil/upload';
import { useRef, useState } from 'react';

interface FileInfo {
  name: string;
  size: number;
  url: string;
}

const useAddThumbnail = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [thumbnailData, setThumbnail] = useRecoilState<File | null>(
    thumbnailState,
  );
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlState);

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

  const handleConfirm = () => {
    const selectedFile = inputRef.current?.files?.[0];
    if (selectedFile) {
      setThumbnail(selectedFile);
      setThumbnailUrl('');
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
