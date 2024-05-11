import { editAlert } from 'components/upload/both/showToast';
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

  const updateText = (id: string, content: string) => {
    setItems((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, data: content } : item,
      ),
    );
    setUploadData({ ...uploadData, content: items });
    editAlert();
  };

  const addText = (type: 'text' | 'link' | 'sound') => {
    const updatedItems = [
      ...items,
      {
        id: String(orderId),
        type: type,
        data: text,
      },
    ];
    setItems(updatedItems);
    setUploadData({ ...uploadData, content: updatedItems });
    setOrderId(orderId + 1);
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
    }
  };

  return {
    text,
    setText,
    addText,
    handleConfirm,
    isEditing,
    startEdit,
    updateText,
  };
};

export default useAddText;
