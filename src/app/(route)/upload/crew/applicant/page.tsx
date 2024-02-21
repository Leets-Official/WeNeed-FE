import CrewHeader from 'components/crew/common/CrewHeader';
import { HEADER_APPLICANT } from 'constants/crew';

export default async function CrewApplicantPage() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen">
      <CrewHeader header={HEADER_APPLICANT} />
    </section>
  );
}
