import Icons from 'components/common/Icons';

interface SideNavItemProps {
  iconInfo: IconPathTypes;
  label: string;
}

const SideNavItem = ({ iconInfo, label }: SideNavItemProps) => (
  <div className="flex items-center flex-col gap-y-[10px]">
    <div className="flex justify-center items-center w-[76px] h-[76px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-[56px]">
      <Icons name={iconInfo} />
    </div>
    <div className="flex justify-center w-auto h-[21px] text-zinc-300 text-[16px]">
      {label}
    </div>
  </div>
);

export default SideNavItem;
