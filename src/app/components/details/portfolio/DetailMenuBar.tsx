'use client';

import Icons from 'components/common/Icons';
import { useRouter } from 'next/navigation';
import { profile } from 'ui/IconsPath';

interface DetailMenuBarProps {
  userId: number;
}

const DetailMenuBar = ({ userId }: DetailMenuBarProps) => {
  const router = useRouter();
  const DETAIL_MENU_HANDLERS: Record<string, () => void> = {
    프로필: () => router.push(`/profile/${userId}`),
    크루제안: () => alert('준비중인 서비스입니다 :)'),
    좋아요: () => {},
    북마크: () => {},
    댓글: () => {},
    공유: () => {},
  };
  const DETAIL_MENU_RENDER: Record<string, React.ReactNode> = {
    프로필: <Icons name={profile} />,
    크루제안: <Icons name={profile} />,
    좋아요: <Icons name={profile} />,
    북마크: <Icons name={profile} />,
    댓글: <Icons name={profile} />,
    공유: <Icons name={profile} />,
  } as const;

  return (
    <div className="flex w-full justify-center items-center mt-[200px] gap-[40px] mb-[80px]">
      {Object.entries(DETAIL_MENU_RENDER).map(([menu, icon]) => {
        return (
          <div
            key={menu}
            className="flex flex-col justify-center items-center gap-[10px] font-semibold"
          >
            <div
              className="flex justify-center items-center w-20 h-20 bg-gradient-to-r from-[#00E0EE] to-[#517EF3] rounded-full cursor-pointer"
              onClick={DETAIL_MENU_HANDLERS[menu]}
            >
              {icon}
            </div>
            <div>{menu}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailMenuBar;
