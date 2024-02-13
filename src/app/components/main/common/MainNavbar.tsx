'use client';

import Icons from 'components/common/Icons';
import CategoriesBoxContainer from '../containers/CategoriesBoxContainer';
import Link from 'next/link';
import { useState } from 'react';
import { hamburger, write } from 'ui/IconsPath';
import { useRouter } from 'next/navigation';
import { selectedCategories } from 'recoil/main';
import { useRecoilValue } from 'recoil';

const MainNavbar = () => {
  const [openCategoriesBox, setOpenCategoriesBox] = useState<boolean>(false);
  const selectedCategoriesValue = useRecoilValue(selectedCategories);
  const router = useRouter();

  const onCloseCategoriesBox = () => {
    //page.tsx의 next.js 의
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
            <li className="cursor-pointer">게시물</li>
          </Link>
          <Link href={'/main/recruiting'}>
            <li className="cursor-pointer">크루찾기</li>
          </Link>
        </ul>
        <div className="flex gap-[7px] justify-center items-center cursor-pointer">
          <p>
            <Icons name={write} />
          </p>
          <p>글쓰기</p>
        </div>
      </div>
      {openCategoriesBox && (
        <CategoriesBoxContainer onClose={onCloseCategoriesBox} />
      )}
    </div>
  );
};

export default MainNavbar;
