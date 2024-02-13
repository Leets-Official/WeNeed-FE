import MainNavbar from 'components/main/common/MainNavbar';
import { DetailCategoriesContainer } from 'components/main/containers';
import RecruitingContainer from 'components/main/containers/RecruitingContainer';
import { LOGGEDIN_SECTION_HEADINGS, MAIN_SIZE } from 'constants/main';

export default async function MainRecruitingPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/recruiting?size=${MAIN_SIZE}&page=${1}&detailTags=${'전체'}`,
  );
  const { pageable, recruitList, user }: ResponseRecruitingMain =
    await response.json();

  if (recruitList)
    return (
      <section className="flex flex-col items-center w-full min-h-screen text-white ">
        <MainNavbar />
        <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
          {LOGGEDIN_SECTION_HEADINGS.crew}
        </h1>
        <DetailCategoriesContainer />
        <RecruitingContainer data={recruitList} user={user} />
      </section>
    );
}
