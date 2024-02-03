import { navItemIcons } from 'ui/IconsPath';
import SideNavItem from './SideNavItem';

interface SideNavProps {
  navItemIconPath: readonly string[];
  iconNameArr: readonly string[];
}

const SideNav = ({ navItemIconPath, iconNameArr }: SideNavProps) => {
  return (
    <div className="flex flex-col w-[76px] h-[371px] justify-start items-center gap-y-[25px]">
      {navItemIconPath.map((item, index) => (
        <SideNavItem
          key={item}
          iconInfo={{ ...navItemIcons, path: item }}
          label={iconNameArr[index]}
        />
      ))}
    </div>
  );
};

export default SideNav;
