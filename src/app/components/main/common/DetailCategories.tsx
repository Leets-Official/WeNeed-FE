'use client';

interface DetailCategoriesProps {
  category: string;
  onRemoveCategory: (arg: string) => void;
}

const DetailCategories = ({
  category,
  onRemoveCategory,
}: DetailCategoriesProps) => {
  return (
    <div
      className="flex mr-[20px] w-[105px] max-w-[120px] px-2 h-9 pt-1 bg-gradient-to-r from-[#00E0EE] to-[#517EF3] rounded-3xl justify-center items-center gap-5"
      onClick={() => onRemoveCategory(category)}
    >
      <div># {category}</div>
    </div>
  );
};

export default DetailCategories;
