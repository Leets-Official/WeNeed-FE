'use client';

import Header from 'components/layout/Header';
import SearchListContainer from 'components/search/SearchListContainer';
import { useEffect, useState } from 'react';

export default async function SearchPage({
  params,
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<ResponseSearch | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/search?keyword=${params.slug}`,
        { cache: 'no-store' },
      );
      const responseData = await response.json();
      setData((prev) => responseData);
    };

    fetchData();
  }, []);

  if (data) {
    const { articleList, user } = data;
    return (
      <section className="flex flex-col items-center w-full min-h-screen text-white">
        <Header nickname={user.nickname} userId={user.userId} />
        <h1 className="w-full font-bold text-[30px] my-[38px]">
          {decodeURIComponent(params.slug)} 관련 게시물
        </h1>
        <SearchListContainer searchList={articleList} user={user} />
      </section>
    );
  }
}
