import RecruitingDetailContainers from 'components/details/recruiting/containers/RecruitingDetailContainers';
import Header from 'components/layout/Header';

export default async function PortfolioPage() {
  const { user, recruit, comments }: ResponseRecruitingDetail = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting`,
    { cache: 'no-store' },
  ).then((res) => res.json());

  return (
    <section className="h-screen bg-black w-full">
      <Header isLoggedIn type="main" />
      {/* <Profile /> */}
      <div className=" flex flex-col w-full items-center mt-[45px]">
        <RecruitingDetailContainers data={recruit} />
      </div>
    </section>
  );
}
