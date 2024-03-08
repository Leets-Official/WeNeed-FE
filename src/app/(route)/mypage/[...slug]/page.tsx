import Header from 'components/layout/Header';
import PostContainer from 'components/mypage/container/PostContainer';
import { ProfileContainer } from 'components/mypage/container/ProfileContainer';

export default function MyPage() {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="w-[80%] max-w-[1290px]">
        <Header nickname="위니드" userId={1} />
      </div>
      <div className="w-full min-h-screen flex">
        <ProfileContainer />
        <PostContainer />
      </div>
    </section>
  );
}
