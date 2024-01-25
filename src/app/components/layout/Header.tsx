import Icons from 'components/common/Icons';
import SearchBar from 'components/common/SearchBar';
import { search, weneed } from 'ui/IconsPath';

interface HeaderProps {
  type: 'main';
  isLoggedIn: boolean;
  username?: string;
}

const Header = ({ type, isLoggedIn = false, username }: HeaderProps) => {
  return (
    <header className="w-full h-[60px] bg-black text-white flex justify-between items-center px-[10%]">
      <div className="h-full flex items-center gap-[78px]">
        <Icons name={weneed} />
        <div className="relative">
          <Icons name={search} className="absolute left-2 top-2" />
          <SearchBar />
        </div>
      </div>
      <div className="flex gap-[40px] cursor-pointer">
        <p>마이페이지</p>
        {username && username !== 'guest' ? <p>{username}님</p> : <p>로그인</p>}
      </div>
    </header>
  );
};

export default Header;
