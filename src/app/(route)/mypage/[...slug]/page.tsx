import Header from 'components/layout/Header';
import { ProfileContainer } from 'components/mypage/container/ProfileContainer';

export default function MyPage() {
  return (
    <section>
      <Header nickname="위니드" userId={1} />
      <ProfileContainer />
    </section>
  );
}
