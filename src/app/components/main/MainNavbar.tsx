import Icons from 'components/common/Icons';
import { write } from 'ui/IconsPath';

const MainNavbar = () => {
  return (
    <div className="w-full max-w-[1162px]">
      <div className="flex justify-between border-b border-white pb-[20px] mt-[50px] text-lg font-semibold">
        <ul className="flex gap-[50px] ">
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
    </div>
  );
};

export default MainNavbar;
