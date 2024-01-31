import Profile from 'components/details/common/Profile';
import RecruitingDetailContainers from 'components/details/recruiting/containers/RecruitingDetailContainers';
import Header from 'components/layout/Header';

export default async function PortfolioPage() {
  const { user, recruit, comments }: ResponseRecruitingDetail = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting`,
    { cache: 'no-store' },
  ).then((res) => res.json());

  const { writer, createdAt, viewCount, heartCount, bookmarkCount } = recruit;
  const { bookmarked, hearted } = user;

  return (
    <section className="h-screen bg-black w-full">
      <Header isLoggedIn type="main" />
      <div className=" flex flex-col w-full items-center mt-[45px]">
        <RecruitingDetailContainers recruit={recruit} user={user} />
      </div>
    </section>
  );
}
