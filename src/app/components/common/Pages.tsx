import { leftAngle, rightAngle } from 'ui/IconsPath';
import Icons from './Icons';

interface PagesProps {
  totalPages?: number;
  activePage?: number;
}

const Pages = ({ totalPages, activePage }: PagesProps) => {
  return (
    <div className=" w-full flex justify-center items-center h-5 gap-[20px] font-semibold ">
      <Icons name={leftAngle} />
      <p className="text-white "> 1 </p>
      <Icons name={rightAngle} />
    </div>
  );
};

export default Pages;
