import UploadContainerP from 'components/upload/portfolio/containers/UploadContainerP';

export default async function MainPortfolioPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/upload/portfolio`,
    { cache: 'no-store' },
  );
  const { userId, nickname, profile }: ResponseUploadSearch =
    await response.json();

  return (
    <section>
      <div className="flex flex-col items-center w-full min-h-screen text-white ">
        <UploadContainerP />
      </div>
    </section>
  );
}
