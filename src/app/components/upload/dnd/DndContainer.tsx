'use client';
import { useEffect, useRef, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import {
  filestate,
  imageBlobState,
  textState,
  uploadDataState,
} from 'recoil/upload';
import { useRecoilState } from 'recoil';
import DndText from './DndText';
import DndLink from './DndLink';
import DndSound from './DndSound';
import DndImage from './DndImage';
import Attatched from './Attatched';
import EditText from 'components/update/EditText';
import EditFile from 'components/update/EditFile';
import DeleteDocsVideos from 'components/update/modal/DeleteDocsVideos';
import CheckDelete from 'components/update/modal/CheckDelete';
import { deleteAlert } from '../both/showToast';

interface DndContainerProps {
  articleType: string;
}

const DndContainer = ({ articleType }: DndContainerProps) => {
  const [items, setItems] = useRecoilState(textState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [files, setFiles] = useRecoilState(filestate);
  const [enabled, setEnabled] = useState(false);
  const [images, setImages] = useRecoilState(imageBlobState);
  const [isEditFile, setIsEditFile] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const height = articleType === 'portfolio' ? 680 : 645;
  const editBarRef = useRef<HTMLDivElement>(null);
  const editFileBarRef = useRef<HTMLDivElement>(null);

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
    deleteAlert();
  };

  const startEdit = (item: DndTextTypes) => {
    setEditItemId(item.id === editItemId ? editItemId : item.id);
  };

  useEffect(() => {
    console.log(' items:', items);
    console.log('uploadData: ', uploadData);
    console.log('images: ', images);
    setUploadData({ ...uploadData, content: items });
    const animation = requestAnimationFrame(() => setEnabled(true));
    setIsEditFile(false);
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, [items]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickFileOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickFileOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      editBarRef.current &&
      !editBarRef.current.contains(event.target as Node)
    ) {
      setEditItemId('');
    }
  };

  const handleClickFileOutside = (event: MouseEvent) => {
    if (
      editFileBarRef.current &&
      !editFileBarRef.current.contains(event.target as Node)
    ) {
      setIsEditFile(false);
    }
  };

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
                      <div
                        ref={editBarRef}
                        className="absolute inset-0 flex items-center justify-center z-10 gap-x-9"
                      >
                        <CheckDelete deleteText={() => deleteItem(item.id)} />
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
          {files.length !== 0 && <Attatched />}
        </div>
        {isEditFile && (
          <div
            ref={editFileBarRef}
            className="absolute inset-0 flex items-center justify-center z-10 gap-x-9 "
          >
            <div>
              <DeleteDocsVideos />
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
  }
};
