import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { textState, uploadDataState, orderState } from 'recoil/upload';

const useAddText = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useRecoilState(textState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => {
    setIsEditing(true);
  };

  const addText = (type: string) => {
    setItems((prevData) => [
      ...prevData,
      {
        id: String(orderId),
        type: type,
        data: text,
      },
    ]);
    setOrderId(orderId + 1);
    setUploadData({ ...uploadData, content: items });
  };

  const handleConfirm = (fileType: string) => {
    if (fileType === '링크') {
      addText('link');
    } else if (fileType === '텍스트') {
      addText('text');
    } else if (fileType === '음성') {
      addText('sound');
    } else {
      console.log('기타 파일을 처리합니다.');
    }
  };

  return { text, setText, addText, handleConfirm, isEditing, startEdit };
};

export default useAddText;
