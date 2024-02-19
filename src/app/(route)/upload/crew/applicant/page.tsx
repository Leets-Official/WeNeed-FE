import CrewHeader from 'components/crew/common/CrewHeader';
import MemberInfoQ from 'components/crew/recruiter/MemberInfoQ';
import ProjectInfoQ from 'components/crew/recruiter/ProjectInfoQ';
import { HEADER_RECRUITER } from 'constants/crew';

export default async function CrewApplicantPage() {
  return (
    <section className="flex flex-col items-center w-full min-h-screen">
      <CrewHeader header={HEADER_RECRUITER} />
      <ProjectInfoQ />
      <MemberInfoQ />
    </section>
  );
}
