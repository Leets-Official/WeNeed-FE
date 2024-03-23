'use client';

import CrewHeader from 'components/upload/crew/common/CrewHeader';
import ContentsQ from 'components/upload/crew/recruiter/ContentsQ';
import MemberInfoQ from 'components/upload/crew/recruiter/MemberInfoQ';
import ProjectInfoQ from 'components/upload/crew/recruiter/ProjectInfoQ';
import CrewSubmission from 'components/upload/crew/recruiter/CrewSubmission';
import { HEADER_RECRUITER } from 'constants/crew';
import { useEffect, useState } from 'react';
import Header from 'components/layout/Header';

export default function CrewRecruiterPage({
  params,
}: {
  params: { slug: string };
}) {
  const [data, setData] = useState<ResponseRecruitingDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting?articleId=${params.slug}`,
        { cache: 'no-store' },
      );
      const responseData = await response.json();
      setData((prev) => responseData);
    };

    fetchData();
  }, [params.slug]);

  if (data) {
    const { userId, nickname } = data.user;
    return (
      <section className="flex flex-col items-center w-full min-h-screen ">
        <Header userId={userId} nickname={nickname} />
        <CrewHeader header={HEADER_RECRUITER} />
        <ProjectInfoQ />
        <MemberInfoQ articleId={params.slug} />
        <ContentsQ />
        <div className="w-[80%] flex justify-end mb-[150px] mt-[30px] ">
          <CrewSubmission
            text="완료"
            articleId={params.slug}
            type="submitRecruit"
          />
        </div>
      </section>
    );
  }
}
