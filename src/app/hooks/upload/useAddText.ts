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

  const addShare = () => {
    setUploadData({ ...uploadData, sharedText: text });
  };

  const handleConfirm = (fileType: string) => {
    if (fileType === '링크') {
      addText('link');
    } else if (fileType === '텍스트') {
      addText('text');
    } else if (fileType === '음성') {
      addText('sound');
    } else {
      addShare();
      console.log('나누고 싶은 문장 추가', text);
    }
  };

  return { text, setText, addText, handleConfirm, isEditing, startEdit };
};

export default useAddText;
