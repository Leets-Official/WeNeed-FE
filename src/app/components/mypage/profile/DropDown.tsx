'use client';
import Icons from 'components/common/Icons';
import { userinfoSetDownAngle, userinfoSetUpAngle } from 'ui/IconsPath';

interface DropDownProps {
  sortedItemList: string[];
  selectedItem: string;
  onItemSelect: (item: string) => void;
  onOpen: () => void;
  isOpen: boolean;
  className?: string;
  buttonClassName?: string;
  dropDownClassName?: string;
  itemClassName?: string;
}

const DropDown = ({
  sortedItemList,
  selectedItem,
  onItemSelect,
  onOpen,
  isOpen,
  className,
  buttonClassName,
  dropDownClassName,
  itemClassName,
}: DropDownProps) => {
  console.log('selectedItem', selectedItem);
  return (
    <div className={`${className}`}>
      <button type="button" onClick={onOpen} className={`${buttonClassName}`}>
        <span className="flex justify-center items-center">{selectedItem}</span>
        <span className="relative right-0">
          {isOpen ? (
            <Icons name={userinfoSetUpAngle} />
          ) : (
            <Icons name={userinfoSetDownAngle} />
          )}
        </span>
      </button>

      {isOpen && (
        <div className={`flex flex-col items-center ${dropDownClassName}`}>
          {sortedItemList.map((item, index) => (
            <button
              key={item}
              className={`text-left ${itemClassName} ${
                selectedItem === item ? 'text-black' : 'text-neutral-400'
              } ${
                index === sortedItemList.length - 1
                  ? ''
                  : 'border-b border-stone-300'
              }`}
              onClick={() => onItemSelect(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
