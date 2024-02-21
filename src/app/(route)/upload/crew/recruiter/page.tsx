import CrewHeader from 'components/crew/common/CrewHeader';
import ContentsQ from 'components/crew/recruiter/ContentsQ';
import MemberInfoQ from 'components/crew/recruiter/MemberInfoQ';
import ProjectInfoQ from 'components/crew/recruiter/ProjectInfoQ';
import RecruiteSubmission from 'components/crew/recruiter/RecruiteSubmission';
import { HEADER_RECRUITER } from 'constants/crew';

export default async function CrewRecruiterPage() {
  return (
    <section className="flex flex-col items-center w-full min-h-screen ">
      <CrewHeader header={HEADER_RECRUITER} />
      <ProjectInfoQ />
      <MemberInfoQ />
      <ContentsQ />
      <RecruiteSubmission />
    </section>
  );
}
