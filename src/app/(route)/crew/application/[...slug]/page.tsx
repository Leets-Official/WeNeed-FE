import ApplicationContainer from 'components/crew/ApplicationContainer';
import CrewHeader from 'components/upload/crew/common/CrewHeader';
import CrewSubmission from 'components/upload/crew/recruiter/CrewSubmission';
import { HEADER_COMPLETE } from 'constants/crew';

export default async function CrewApplicantPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-black">
      <CrewHeader header={HEADER_COMPLETE} />
      <ApplicationContainer applicationId={params.slug} />
      <CrewSubmission
        articleId={params.slug}
        text="열람 완료"
        type="onCloseApplication"
      />
    </section>
  );
}
