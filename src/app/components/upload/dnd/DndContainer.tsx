'use client';
import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { textState } from 'recoil/dndFiles';
import { useRecoilState } from 'recoil';
import DndText from 'components/upload/dnd/DndText';
import DndLink from './DndLink';
import DndSound from './DndSound';
import DndImage from './DndImage';

const DndContainer = () => {
  const [items, setItems] = useRecoilState(textState);

  // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
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
  };

  // --- requestAnimationFrame 초기화
  const [enabled, setEnabled] = useState(false);

  const componenetByType = (item: DndTextTypes) => {
    switch (item.type) {
      case 'text':
        return <DndText text={item.content} />;
      case 'link':
        return <DndLink link={item.content} />;
      case 'sound':
        return <DndSound link={item.content} />;
      case 'image':
        return <DndImage fileName={item.content} url={item.url} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log('items현황: ', items);
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, [items]);

  if (!enabled) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col gap-y-[17px] overflow-y-auto"
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
  );
};
export default DndContainer;
