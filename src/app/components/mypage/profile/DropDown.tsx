'use client';
import Icons from 'components/common/Icons';
import { MY_PAGE } from 'constants/mypage';
import { userinfoSetDownAngle, userinfoSetUpAngle } from 'ui/IconsPath';

interface DropDownProps {
  sortedItemList: string[];
  selectedItem: string;
  onItemSelect: (item: string) => void;
  onOpen: () => void;
  isOpen: boolean;
}

const DropDown = ({
  sortedItemList,
  selectedItem,
  onItemSelect,
  onOpen,
  isOpen,
}: DropDownProps) => {
  return (
    <>
      <button
        type="button"
        className={`w-[312px] h-[48px] rounded-[16px] bg-gray-500 relative flex justify-between items-center p-4`}
        onClick={onOpen}
      >
        <span className="text-black">{selectedItem || MY_PAGE.MAJOR}</span>
        <span className="absolute right-4">
          {isOpen ? (
            <Icons name={userinfoSetUpAngle} />
          ) : (
            <Icons name={userinfoSetDownAngle} />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-[230px] left-0 w-[312px] max-h-48 rounded-[16px] overflow-y-scroll scrollbar-hide bg-white">
          {sortedItemList.map((item) => (
            <button
              key={item}
              className={`w-full h-12 hover:text-black ${
                selectedItem === item ? 'text-black' : 'text-gray-500'
              }`}
              onClick={() => onItemSelect(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default DropDown;
