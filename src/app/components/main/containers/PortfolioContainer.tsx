import { SECTION_HEADINGS } from 'constants/main';
import PortfolioItem from '../PortfolioItem';

const PortfolioContainer = () => {
  return (
    <div className="w-[100%] mt-[170px]">
      <h1 className="mt-[65px] mb-[48px] w-full text-3xl font-semibold">
        {SECTION_HEADINGS.pages}
      </h1>
      <PortfolioItem />
    </div>
  );
};

export default PortfolioContainer;
