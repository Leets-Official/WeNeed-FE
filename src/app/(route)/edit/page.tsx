import Header from 'components/layout/Header';

export default function EditPage() {
  return (
    <section className="w-full h-full">
      <div className="w-[80%] max-w-[1290px]">
        <Header nickname="위니드" userId={1} />
      </div>
      <h1>Edit Page</h1>
    </section>
  );
}
