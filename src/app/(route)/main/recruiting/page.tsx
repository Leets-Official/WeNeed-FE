import MainNavbar from 'components/main/common/MainNavbar';
import { DetailCategoriesContainer } from 'components/main/containers';
import RecruitingContainer from 'components/main/containers/RecruitingContainer';

export default async function MainRecruitingPage() {
  const data: ResponseRecruitingMain = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/recruiting`,
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

  return (
    <section className="flex flex-col items-center w-full min-h-screen text-white ">
      <MainNavbar />
      <DetailCategoriesContainer />
      <RecruitingContainer />
    </section>
  );
}
