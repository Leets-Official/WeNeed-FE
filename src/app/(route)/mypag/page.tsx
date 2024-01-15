import InfoBox from 'components/mypage/profile/InfoBox';

export default function MyPage() {
  return (
    <section>
      <div className="w-[705px] h-[1241px] bg-neutral-900">
        <InfoBox title={'이름'} content={'김민수'} />
      </div>
      MyPage
    </section>
  );
}
