import { LOGGEDIN_SECTION_HEADINGS } from 'constants/main';
import PortfolioItem from '../PortfolioItem';
import PortfolioItemNav from '../PortfolioItemNav';
import Pages from 'components/common/Pages';

const PortfolioContainer = () => {
  return (
    <div className="w-full mt-[170px] ">
      <h1 className="mt-[65px] mb-[48px] w-full text-3xl font-semibold">
        {LOGGEDIN_SECTION_HEADINGS.pages}
      </h1>
      <PortfolioItemNav />
      <div className="flex gap-[32px] flex-wrap">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
      <div className="w-full flex justify-center mt-[80px]">
        <Pages />
      </div>
    </div>
  );
};

export default PortfolioContainer;
