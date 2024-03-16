import ApplicantContainer from 'components/upload/crew/applicant/ApplicantContainer';
import RecruitmentContainer from 'components/crew/RecruitmentContainer';
import CrewHeader from 'components/upload/crew/common/CrewHeader';
import { HEADER_APPLICANT } from 'constants/crew';
import CrewSubmission from 'components/upload/crew/recruiter/CrewSubmission';

export default async function CrewApplicantPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="flex flex-col items-center w-full min-h-screen">
      <div className="flex flex-col items-center gap-[20px]">
        <CrewHeader header={HEADER_APPLICANT} />
        <RecruitmentContainer articleId={params.slug} />
        <ApplicantContainer articleId={params.slug} />
      </div>
      <CrewSubmission
        articleId={params.slug}
        text="완료"
        type="submitApplicant"
      />
    </section>
  );
}