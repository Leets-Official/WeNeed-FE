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
      {searchList?.map((article) => {
        return (
          <Link
            href={`/portfolio/${article.articleId}`}
            key={article.articleId}
            className="w-full text-white "
          >
            <SearchItem article={article} user={user} />
          </Link>
        );
      })}
    </>
  );
};

export default SearchListContainer;
