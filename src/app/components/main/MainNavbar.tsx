'use client';

import Icons from 'components/common/Icons';
import { hamburger, write } from 'ui/IconsPath';
import CategoriesBoxContainer from './containers/CategoriesBoxContainer';
import { useState } from 'react';

const MainNavbar = () => {
  const [openCategoriesBox, setOpenCategoriesBox] = useState<boolean>(false);

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
          <li className="cursor-pointer">게시물</li>
          <li className="cursor-pointer">크루찾기</li>
        </ul>
        <div className="flex gap-[7px] justify-center items-center cursor-pointer">
          <p>
            <Icons name={write} />
          </p>
          <p>글쓰기</p>
        </div>
      </div>
      {openCategoriesBox && <CategoriesBoxContainer />}
    </div>
  );
};

export default MainNavbar;
