import Footer from 'components/layout/Footer';

export default async function MainPortfolioPage() {
  const data = await fetch(`${process.env.NEXT_SERVER}/api/main/portfolio`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    });
  console.log(data);

  return (
    <section>
      <div className="h-screen">MainPortfolioPage</div>
      <Footer />
    </section>
  );
}
