'use client';

import PortfolioDetailsContainer from 'components/details/portfolio/containers/PortfolioDetailsContainer';
import Header from 'components/layout/Header';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CommentsContainer = dynamic(
  () => import('components/details/portfolio/containers/CommentsContainer'),
  {
    suspense: true,
  },
);

const PortfolioWorkListContainer = dynamic(
  () =>
    import(
      'components/details/portfolio/containers/PortfolioWorkListContainer'
    ),
  {
    suspense: true,
  },
);

export default function PortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<ResponsePortfolioDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/portfolio?articleId=${params.slug[0]}`,
        { cache: 'no-store' },
      );
      const responseData = await response.json();
      setData((prev) => responseData);
    };

    fetchData();
  }, []);

  if (data) {
    const { user, portfolio, comments, workList } = data;

    return (
      <section className="min-h-screen flex flex-col items-center bg-black text-white ">
        <div className="w-[80%] max-w-[1290px] ">
          <Header nickname={user.nickname} userId={user.userId} />
          <PortfolioDetailsContainer
            user={user}
            portfolio={portfolio}
            articleId={params.slug[0]}
          />
        </div>
        <CommentsContainer
          comments={comments}
          articleId={params.slug}
          user={user}
        />
        <PortfolioWorkListContainer
          workList={workList}
          writer={portfolio?.writer}
        />
      </section>
    );
  }
}
