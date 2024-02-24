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
  user: UserProfile,
) => {
  const router = useRouter();
  const [hearted, setHearted] = useRecoilState(heartedPostState);
  const [bookmarked, setBookmarked] = useRecoilState(bookmarkedPostState);
  const [heartCount, setHeartCount] = useRecoilState(heartCountState);
  const [bookmarkCount, setBookmarkCount] = useRecoilState(bookmarkCountState);

  useEffect(() => {
    setHearted(user.hearted);
    setBookmarked(user.bookmarked);
  }, []);

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
  return { detailMenuHandlers, hearted, bookmarked, onSubmitOption };
};

export default useMenuHandlers;
