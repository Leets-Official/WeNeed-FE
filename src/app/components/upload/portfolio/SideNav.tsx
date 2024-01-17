import { navItemIconPath, navItemIcons } from 'ui/IconsPath';
import SideNavItem from './SideNavItem';
import { SIDENAV_ITEM_NAME } from 'constants/portfolio';

const SideNav = () => {
  return (
    <div className="flex flex-col w-[76px] h-[371px] justify-start items-center gap-y-[25px]">
      {navItemIconPath.map((item, index) => (
        <SideNavItem
          key={item}
          iconInfo={{ ...navItemIcons, path: item }}
          label={SIDENAV_ITEM_NAME[index]}
        />
      ))}
    </div>
  );
};

export default SideNav;
