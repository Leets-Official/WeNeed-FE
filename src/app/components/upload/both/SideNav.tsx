import { navItemIcons } from 'ui/IconsPath';
import SideNavItemP from './SideNavItemP';
import SideNavItemR from './SideNavItemR';

interface SideNavProps {
  navItemIconPath: readonly string[];
  iconNameArr: readonly string[];
  articleType: string;
}

const SideNav = ({
  navItemIconPath,
  iconNameArr,
  articleType,
}: SideNavProps) => {
  return (
    <div className="fixed top-[32%] right-[2%] flex flex-col w-[76px] h-[371px] justify-start items-center gap-y-[25px]">
      {navItemIconPath.map((item, index) =>
        articleType === 'portfolio' ? (
          <SideNavItemP
            key={item}
            iconInfo={{ ...navItemIcons, path: item }}
            label={iconNameArr[index]}
          />
        ) : (
          <SideNavItemR
            key={item}
            iconInfo={{ ...navItemIcons, path: item }}
            label={iconNameArr[index]}
          />
        ),
      )}
    </div>
  );
};

export default SideNav;
