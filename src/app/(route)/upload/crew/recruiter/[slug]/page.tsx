'use client';

import CrewHeader from 'components/upload/crew/common/CrewHeader';
import ContentsQ from 'components/upload/crew/recruiter/ContentsQ';
import MemberInfoQ from 'components/upload/crew/recruiter/MemberInfoQ';
import ProjectInfoQ from 'components/upload/crew/recruiter/ProjectInfoQ';
import RecruiteSubmission from 'components/upload/crew/recruiter/RecruiteSubmission';
import { HEADER_RECRUITER } from 'constants/crew';
import { useRecoilValue } from 'recoil';
import { postRecruiterState } from 'recoil/crew';

export default async function CrewRecruiterPage({
  params,
}: {
  params: { slug: string };
}) {
  const recruiterValue = useRecoilValue(postRecruiterState);

  const onSubmitRecruiter = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/crew/recruiter?articleId=${params.slug}`,
        {
          method: 'POST',
          body: JSON.stringify(recruiterValue),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('제출완료 ~.~');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="flex flex-col items-center w-full min-h-screen ">
      <CrewHeader header={HEADER_RECRUITER} />
      <ProjectInfoQ />
      <MemberInfoQ />
      <ContentsQ />
      <RecruiteSubmission text="완료" />
    </section>
  );
}
