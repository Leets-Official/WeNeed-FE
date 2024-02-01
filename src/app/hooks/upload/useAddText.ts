'use client';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { textState } from 'recoil/upload';
import { orderState } from 'recoil/upload';

const useAddText = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useRecoilState(textState);
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
        content: text,
      },
    ]);
    setOrderId(orderId + 1);
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
