'use client';

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
        className={`w-[312px] h-[48px] rounded-[16px] bg-gray-500 flext justify-between items-center px-4`}
        onClick={onOpen}
      >
        <span className="text-black ">{selectedItem}</span>
        <span>
          <svg
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.28125 1.08231L9.28125 7.93945L17.2813 1.08231"
              stroke="#8C8C8C" // mypage, loginpage에 따라 색상 다르게 주기
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-[230px] left-0 w-[312px] max-h-48 rounded-[16px] overflow-y-scroll scrollbar-hide bg-onepink">
          {sortedItemList.map((item) => (
            <button
              key={item}
              className={`w-full h-12 hobver:text-black `}
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
