import Header from 'components/layout/Header';
import UploadContainerP from 'components/upload/portfolio/containers/UploadContainerP';

export default async function PortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/portfolio?articleId=${params.slug[0]}`,
    { cache: 'no-store' },
  );
  const { user, portfolio, comments, workList }: ResponsePortfolioDetails =
    await response.json();

  if (user && portfolio && comments && workList) {
    return (
      <section className="flex flex-col items-center w-full min-h-screen bg-black">
        {/* <Header isLoggedIn type="main" /> */}
        <UploadContainerP />
      </section>
    );
  }
}
