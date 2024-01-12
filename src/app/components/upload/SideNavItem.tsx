import Icons from 'components/common/Icons';
import { IconPathTypes } from 'types/icon';

interface navItemType {
  icon: IconPathTypes;
  label: string;
}

const SideNavItem = (props: navItemType) => (
  <div className="flex justify-center items-center flex-col gap-y-[10px]">
    <div className="flex justify-center items-center w-[76px] h-[76px] bg-zinc-400 rounded-[56px]">
      <Icons name={props.icon} />
    </div>
    <div className="flex justify-center w-[57px] h-[21px] text-neutral-700 text-[16px] font-['Pretendard']">
      {props.label}
    </div>
  </div>
);

export default SideNavItem;
