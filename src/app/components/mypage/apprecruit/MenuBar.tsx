'use client';

import { MENU } from 'constants/apprecruit';
import { useRecoilState } from 'recoil';
import { appMenuState } from 'recoil/apprecruit';

const MenuBar = () => {
  const [appMenu, setAppMenuState] = useRecoilState(appMenuState);
  const menuItems = [MENU.ARTICLE, MENU.RECRUITMENT, MENU.APPLICATIONS_LIST];
  const handleMenuClick = (item: string) => {
    setAppMenuState(item);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full border-b relative pl-3 ">
        <div className="w-full flex gap-10 my-4">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="w-[101.64px] h-[23px]">
              <div
                className={`w-[101.64px] h-[23px] flex justify-center text-base font-semibold ${
                  menuItem === appMenu
                    ? 'text-black cursor-default'
                    : 'text-neutral-400 cursor-pointer hover:text-black transition-all duration-300'
                }`}
                onClick={() => handleMenuClick(menuItem)}
              >
                {menuItem}
              </div>
              {menuItem === appMenu && (
                <div className="w-[101.64px] mt-2 h-[3px] bg-black absolute bottom-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
