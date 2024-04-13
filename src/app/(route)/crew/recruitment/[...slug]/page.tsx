import RecruitmentContainer from 'components/crew/RecruitmentContainer';
import CrewHeader from 'components/upload/crew/common/CrewHeader';
import { HEADER_COMPLETE } from 'constants/crew';

export default async function CrewRecruitmentPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="flex flex-col items-center w-full min-h-screen bg-black">
      <div className="mt-[60px]">
        <CrewHeader header={HEADER_COMPLETE} />
      </div>
      <RecruitmentContainer articleId={params.slug} />
    </section>
  );
}
