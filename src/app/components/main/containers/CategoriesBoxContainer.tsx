import CategoriesBox from '../common/CategoriesBox';

interface CategoriesBoxContainerProps {
  onClose: () => void;
}

const CategoriesBoxContainer = ({ onClose }: CategoriesBoxContainerProps) => {
  return (
    <div
      className="flex flex-col items-center z-50 absolute w-[480px] h-[490px] border border-white bg-black rounded-b-2xl p-[35px]"
      onBlur={onClose}
      tabIndex={0}
    >
      <div className="flex gap-[92px]">
        {<CategoriesBox field="미디어" />}
        {<CategoriesBox field="디자인" />}
        {<CategoriesBox field="예술" />}
      </div>
      <div className="absolute top-[230px] left-[68px]">
        {<CategoriesBox field="IT" />}
      </div>
      <div className="absolute top-[290px] right-[40px]">
        {<CategoriesBox field="기획" />}
      </div>
    </div>
  );
};

export default CategoriesBoxContainer;
