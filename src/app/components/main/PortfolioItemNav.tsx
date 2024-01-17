import Icons from 'components/common/Icons';
import { drop } from 'ui/IconsPath';

const PortfolioItemNav = () => {
  return (
    <div className="w-full border-b border-white pb-[15px] mb-[40px]">
      <div className="w-24 h-5 flex items-center gap-[10px] cursor-pointer">
        <Icons name={drop} />
        <div className="text-white text-base font-semibold ">정렬방식</div>
      </div>
    </div>
  );
};

export default PortfolioItemNav;
