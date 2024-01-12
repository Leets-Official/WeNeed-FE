import { ICON_INFO } from 'constants/portfolio';
import SideNavItem from './SideNavItem';

const SideNav = () => {
  return (
    <div className="w-[76px] h-[371px] flex-col justify-start items-center gap-y-[25px] inline-flex">
      <SideNavItem icon={ICON_INFO.preview} label="미리보기" />
      <SideNavItem icon={ICON_INFO.upload} label="업로드" />
      <SideNavItem icon={ICON_INFO.addTeam} label="팀원추가" />
    </div>
  );
};

export default SideNav;
