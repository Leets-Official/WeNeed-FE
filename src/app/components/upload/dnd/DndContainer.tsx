'use client';
import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { imageBlobState, textState, uploadDataState } from 'recoil/upload';
import { useRecoilState } from 'recoil';
import DndText from './DndText';
import DndLink from './DndLink';
import DndSound from './DndSound';
import DndImage from './DndImage';
import Attatched from './Attatched';
import DeleteIcon from 'ui/upload/DeleteIcon';
import EditText from 'components/update/EditText';
import EditFile from 'components/update/EditFile';

interface DndContainerProps {
  articleType: string;
}

const DndContainer = ({ articleType }: DndContainerProps) => {
  const [items, setItems] = useRecoilState(textState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [images, setImages] = useRecoilState(imageBlobState);
  const [enabled, setEnabled] = useState(false);
  const [isEditFile, setIsEditFile] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const height = articleType === 'portfolio' ? 680 : 645;

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    const _items = [...items];
    const [targetItem] = _items.splice(source.index, 1);
    _items.splice(destination.index, 0, targetItem);
    const updatedItems = _items.map((item, index) => ({
      ...item,
      id: String(index),
    }));

    setItems(updatedItems);
    setUploadData({ ...uploadData, content: updatedItems });
  };

  const deleteItem = (itemId: string) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    setUploadData({ ...uploadData, content: updatedItems });
  };

  const startEdit = (item: DndTextTypes) => {
    setEditItemId(item.id === editItemId ? editItemId : item.id);
  };

  useEffect(() => {
    console.log('items현황:', items);
    console.log('uploadData현황: ', uploadData);
    const animation = requestAnimationFrame(() => setEnabled(true));
    setEditItemId(null);
    setIsEditFile(false);
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, [items, uploadData]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className={`flex flex-col items-center w-full h-[${height}px] overflow-y-auto gap-y-[16px]`}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-col gap-y-[17px]"
            >
              {items.map((item, index) => (
                <div key={item.id}>
                  <div
                    onClick={() => startEdit(item)}
                    className="relative flex justify-center items-center"
                  >
                    {editItemId === item.id && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 gap-x-9">
                        <div onClick={() => deleteItem(item.id)}>
                          <DeleteIcon />
                        </div>
                        <div>
                          <EditText
                            type={item.type}
                            id={item.id}
                            isEdit={true}
                          />
                        </div>
                      </div>
                    )}
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={
                            editItemId === item.id
                              ? 'blur-sm brightness-50'
                              : ''
                          }
                        >
                          {componenetByType(item)}
                        </div>
                      )}
                    </Draggable>
                  </div>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div
        onClick={() => setIsEditFile(true)}
        className=" relative cursor-pointer"
      >
        <div className={isEditFile ? 'blur-[2px] brightness-30' : ''}>
          {articleType === 'portfolio' && <Attatched />}
        </div>
        {isEditFile && (
          <div className="absolute inset-0 flex items-center justify-center z-10 gap-x-9 ">
            <div onClick={() => console.log('삭제 클릭')}>
              <DeleteIcon />
            </div>
            <div>
              <EditFile />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DndContainer;

const componenetByType = (item: DndTextTypes) => {
  switch (item.type) {
    case 'text':
      return <DndText text={item.data} />;
    case 'link':
      return <DndLink link={item.data} />;
    case 'sound':
      return <DndSound link={item.data} />;
    case 'image':
      return <DndImage fileName={item.data} url={item.data} />;
    default:
      return null;
  }
};
