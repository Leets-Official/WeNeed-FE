import MainNavbar from 'components/main/MainNavbar';
import { DetailCategoriesContainer } from 'components/main/containers';

export default async function MainRecruitingPage() {
  const data: ResponseRecruitingMain = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/recruiting`,
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

  return (
    <section>
      <div className="flex flex-col items-center w-full min-h-screen text-white ">
        <MainNavbar />
        <DetailCategoriesContainer />
      </div>
    </section>
  );
}
