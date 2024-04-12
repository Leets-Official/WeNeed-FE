'use client';

import Icons from 'components/common/Icons';
import useMenuHandlers from 'hooks/details/useMenuHandlers';
import { useRouter } from 'next/navigation';
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
  page: string;
}

const RecruitingItemMenuBar = ({
  article,
  user,
  page,
}: RecruitingItemInfoProps) => {
  const router = useRouter();
  const {
    heartCount,
    bookmarkCount,
    commentCount,
    articleId,
    recruiting,
    userId,
  } = article;

  const goToArticle = () => {
    router.push(`/recruiting/${articleId}`);
  };
  const { detailMenuHandlers } = useMenuHandlers(
    userId,
    String(articleId),
    page,
    recruiting,
    goToArticle,
    false,
  );

  const menuItems = [
    { menu: '프로필', icon: goToProfileGray },
    { menu: '크루제안', icon: crewPlusGray },
    { menu: '좋아요', icon: heartGray, count: heartCount },
    { menu: '북마크', icon: bookmarkGray, count: bookmarkCount },
    { menu: '댓글', icon: commentGray, count: commentCount },
    { menu: '공유', icon: shareGray },
  ];

  const onClickMenuHandlers = (menu: string) => {
    if (menu === '좋아요' || menu === '북마크') {
      goToArticle();
    } else {
      detailMenuHandlers[menu]();
    }
  };

  return (
    <div className="w-full flex justify-between border-t border-black items-center text-[#3A3A3A] font-bold text-[18px] bg-white h-[86px] ">
      {menuItems.map(({ menu, icon, count }) => (
        <div
          key={menu}
          className="flex w-[16%] justify-center items-center gap-2 fill-black cursor-pointer"
          onClick={() => onClickMenuHandlers(menu)}
        >
          <Icons name={icon} className="fill:black" />
          <p>{menu}</p>
          <p className="w-[30px]">{count}</p>
        </div>
      ))}
    </div>
  );
};

export default RecruitingItemMenuBar;
