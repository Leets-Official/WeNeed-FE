import Icons from 'components/common/Icons';
import SearchBar from 'components/common/SearchBar';
import Link from 'next/link';
import { search, weneed } from 'ui/IconsPath';

interface HeaderProps {
  nickname: string;
  userId: number;
  isPreview?: boolean;
}

const Header = ({ nickname, userId, isPreview }: HeaderProps) => {
  return (
    <header
      className={`z-20 w-full h-[60px] bg-black text-white flex justify-between items-center min-w-[800px] ${
        isPreview ? 'pointer-events-none' : ''
      }`}
    >
      <div className="h-full flex items-center gap-[78px]">
        <Link href={'/main/portfolio'}>
          <Icons name={weneed} />
        </Link>
        <div className="relative">
          <Icons name={search} className="absolute left-2 top-2 z-20" />
          <SearchBar />
        </div>
      </div>
      <div className="flex gap-[40px] cursor-pointer">
        <Link href={userId == -1 ? '/login' : `/mypage/${userId}`}>
          마이페이지
        </Link>
        {nickname !== 'guest' ? (
          <Link href={`/mypage/${userId}`}>{nickname}님</Link>
        ) : (
          <Link href={'/login'}>로그인</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
