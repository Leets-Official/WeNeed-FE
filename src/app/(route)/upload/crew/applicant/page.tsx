import ApplicantContainer from 'components/upload/crew/applicant/ApplicantContainer';
import RecruitmentContainer from 'components/crew/RecruitmentContainer';
import CrewHeader from 'components/upload/crew/common/CrewHeader';
import { HEADER_APPLICANT } from 'constants/crew';
import RecruiteSubmission from 'components/upload/crew/recruiter/RecruiteSubmission';

export default async function CrewApplicantPage() {
  return (
    <section className="flex flex-col items-center w-full min-h-screen">
      <div className="flex flex-col items-center gap-[20px]">
        <CrewHeader header={HEADER_APPLICANT} />
        <RecruitmentContainer articleId="1" />
        <ApplicantContainer />
      </div>
      <RecruiteSubmission text="완료" />
    </section>
  );
}
