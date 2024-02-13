import Profile from 'components/details/common/Profile';
import CommentsContainer from 'components/details/portfolio/containers/CommentsContainer';
import RecruitingDetailContainers from 'components/details/recruiting/containers/RecruitingDetailContainers';
import Header from 'components/layout/Header';

export default async function RecruitingPage({
  params,
}: {
  params: { slug: string };
}) {
  const { user, recruit, comments }: ResponseRecruitingDetail = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting?articleId=${params.slug}`,
    { cache: 'no-store' },
  ).then((res) => res.json());

  const { writer, createdAt, viewCount, heatCount, bookmarkCount } = recruit;
  const { bookmarked, hearted } = user;

  if (recruit && user && comments) {
    return (
      <section className="min-h-screen flex flex-col items-center bg-black w-screen text-white  ">
        <Header isLoggedIn type="main" />
        <div className=" w-[80%] max-w-[1290px]">
          <div className="my-[40px]">
            <Profile
              writer={writer}
              date={createdAt}
              count={[viewCount, heatCount, bookmarkCount]}
              user={{ bookmarked, hearted }}
              size="large"
            />
          </div>
          <div className="bg-white rounded-[10px] py-[54px] px-[47px] mb-[100px]">
            <RecruitingDetailContainers recruit={recruit} user={user} />
            <CommentsContainer
              comments={comments}
              onRecruit
              articleId={params.slug}
              user={user}
            />
          </div>
        </div>
      </section>
    );
  }
}
