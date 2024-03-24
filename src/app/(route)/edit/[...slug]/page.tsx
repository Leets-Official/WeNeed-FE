import Header from 'components/layout/Header';
import EditUserInfoContainer from 'components/mypage/container/EditUserInfoContaner';
import ProfilesImgContainer from 'components/mypage/container/ProfilesImgContainer';

interface EditPageProps {
  params: { slug: string };
}

export default function EditPage({ params }: EditPageProps) {
  const userId = parseInt(params.slug);
  return (
    <section className="w-full flex items-center flex-col">
      <div className="w-[80%] max-w-[1290px]">
        <Header nickname={`d`} userId={userId} />
      </div>
      <div className="w-[80%] h-full max-w-[1290px] flex-col flex items-center">
        <ProfilesImgContainer profile={undefined} />
        <EditUserInfoContainer />
      </div>
    </section>
  );
}
