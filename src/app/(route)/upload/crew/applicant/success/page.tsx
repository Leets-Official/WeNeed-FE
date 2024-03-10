import Icons from 'components/common/Icons';
import Link from 'next/link';
import { weneed } from 'ui/IconsPath';

export default async function CrewSuccessPage() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen text-white">
      <div className=" flex flex-col items-center w-full gap-[40px] h-[500px]">
        <h1 className="text-4xl"> 작성이 완료되었습니다.</h1>
        <h5 className="text-lg">
          {`제출한 지원서는 "마이페이지의 MY CREW" 에서 확인할 수 있습니다.`}
        </h5>
        <Link href={'/main/portfolio'}>
          홈으로 가기 <Icons name={weneed} />
        </Link>
      </div>
    </section>
  );
}
