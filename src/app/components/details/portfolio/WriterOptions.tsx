'use client';
import Icons from 'components/common/Icons';
import { useRouter } from 'next/navigation';
import { pencil, trashcan } from 'ui/IconsPath';

interface WriterOptionsProps {
  onRecruit?: boolean;
  articleId: string;
}

const WriterOptions = ({ onRecruit, articleId }: WriterOptionsProps) => {
  const router = useRouter();

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
    <div className="w-full flex justify-center items-center gap-[26px]">
      <div
        className="flex items-center gap-[10px] cursor-pointer"
        onClick={() => deleteArticle(articleId)}
      >
        <Icons name={trashcan} className={`${onRecruit && 'fill-black'}`} />
        <p className="pt-1">삭제하기</p>
      </div>
      |
      <div className="flex items-center gap-[10px] cursor-pointer">
        <Icons name={pencil} className={`${onRecruit && 'fill-black'}`} />
        <p>수정하기</p>
      </div>
    </div>
  );
};

export default WriterOptions;
