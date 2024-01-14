import { DROPDOWN_ITEM } from 'constants/dropdownitem';
import { MY_PAGE } from 'constants/mypage';

interface DropDownProps {
  type: 'grade' | 'departmnet' | 'interest' | 'doublemajor';
  selectedItem: string;
  onItemSelect: (item: string) => void;
  onOpen: () => void;
  isOpen: boolean;
}

const DropDown = ({
  type,
  selectedItem,
  onItemSelect,
  onOpen,
  isOpen,
}: DropDownProps) => {
  const getSortedItmeList = DROPDOWN_ITEM[type];
  const handleSelect = (item: string) => {
    onItemSelect(item);
  };
  return (
    <>
      <button type="button" className={``} onClick={onOpen}>
        <span>{selectedItem}</span>
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
        <div>
          {getSortedItmeList.map((item) => (
            <button
              key={item}
              className={``}
              onClick={() => handleSelect(item)}
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
