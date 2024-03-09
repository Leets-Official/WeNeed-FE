'use client';
import Header from 'components/layout/Header';
import UploadContainerP from 'components/upload/portfolio/containers/UploadContainerP';
import useFillData from 'hooks/update/useFillData';

export default async function PortfolioPage({
  params,
}: {
  params: { id: string };
}) {
  const { fillPF } = useFillData();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/portfolio?articleId=${params.id}`,
    { cache: 'no-store' },
  );
  const { user, portfolio }: ResponsePortfolioDetails = await response.json();
  fillPF({ user, portfolio });
  if (user && portfolio) {
    return (
      <section className="flex flex-col items-center min-h-screen bg-black">
        <div className=" w-[1280px] mx-auto ">
          <Header nickname={user.nickname} userId={Number(user.userId)} />
          <div className="w-[100%] mx-auto">
            <UploadContainerP />
          </div>
        </div>
      </section>
    );
  }
}
