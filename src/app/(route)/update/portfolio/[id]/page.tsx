'use client';
import Header from 'components/layout/Header';
import UploadContainerP from 'components/upload/portfolio/containers/UploadContainerP';
import useFillData from 'hooks/update/useFillData';
import useInit from 'hooks/upload/useInit';
import { useEffect, useState } from 'react';

export default function PortfolioPage({ params }: { params: { id: string } }) {
  const { fillPF } = useFillData();
  const [data, setData] = useState<ResponsePortfolioDetails | null>(null);
  const { initPF } = useInit();

  useEffect(() => {
    initPF();
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/portfolio?articleId=${params.id}`,
        { cache: 'no-store' },
      );
      const resData = await response.json();
      setData((prev) => resData);
      if (resData) {
        const { user, portfolio } = resData;
        fillPF({ user, portfolio });
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
            <UploadContainerP isEdit={true} id={params.id} />
          </div>
        </div>
      </section>
    );
  }
}
