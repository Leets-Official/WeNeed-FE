import Image from 'next/image';
import Link from 'next/link';

interface HotPortfolioItemProps {
  article: HotArticle;
}

const HotPortfolioItem = ({ article }: HotPortfolioItemProps) => {
  const { articleId, thumbnail, title } = article;
  return (
    <Link href={`/portfolio/${articleId}`}>
      <div className="relative flex justify-center w-[1150px] h-[525px] rounded-lg bg-white overflow-hidden ">
        <Image
          src={thumbnail}
          alt="hot portfolio"
          fill={true}
          style={{
            objectFit: 'cover',
          }}
        />
        <span className="absolute bottom-[30px] left-[30px] text-3xl font-semibold ">
          {title}
        </span>
        <div className="absolute top-[15px] left-[15px] w-32 h-7 flex bg-black rounded-2xl text-center">
          <div className="flex justify-center items-center w-full h-full font-semibold">
            이번 달 HOT
          </div>
        </div>
        <div className="z-10 absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
      </div>
    </Link>
  );
};

export default HotPortfolioItem;
