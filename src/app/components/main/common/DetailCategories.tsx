interface DetailCategoriesProps {
  category: string;
}

const DetailCategories = ({ category }: DetailCategoriesProps) => {
  return (
    <div className="flex mr-[20px] w-[105px] max-w-[120px] px-2 h-9 pt-1  bg-gradient-to-r from-[#4EF4FF] to-[#608CFF] rounded-3xl justify-center items-center gap-5">
      <div># {category}</div>
    </div>
  );
};

export default DetailCategories;
