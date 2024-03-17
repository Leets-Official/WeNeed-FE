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
  page: string;
  articleId: string;
  recruiting: boolean;
  onRecruit?: boolean;
  scrollToComments: () => void;
}

const DetailMenuBar = ({
  userId,
  user,
  articleId,
  onRecruit,
  recruiting,
  page,
  scrollToComments,
}: DetailMenuBarProps) => {
  const { detailMenuHandlers, hearted, bookmarked } = useMenuHandlers(
    userId,
    articleId,
    page,
    recruiting,
    scrollToComments,
    user,
  );

  return (
    <div
      className={`flex ${
        onRecruit
          ? 'flex-col w-[80px] gap-[10px] '
          : 'w-full mt-[80px] gap-[40px] mb-[80px]'
      }  justify-center items-center`}
    >
      {Object.entries(DETAIL_MENU_RENDER).map(([menu, icon]) => {
        return (
          <div
            key={menu}
            className={`flex flex-col justify-center items-center gap-[12px] ${
              onRecruit ? 'text-xs' : 'font-semibold'
            } `}
          >
            <div
              className={`icon-wrapper flex justify-center items-center ${
                onRecruit ? 'w-16 h-16' : 'w-20 h-20'
              } bg-gradient-to-r from-[#00E0EE] to-[#517EF3] rounded-full cursor-pointer hover:from-white hover:to-white`}
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
  프로필: () => <Icons name={goToprofile} />,
  크루제안: () => <Icons name={crewPlus} />,
  좋아요: (filledheart) => (
    <Icons name={filledheart ? whiteFilledHeart : noneFilledHeart} />
  ),
  북마크: (_, filledBookmark) => (
    <Icons name={filledBookmark ? whiteFilledBookmark : noneFilledBookmark} />
  ),
  댓글: () => <Icons name={comment} />,
  공유: () => <Icons name={share} />,
} as const;
