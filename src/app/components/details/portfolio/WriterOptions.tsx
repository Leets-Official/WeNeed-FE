'use client';

import Button from 'components/common/Button';
import Icons from 'components/common/Icons';
import { pencil, trashcan } from 'ui/IconsPath';
import { usePathname, useRouter } from 'next/navigation';

interface WriterOptionsProps {
  onRecruit?: boolean;
  articleId: string;
  userId: number;
  nickname: string;
}

const WriterOptions = ({
  onRecruit,
  articleId,
  userId,
  nickname,
}: WriterOptionsProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const onLinkHandler = () => {
    router.push(
      `/update/${pathName.split('/')[1]}/${
        pathName.split('/')[2]
      }?nickname=${nickname}&userId=${userId}`,
    );
  };

  const deleteArticle = async (articleId: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/delete/post?articleId=${articleId}`,
      {
        method: 'DELETE',
      },
    );
    router.push('/');
  };

  return (
    <div className="flex flex-col w-full justify-center items-center gap-[50px] mb-[80px]">
      <div className="w-full flex justify-center items-center gap-[26px]">
        <div
          className="flex items-center gap-[10px] cursor-pointer"
          onClick={() => deleteArticle(articleId)}
        >
          <Icons name={trashcan} className={`${onRecruit && 'fill-black'}`} />
          <p className="pt-1">삭제하기</p>
        </div>
        |
        <div
          className="flex items-center gap-[10px] cursor-pointer"
          onClick={onLinkHandler}
        >
          <Icons name={pencil} className={`${onRecruit && 'fill-black'}`} />
          <p>수정하기</p>
        </div>
      </div>
      <Button
        buttonText="크루 모집하러가기"
        isDisabled={false}
        type="upload_recruiter"
        className=" text-white bg-gradient-to-r from-[#4EF4FF] to-[#608CFF]"
        onClickHandler={() =>
          router.push(`/upload/crew/recruiter/${articleId}`)
        }
      />
    </div>
  );
};

export default WriterOptions;
