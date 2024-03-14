import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  bookmarkCountState,
  bookmarkedPostState,
  heartCountState,
  heartedPostState,
} from 'recoil/details';

const useMenuHandlers = (
  userId: number,
  articleId: string,
  page: string = '',
  user?: UserProfile,
) => {
  const router = useRouter();
  const [hearted, setHearted] = useRecoilState(heartedPostState);
  const [bookmarked, setBookmarked] = useRecoilState(bookmarkedPostState);
  const [heartCount, setHeartCount] = useRecoilState(heartCountState);
  const [bookmarkCount, setBookmarkCount] = useRecoilState(bookmarkCountState);

  useEffect(() => {
    if (user) {
      setHearted(user.hearted);
      setBookmarked(user.bookmarked);
    }
  }, []);

  const scrollToComments = () => {
    if (page !== 'recruiting')
      window.scrollTo({
        top: window.scrollY + 400,
        behavior: 'smooth',
      });
    else router.push(`/${page}/${articleId}`);
  };

  const goToPage = (type: string) => {
    type === 'mypage'
      ? router.push(`/${type}/${userId}`)
      : router.push(`/${type}/${articleId}`);
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
      if (type === 'like') {
        setHeartCount((prev) => (hearted === false ? prev + 1 : prev - 1));
        setHearted(!hearted);
      } else {
        setBookmarkCount((prev) =>
          bookmarked === false ? prev + 1 : prev - 1,
        );
        setBookmarked(!bookmarked);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const detailMenuHandlers: Record<string, () => void> = {
    프로필: () => goToPage('mypage'),
    크루제안: () => {
      if (page !== 'portfolio') goToPage('crew/recruitment');
      else alert('해당 게시물은 크루를 모집하고 있지 않습니다.');
    },
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
  return {
    detailMenuHandlers,
    hearted,
    bookmarked,
    heartCount,
    bookmarkCount,
    onSubmitOption,
  };
};

export default useMenuHandlers;
