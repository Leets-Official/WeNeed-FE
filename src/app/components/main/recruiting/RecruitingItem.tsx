import Image from 'next/image';
import RecruitingItemInfo from './RecruitingItemInfo';

interface RecruitingItemProps {
  article: RecruitListItem;
}

const RecruitingItem = ({ article }: RecruitingItemProps) => {
  const { title, thumbnail, content } = article;
  return (
    <div className="w-full h-[809px] flex flex-col items-center bg-white text-black rounded-2xl pt-[40px] px-[43px]">
      <h3 className="flex flex-wrap text-[30px] w-full h-[87px] font-bold clamp-2">
        {title}
      </h3>
      <div className="relative w-full h-[388px] overflow-hidden rounded-[15px] mt-[15px] mb-[32px]">
        {thumbnail && (
          <Image
            src={thumbnail}
            fill={true}
            style={{ objectFit: 'cover' }}
            alt="recruitItem"
          />
        )}
      </div>
      <div className="flex flex-col w-full text-lg mb-[40px]">
        {/* <p className="pb-[18px] border-b border-black mb-[20px] ">
          나누고 싶은 큰 문장
        </p> */}
        <div className="h-[85px] overflow-hidden">{content}</div>
      </div>
      <RecruitingItemInfo article={article} />
    </div>
  );
};

export default RecruitingItem;
