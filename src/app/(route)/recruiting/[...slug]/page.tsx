'use client';

import Profile from 'components/details/common/Profile';
import DetailMenuBar from 'components/details/portfolio/DetailMenuBar';
import CommentsContainer from 'components/details/portfolio/containers/CommentsContainer';
import RecruitingDetailContainers from 'components/details/recruiting/containers/RecruitingDetailContainers';
import Header from 'components/layout/Header';
import { useEffect, useState } from 'react';

export default function RecruitingPage({
  params,
}: {
  params: { slug: string };
}) {
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

  if (data) {
    const { writer, createdAt, viewCount, heartCount, bookmarkCount } =
      data.recruit;
    const { bookmarked, hearted } = data.user;
    return (
      <section className=" min-h-screen flex flex-col items-center bg-black w-screen text-white  ">
        <div className="  w-[80%]  max-w-[1290px] ">
          <Header nickname={data.user.nickname} userId={data.user.userId} />
          <div className="my-[40px]">
            <Profile
              writer={writer}
              date={createdAt}
              count={[viewCount, heartCount, bookmarkCount]}
              user={{ bookmarked, hearted }}
              size="large"
            />
          </div>
          <div className="relative bg-white rounded-[10px] py-[54px] px-[47px] mb-[100px]">
            <RecruitingDetailContainers
              recruit={data.recruit}
              user={data.user}
              articleId={params.slug[0]}
            />
            <CommentsContainer
              comments={data.comments}
              onRecruit
              articleId={params.slug}
              user={data.user}
            />
            <div className="fixed top-[105px] right-[2%] ">
              <DetailMenuBar
                articleId={params.slug}
                user={data.user}
                userId={data.user.userId}
                onRecruit
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
