import Header from 'components/layout/Header';
import UploadContainerP from 'components/upload/portfolio/containers/UploadContainerP';

export default async function UploadPortfolioPage() {
  return (
    <section className="flex flex-col items-center w-full h-full bg-black">
      <Header isLoggedIn type="main" />
      <UploadContainerP />
    </section>
  );
}
