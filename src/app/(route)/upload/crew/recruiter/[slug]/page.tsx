'use client';

import CrewHeader from 'components/upload/crew/common/CrewHeader';
import ContentsQ from 'components/upload/crew/recruiter/ContentsQ';
import MemberInfoQ from 'components/upload/crew/recruiter/MemberInfoQ';
import ProjectInfoQ from 'components/upload/crew/recruiter/ProjectInfoQ';
import CrewSubmission from 'components/upload/crew/recruiter/CrewSubmission';
import { HEADER_RECRUITER } from 'constants/crew';

export default function CrewRecruiterPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="flex flex-col items-center w-full min-h-screen ">
      <CrewHeader header={HEADER_RECRUITER} />
      <ProjectInfoQ />
      <MemberInfoQ />
      <ContentsQ />
      <CrewSubmission
        text="완료"
        articleId={params.slug}
        type="submitRecruit"
      />
    </section>
  );
}
