'use client';

import Icons from 'components/common/Icons';
import CategoriesBoxContainer from '../containers/CategoriesBoxContainer';
import Link from 'next/link';
import { useState } from 'react';
import { hamburger, write } from 'ui/IconsPath';
import { usePathname, useRouter } from 'next/navigation';

interface MainNavbarProps {
  nickname?: string;
  userId?: number;
}

const MainNavbar = ({ nickname, userId }: MainNavbarProps) => {
  const [openCategoriesBox, setOpenCategoriesBox] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();

  const onCloseCategoriesBox = () => {
    setOpenCategoriesBox(false);
  };

  const onLinkHandler = () => {
    if (Number(userId) === -1) {
      router.push('/login');
    } else {
      router.push(
        `/upload/${
          pathName.split('/')[2]
        }?nickname=${nickname}&userId=${userId}`,
      );
    }
  };
  return (
    <div className="relative w-full max-w-[1162px]">
      <div className="flex justify-between border-b border-white pb-[20px] mt-[50px] text-lg font-semibold">
        <ul className="flex gap-[50px] ">
          <li
            className="cursor-pointer flex items-center justify-center gap-3"
            onClick={() => setOpenCategoriesBox(!openCategoriesBox)}
          >
            <p className="pb-1">
              <Icons name={hamburger} />
            </p>
            카테고리
          </li>
          <Link href={'/main/portfolio'}>
            <li className="relative cursor-pointer">
              게시물
              {pathName.includes('portfolio') && (
                <div className=" absolute bottom-[-22px] left-[-20px] w-[88px] h-[5px] bg-white z-20"></div>
              )}
            </li>
          </Link>
          <Link href={'/main/recruiting'}>
            <li className="relative cursor-pointer">
              크루찾기
              {pathName.includes('recruiting') && (
                <div className=" absolute bottom-[-22px] left-[-15px] w-[88px] h-[5px] bg-white z-20"></div>
              )}
            </li>
          </Link>
        </ul>
        <div className="flex gap-[7px] justify-center items-center cursor-pointer">
          <p>
            <Icons name={write} />
          </p>
          <div onClick={onLinkHandler}>글쓰기</div>
        </div>
      </div>
      {openCategoriesBox && (
        <CategoriesBoxContainer onClose={onCloseCategoriesBox} />
      )}
    </div>
  );
};

export default MainNavbar;
