import HotPortfolioItem from '../HotPortfolioItem';

const HotPortfolioContainer = () => {
  return (
    <div className="mt-[60px] w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="flex gap-[37px]">
        <HotPortfolioItem />
      </div>
    </div>
  );
};

export default HotPortfolioContainer;
