'use client';

import Header from 'components/layout/Header';
import AppRecruitContainer from 'components/mypage/apprecruit/container/AppRecruitContainer';
import MenuBarContainer from 'components/mypage/apprecruit/container/MenuBarContainer';
import { useEffect, useState } from 'react';

interface MypageAppRecruitPageProps {
  params: { slug: string };
}

export default function MypageAppRecruitPage({
  params,
}: MypageAppRecruitPageProps) {
  const [data, setData] = useState<ResponseRecruitingDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting?articleId=${params.slug}`,
        { cache: 'no-store' },
      );
      const responseData = await response.json();
      setData((prev) => responseData);
    };

    fetchData();
  }, []);

  const userNickname = 'userNickname';
  const userId = parseInt(params.slug);
  if (data) {
    const { writer, createdAt, viewCount, heartCount, bookmarkCount } =
      data.recruit;
    return (
      <section className="w-full flex items-center flex-col">
        <div className="w-[80%] max-w-[1290px]">
          <Header nickname={userNickname} userId={userId} />
        </div>
        <div className="w-screen bg-white flex justify-center">
          <div className="w-[80%] min-h-screen flex flex-col items-center">
            <MenuBarContainer />
            <AppRecruitContainer
              count={[viewCount, heartCount, bookmarkCount]}
              data={data}
              params={params}
            />
          </div>
        </div>
      </section>
    );
  }
}
