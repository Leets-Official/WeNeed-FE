'use client';

interface DetailCategoriesProps {
  category: string;
  selected?: boolean;
  noBg?: boolean;
  onClick?: () => void;
}

const DetailCategories = ({
  category,
  selected = true,
  noBg,
  onClick,
}: DetailCategoriesProps) => {
  return (
    <div
      className={`${
        selected
          ? 'bg-gradient-to-r from-[#00E0EE] to-[#517EF3]'
          : noBg
            ? 'border border-black '
            : 'bg-gradient-to-r from-[#00E0EE] to-[#517EF3] opacity-45'
      }
      } flex mr-[15px] px-[18px] h-9 pt-1 cursor-pointer  rounded-3xl justify-center items-center gap-5`}
      onClick={onClick}
    >
      <div># {category}</div>
    </div>
  );
};

export default DetailCategories;
