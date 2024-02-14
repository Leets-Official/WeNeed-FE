import Header from 'components/layout/Header';
import SearchListContainer from 'components/search/SearchListContainer';

export default async function SearchPage({
  params,
}: {
  params: { slug: string };
}) {
  const { pageable, articleList, user }: ResponseSearch = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/search?keyword=${params.slug}`,
    { cache: 'no-store' },
  ).then((res) => res.json());

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
