import Profile from 'components/details/common/Profile';
import PortfolioCommentsContainer from 'components/details/portfolio/containers/PortfolioCommentsContainer';
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
    <section className="min-h-screen flex flex-col items-center bg-black w-screen text-white ">
      <Header isLoggedIn type="main" />
      <div className=" w-[80%] max-w-[1290px]">
        <div className="my-[40px]">
          <Profile
            writer={writer}
            date={createdAt}
            count={[viewCount, heartCount, bookmarkCount]}
            user={{ bookmarked, hearted }}
            size="large"
          />
        </div>
        <div className="bg-white rounded-t-[10px] py-[54px] px-[47px]">
          <RecruitingDetailContainers recruit={recruit} user={user} />
          <PortfolioCommentsContainer comments={comments} onRecruit />
        </div>
      </div>
    </section>
  );
}
