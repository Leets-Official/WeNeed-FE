'use client';
import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { textState, uploadDataState } from 'recoil/upload';
import { useRecoilState } from 'recoil';
import DndText from './DndText';
import DndLink from './DndLink';
import DndSound from './DndSound';
import DndImage from './DndImage';
import Attatched from './Attatched';

interface DndContainerProps {
  articleType: string;
}

const DndContainer = ({ articleType }: DndContainerProps) => {
  const [items, setItems] = useRecoilState(textState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [enabled, setEnabled] = useState(false);
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

  useEffect(() => {
    console.log('items현황: ', items);
    console.log('uploadData현황: ', uploadData);
    const animation = requestAnimationFrame(() => setEnabled(true));
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
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {componenetByType(item)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {articleType === 'portfolio' && <Attatched />}
    </div>
  );
};
export default DndContainer;
