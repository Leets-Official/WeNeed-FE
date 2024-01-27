import Icons from 'components/common/Icons';
import Input from 'components/common/Input';
import Link from 'next/link';
import { useState } from 'react';
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
        <Link href={'/main/portfolio'}>
          <Icons name={weneed} />
        </Link>
        <div className="relative">
          <Icons name={search} className="absolute left-2 top-2 z-20" />
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
