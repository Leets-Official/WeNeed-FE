'use client';

import Profile from 'components/details/common/Profile';
import DetailMenuBar from 'components/details/portfolio/DetailMenuBar';
import CommentsContainer from 'components/details/portfolio/containers/CommentsContainer';
import RecruitingDetailContainers from 'components/details/recruiting/containers/RecruitingDetailContainers';
import Header from 'components/layout/Header';
import { useEffect, useRef, useState } from 'react';

export default function RecruitingPage({
  params,
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<ResponseRecruitingDetail | null>(null);
  const commentsRef = useRef<HTMLDivElement>(null);

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

  const scrollToComments = () => {
    if (commentsRef.current) {
      commentsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  if (data) {
    const {
      writer,
      createdAt,
      viewCount,
      heartCount,
      bookmarkCount,
      recruiting,
    } = data.recruit;
    const { bookmarked, hearted, nickname, userId } = data.user;
    return (
      <article className=" min-h-screen flex flex-col items-center bg-black w-screen text-white  ">
        <div className="  w-[80%]  max-w-[1290px] ">
          <Header nickname={nickname} userId={userId} />
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
              articleId={params.slug}
            />
            <div ref={commentsRef} className="w-full">
              <CommentsContainer
                comments={data.comments}
                onRecruit
                articleId={params.slug}
                user={data.user}
              />
            </div>
            <div className="fixed top-[88px] right-[0.6%] ">
              <DetailMenuBar
                scrollToComments={scrollToComments}
                articleId={params.slug}
                user={data.user}
                userId={writer.userId!}
                onRecruit
                recruiting={recruiting}
                page="recruiting"
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}
