'use client';

import Icons from 'components/common/Icons';
import useMenuHandlers from 'hooks/details/useMenuHandlers';
import {
  comment,
  crewPlus,
  goToprofile,
  noneFilledBookmark,
  noneFilledHeart,
  share,
  whiteFilledBookmark,
  whiteFilledHeart,
} from 'ui/IconsPath';

interface DetailMenuBarProps {
  userId: number;
  user: UserProfile;
  articleId: string;
  onRecruit?: boolean;
}

const DetailMenuBar = ({
  userId,
  user,
  articleId,
  onRecruit,
}: DetailMenuBarProps) => {
  const { detailMenuHandlers, hearted, bookmarked } = useMenuHandlers(
    userId,
    articleId,
    'portfolio',
    user,
  );

  return (
    <div
      className={`flex ${
        onRecruit
          ? 'flex-col w-[80px] gap-[20px] '
          : 'w-full mt-[200px] gap-[40px] mb-[80px]'
      }  justify-center items-center`}
    >
      {Object.entries(DETAIL_MENU_RENDER).map(([menu, icon]) => {
        return (
          <div
            key={menu}
            className="flex flex-col justify-center items-center gap-[10px] font-semibold"
          >
            <div
              className="flex justify-center items-center w-20 h-20 bg-gradient-to-r from-[#00E0EE] to-[#517EF3] rounded-full cursor-pointer hover:from-white hover:to-white"
              onClick={detailMenuHandlers[menu]}
            >
              {icon(hearted, bookmarked)}
            </div>
            <div>{menu}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailMenuBar;

const DETAIL_MENU_RENDER: Record<
  string,
  (filledheart: boolean, filledBookmark: boolean) => React.ReactNode
> = {
  프로필: () => (
    <Icons name={goToprofile} className="hover:fill-black w-full" />
  ),
  크루제안: () => (
    <Icons name={crewPlus} className="hover:fill-black w-full " />
  ),
  좋아요: (filledheart) => (
    <Icons
      name={filledheart ? whiteFilledHeart : noneFilledHeart}
      className="hover:fill-black w-full"
    />
  ),
  북마크: (_, filledBookmark) => (
    <Icons
      name={filledBookmark ? whiteFilledBookmark : noneFilledBookmark}
      className="hover:fill-black w-full"
    />
  ),
  댓글: () => <Icons name={comment} className="hover:fill-black w-full" />,
  공유: () => <Icons name={share} className="hover:fill-black w-full" />,
} as const;
