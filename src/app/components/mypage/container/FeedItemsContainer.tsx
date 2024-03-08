import FeedItems from '../posts/FeedItems';
import Link from 'next/link';

interface FeedItemsProps {
  article: FeedItems[];
}

const FeedItemsContainer = ({ article }: FeedItemsProps) => {
  return (
    <div className="w-full overflow-scroll no-scrollbar mt-6 p-4 h-[60%]">
      <div className="w-full mb-4 h-5 text-black text-base font-semibold">
        총 {article.length}개
      </div>
      <div className="flex gap-[32px] flex-wrap">
        {article.map((article) => (
          <Link
            href={`/portfolio/${article.articleId}`}
            key={article.articleId}
          >
            <FeedItems article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeedItemsContainer;
