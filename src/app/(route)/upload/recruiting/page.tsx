import Header from 'components/layout/Header';
import UploadContainerR from 'components/upload/recruiting/containers/UploadContainerR';

export default async function UploadPortfolioPage() {
  return (
    <section className="flex flex-col items-center w-full min-h-screen bg-black">
      <Header isLoggedIn type="main" />
      <UploadContainerR />
    </section>
  );
}
