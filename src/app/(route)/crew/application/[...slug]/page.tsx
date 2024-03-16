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
    <section className="relative flex flex-col items-center justify-center w-screen min-h-screen bg-black">
      <div className="mt-[60px]">
        <CrewHeader header={HEADER_COMPLETE} />
      </div>
      <ApplicationContainer applicationId={params.slug} />
      <CrewSubmission
        articleId={params.slug}
        text="열람 완료"
        type="onCloseApplication"
      />
    </section>
  );
}
