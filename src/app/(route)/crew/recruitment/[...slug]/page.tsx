import RecruitmentContainer from 'components/crew/RecruitmentContainer';
import CrewHeader from 'components/upload/crew/common/CrewHeader';
import RecruiteSubmission from 'components/upload/crew/recruiter/RecruiteSubmission';
import { HEADER_COMPLETE } from 'constants/crew';

export default async function CrewRecruitmentPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="flex flex-col items-center w-full min-h-screen bg-black">
      <CrewHeader header={HEADER_COMPLETE} />
      <RecruitmentContainer articleId={params.slug} />
      <RecruiteSubmission text="지원서 작성하러 가기" />
    </section>
  );
}
