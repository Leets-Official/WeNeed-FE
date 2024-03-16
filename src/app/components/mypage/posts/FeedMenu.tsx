import { MY_PAGE } from 'constants/mypage';
import { useRecoilState } from 'recoil';
import { menuState } from 'recoil/mypage';

interface FeedMenuProps {
  sameUser: boolean;
}

const FeedMenu = ({ sameUser }: FeedMenuProps) => {
  const [menu, setMenu] = useRecoilState(menuState);
  const menuItems = [
    MY_PAGE.MY_OUTPUT,
    MY_PAGE.MY_CREW,
    MY_PAGE.INTEREST_OUTPUT,
    MY_PAGE.INTEREST_CREW,
  ];

  const handleMenuClick = (item: string) => {
    setMenu(item);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full border-b relative pl-3 ">
        <div className="w-full flex gap-10 my-4">
          {!sameUser ? (
            <div className="w-[101.64px] h-[23px]">
              <div
                className={`w-[101.64px] h-[23px] flex justify-center text-base font-semibold text-black cursor-default`}
              >
                {MY_PAGE.YOUR_OUTPUT}
              </div>
              <div className="w-[101.64px] mt-2 h-[3px] bg-black absolute bottom-0"></div>
            </div>
          ) : (
            menuItems.map((menuItem, index) => (
              <div key={index} className="w-[101.64px] h-[23px]">
                <div
                  className={`w-[101.64px] h-[23px] flex justify-center text-base font-semibold ${
                    menuItem === menu
                      ? 'text-black cursor-pointer transition-all duration-300'
                      : 'text-neutral-400 cursor-pointer hover:text-black transition-all duration-300'
                  }`}
                  onClick={() => handleMenuClick(menuItem)}
                >
                  {menuItem}
                </div>
                {menuItem === menu && (
                  <div className="w-[101.64px] mt-2 h-[3px] bg-black absolute bottom-0"></div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedMenu;
