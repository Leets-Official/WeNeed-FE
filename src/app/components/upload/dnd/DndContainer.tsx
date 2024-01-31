import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { uploadState } from 'recoil/upload';
import { useRecoilState } from 'recoil';
import DndText from 'components/upload/dnd/DndText';
import DndLink from './DndLink';
import DndSound from './DndSound';
import DndImage from './DndImage';
import Attatched from './Attatched';

const DndContainer = () => {
  const [items, setItems] = useRecoilState(uploadState);

  // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    const _items = [...items];
    const [targetItem] = _items.splice(source.index, 1);
    _items.splice(destination.index, 0, targetItem);
    const updatedItems = _items.map((item, index) => ({
      ...item,
      order: index,
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
    <div className="flex flex-col items-center w-full h-[740px] overflow-y-auto gap-y-[16px]">
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
      <Attatched />
    </div>
  );
};
export default DndContainer;
