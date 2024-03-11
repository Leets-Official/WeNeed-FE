'use client';

import Icons from 'components/common/Icons';
import useMenuHandlers from 'hooks/details/useMenuHandlers';
import {
  bookmarkGray,
  commentGray,
  crewPlusGray,
  goToProfileGray,
  heartGray,
  shareGray,
} from 'ui/IconsPath';

interface RecruitingItemInfoProps {
  article: RecruitListItem;
  user: SimpleUser;
}

const RecruitingItemMenuBar = ({ article, user }: RecruitingItemInfoProps) => {
  const {
    detailMenuHandlers,
    heartCount: heart,
    bookmarkCount: bookmark,
  } = useMenuHandlers(user.userId, String(article.articleId));

  const menuItems = [
    { menu: '프로필', icon: goToProfileGray },
    { menu: '크루제안', icon: crewPlusGray },
    { menu: '좋아요', icon: heartGray, count: heart },
    { menu: '북마크', icon: bookmarkGray, count: bookmark },
    { menu: '댓글', icon: commentGray, count: article.commentCount },
    { menu: '공유', icon: shareGray },
  ];

  return (
    <div className="w-full flex justify-between border-t border-black items-center text-[#3A3A3A] font-bold text-[18px] bg-white h-[86px] ">
      {menuItems.map(({ menu, icon, count }) => (
        <div
          key={menu}
          className="flex w-[16%] justify-center items-center gap-2 fill-black cursor-pointer"
          onClick={detailMenuHandlers[menu]}
        >
          <Icons name={icon} className="fill:black" />
          <p>{menu}</p>
          <p>{count}</p>
        </div>
      ))}
    </div>
  );
};

export default RecruitingItemMenuBar;
