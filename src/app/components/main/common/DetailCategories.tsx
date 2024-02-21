interface DetailCategoriesProps {
  category: string;
  noBg?: boolean;
}

const DetailCategories = ({ category, noBg }: DetailCategoriesProps) => {
  return (
    <div
      className={`flex mr-[20px] w-[105px] max-w-[120px] px-2 h-9 pt-1 ${
        noBg
          ? 'border border-black '
          : 'bg-gradient-to-r from-[#00E0EE] to-[#517EF3]'
      } rounded-3xl justify-center items-center gap-5`}
    >
      <div># {category}</div>
    </div>
  );
};

export default DetailCategories;
