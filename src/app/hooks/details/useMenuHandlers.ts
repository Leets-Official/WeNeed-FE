import { useRouter } from 'next/navigation';

const useMenuHandlers = (userId: number, articleId: string) => {
  const router = useRouter();

  const scrollToComments = () => {
    window.scrollTo({
      top: window.scrollY + 400,
      behavior: 'smooth',
    });
  };

  const goToProfile = () => {
    router.push(`/mypage/${userId}`);
  };

  const onSubmitOption = async (type: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/${type}?articleId=${articleId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const detailMenuHandlers: Record<string, () => void> = {
    프로필: () => goToProfile(),
    크루제안: () => alert('준비중인 서비스입니다 :)'),
    좋아요: () => {
      onSubmitOption('like');
    },
    북마크: () => {
      onSubmitOption('bookmark');
    },
    댓글: () => {
      scrollToComments();
    },
    공유: () => {},
  };
  return detailMenuHandlers;
};

export default useMenuHandlers;
