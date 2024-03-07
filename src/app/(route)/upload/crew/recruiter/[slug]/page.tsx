'use client';

import CrewHeader from 'components/upload/crew/common/CrewHeader';
import ContentsQ from 'components/upload/crew/recruiter/ContentsQ';
import MemberInfoQ from 'components/upload/crew/recruiter/MemberInfoQ';
import ProjectInfoQ from 'components/upload/crew/recruiter/ProjectInfoQ';
import RecruiteSubmission from 'components/upload/crew/recruiter/RecruiteSubmission';
import { HEADER_RECRUITER } from 'constants/crew';
import { useRecoilValue } from 'recoil';
import { postRecruiterState } from 'recoil/crew';

export default function CrewRecruiterPage({
  params,
}: {
  params: { slug: string };
}) {
  const recruiterValue = useRecoilValue(postRecruiterState);

  return (
    <section className="flex flex-col items-center w-full min-h-screen ">
      <CrewHeader header={HEADER_RECRUITER} />
      <ProjectInfoQ />
      <MemberInfoQ />
      <ContentsQ />
      <RecruiteSubmission text="완료" articleId={params.slug} />
    </section>
  );
}
