'use client';

import Header from 'components/layout/Header';
import useFillData from 'hooks/update/useFillData';
import useInit from 'hooks/upload/useInit';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const UploadContainerR = dynamic(
  () => import('components/upload/recruiting/containers/UploadContainerR'),
  { loading: () => <p>Loading...</p> },
);

export default function PortfolioPage({ params }: { params: { id: string } }) {
  const { fillRecruit } = useFillData();
  const [data, setData] = useState<ResponseRecruitingDetail | null>(null);
  const { initPF } = useInit();

  useEffect(() => {
    initPF();
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting?articleId=${params.id}`,
        { cache: 'no-store' },
      );
      const resData = await response.json();
      setData((prev) => resData);
      if (resData) {
        const { user, recruit } = resData;
        fillRecruit({ user, recruit });
      }
    };
    fetchData();
  }, [params.id]);

  if (data) {
    const { user } = data;
    return (
      <section className="flex flex-col items-center min-h-screen bg-black">
        <div className=" w-[1280px] mx-auto ">
          <Header nickname={user.nickname} userId={Number(user.userId)} />
          <div className="w-[100%] mx-auto">
            <UploadContainerR isEdit={true} id={params.id} />
          </div>
        </div>
      </section>
    );
  }
}
