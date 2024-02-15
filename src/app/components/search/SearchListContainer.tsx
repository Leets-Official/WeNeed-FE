'use client';

import Link from 'next/link';
import SearchItem from './SearchItem';

interface SearchListContainerProps {
  searchList: SearchArticle[];
  user: UserProfile;
}

const SearchListContainer = ({
  searchList,
  user,
}: SearchListContainerProps) => {
  return (
    <>
      {searchList?.length ? (
        searchList.map((article) => {
          return (
            <Link
              href={`/portfolio/${article.articleId}`}
              key={article.articleId}
              className="w-full text-white "
            >
              <SearchItem article={article} user={user} />
            </Link>
          );
        })
      ) : (
        <p className="w-full font-bold text-[30px] my-[38px]">
          관련 게시물이 없습니다.
        </p>
      )}
    </>
  );
};

export default SearchListContainer;
