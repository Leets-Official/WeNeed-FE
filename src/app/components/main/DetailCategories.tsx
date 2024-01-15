interface DetailCategoriesProps {
  category: string;
}

const DetailCategories = ({ category }: DetailCategoriesProps) => {
  return (
    <div>
      <div className="flex w-24 h-9 pl-3.5 pr-5 py-2.5 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-3xl justify-center items-center gap-5">
        <div># {category}</div>
      </div>
    </div>
  );
};

export default DetailCategories;
