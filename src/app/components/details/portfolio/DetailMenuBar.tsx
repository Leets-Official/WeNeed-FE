'use client';

import Icons from 'components/common/Icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
  const [hovered, setHovered] = useState<boolean>(false);
  const router = useRouter();
  const DETAIL_MENU_HANDLERS: Record<string, () => void> = {
    프로필: () => router.push(`/mypage/${userId}`),
    크루제안: () => alert('준비중인 서비스입니다 :)'),
    좋아요: () => {
      onSubmitOption('like');
    },
    북마크: () => {
      onSubmitOption('bookmark');
    },
    댓글: () => {
      scrollToComments();
    },
    공유: () => {},
  };

  const scrollToComments = () => {
    window.scrollTo({
      top: window.scrollY + 400,
      behavior: 'smooth',
    });
  };

  const onSubmitOption = async (type: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/${type}?articleId=${articleId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className={`flex ${
        onRecruit
          ? 'flex-col w-[120px] gap-[20px]'
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
              onClick={DETAIL_MENU_HANDLERS[menu]}
            >
              {icon(user.hearted, user.bookmarked, hovered)}
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
  (
    filledheart: boolean,
    filledBookmark: boolean,
    hovered: boolean,
  ) => React.ReactNode
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
