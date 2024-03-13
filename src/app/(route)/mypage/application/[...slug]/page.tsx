import Header from 'components/layout/Header';

interface MypageApplicationPageProps {
  params: { slug: string };
}

export default function MypageApplicationPage({
  params,
}: MypageApplicationPageProps) {
  const userNickname = 'userNickname';
  const userId = parseInt(params.slug);
  return (
    <section className="w-full flex items-center flex-col">
      <div className="w-[80%] max-w-[1290px]">
        <Header nickname={userNickname} userId={userId} />
      </div>
    </section>
  );
}
