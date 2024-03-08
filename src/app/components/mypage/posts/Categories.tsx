interface CategoriesProps {
  category: string;
  selectedCategories: string[];
  handleCategoryClick: (category: string) => void;
}

const Categories = ({
  category,
  selectedCategories,
  handleCategoryClick,
}: CategoriesProps) => {
  return (
    <div
      onClick={() => handleCategoryClick(category)}
      className={`flex mr-5 px-[18px] h-9 pt-1 cursor-pointer ${
        selectedCategories.includes(category)
          ? 'bg-gradient-to-r from-[#00E0EE] to-[#517EF3] text-white'
          : 'bg-black text-white '
      } rounded-3xl justify-center items-center gap-5`}
    >
      <div># {category}</div>
    </div>
  );
};

export default Categories;
