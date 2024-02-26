interface DetailCategoriesProps {
  category: string;
  noBg?: boolean;
}

const DetailCategories = ({ category, noBg }: DetailCategoriesProps) => {
  return (
    <div
      className={`flex mr-[15px] px-[18px] h-9 pt-1 cursor-pointer ${
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
