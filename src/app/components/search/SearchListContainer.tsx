'use client';

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
    <div>
      {searchList?.map((article) => {
        return (
          <div key={article.articleId} className="w-[1290px] text-white ">
            <SearchItem article={article} user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchListContainer;
