'use client';

import Header from 'components/layout/Header';
import UploadContainerR from 'components/upload/recruiting/containers/UploadContainerR';
import useFillData from 'hooks/update/useFillData';
import { useEffect, useState } from 'react';

export default function PortfolioPage({ params }: { params: { id: string } }) {
  const { fillRecruit } = useFillData();
  const [data, setData] = useState<ResponseRecruitingDetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting?articleId=${params.id}`,
        { cache: 'no-store' },
      );
      const resData = await response.json();
      setData((prev) => resData);
      if (resData) {
        const { user, recruit } = resData;
        console.log('page에서', recruit, '가져오기');
        fillRecruit({ user, recruit });
      }
    };
    fetchData();
  }, [fillRecruit, params.id]);

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
