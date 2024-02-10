import MainNavbar from 'components/main/common/MainNavbar';
import { DetailCategoriesContainer } from 'components/main/containers';
import RecruitingContainer from 'components/main/containers/RecruitingContainer';
import { LOGGEDIN_SECTION_HEADINGS } from 'constants/main';

export default async function MainRecruitingPage() {
  const { pageable, recrutingList, user }: ResponseRecruitingMain = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/recruiting`,
    { cache: 'no-store' },
  ).then((res) => res.json());

  return (
    <section className="flex flex-col items-center w-full min-h-screen text-white ">
      <MainNavbar />
      <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
        {LOGGEDIN_SECTION_HEADINGS.crew}
      </h1>
      <DetailCategoriesContainer />
      <RecruitingContainer data={recrutingList} user={user} />
    </section>
  );
}
