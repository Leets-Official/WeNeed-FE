import MainNavbar from 'components/main/MainNavbar';
import { DetailCategoriesContainer } from 'components/main/containers';
import RecruitingContainer from 'components/main/containers/RecruitingContainer';

export default async function MainRecruitingPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/recruiting`,
  );
  const { recrutingList, user }: ResponseRecruitingMain = await response.json();

  return (
    <section className="flex flex-col items-center w-full min-h-screen text-white ">
      <MainNavbar />
      <DetailCategoriesContainer />
      <RecruitingContainer data={recrutingList} user={user} />
    </section>
  );
}
