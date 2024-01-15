const HotPortfolioItem = () => {
  return (
    <div className="relative w-[1205px] h-[525px] bg-gray-300 rounded-lg">
      <div className="w-11 h-16 left-[642.33px] top-[200.61px] absolute">
        <span className="text-xl font-semibold ">제목</span>
      </div>
      <div className="absolute top-[15px] left-[15px] w-32 h-7 flex bg-black rounded-2xl text-center">
        <div className="w-full h-full font-semibold">이번 달 HOT</div>
      </div>
    </div>
  );
};

export default HotPortfolioItem;
