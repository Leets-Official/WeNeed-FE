'use client';

import SearchItem from './SearchItem';
import useLoginModal from 'hooks/upload/useLoginModal';
import dynamic from 'next/dynamic';
import ModalPortal from 'components/common/modal/ModalPortal';
import ModalOutside from 'components/common/modal/ModalOutside';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SearchListContainerProps {
  searchList: SearchArticle[];
  user: UserProfile;
}

const NeedLoginModal = dynamic(
  () => import('components/common/modal/NeedLoginModal'),
  {
    suspense: true,
  },
);

const SearchListContainer = ({
  searchList,
  user,
}: SearchListContainerProps) => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const loginModalState = useLoginModal(loginModal);
  const router = useRouter();

  const onClose = () => {
    setLoginModal(false);
  };

  const onClickItem = (userId: number, articleId: number) => {
    if (userId == -1) {
      setLoginModal(() => true);
    } else {
      router.push(`/portfolio/${articleId}`);
    }
    return undefined;
  };

  return (
    <>
      {searchList?.length ? (
        searchList.map((article) => {
          return (
            <div
              onClick={() => onClickItem(user.userId, article.articleId)}
              key={article.articleId}
              className="w-full text-white "
            >
              <SearchItem article={article} user={user} />
            </div>
          );
        })
      ) : (
        <p className="w-full font-bold text-[30px] my-[38px]">
          관련 게시물이 없습니다.
        </p>
      )}
      {loginModalState && (
        <ModalPortal nodeName="needLoginPortal">
          <ModalOutside
            onClose={onClose}
            className="absolute left-0 w-full h-full flex justify-center items-center"
          >
            <NeedLoginModal />
          </ModalOutside>
        </ModalPortal>
      )}
    </>
  );
};

export default SearchListContainer;
