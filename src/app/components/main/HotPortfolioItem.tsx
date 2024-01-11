const HotPortfolioItem = () => {
  return (
    <div className="relative cursor-pointer">
      <div className="w-[683px] h-[300px] bg-zinc-300 rounded-lg text-black "></div>
      <div className="absolute bottom-[16px] left-[20px]">
        <p className="text-xl font-semibold ">제목</p>
        <p className="text-lg font-medium ">소제목</p>
      </div>
      <div className="absolute bottom-[22px] right-[30px] flex justify-center items-center w-20 h-8 text-xl font-semibold bg-neutral-400 rounded-2xl">
        <p>1위</p>
      </div>
    </div>
  );
};

export default HotPortfolioItem;
