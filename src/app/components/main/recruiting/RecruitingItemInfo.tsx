interface RecruitingItemInfoProps {
  article: RecruitListItem;
}

const RecruitingItemInfo = ({ article }: RecruitingItemInfoProps) => {
  const { viewCount, heartCount, bookmarkCount, commentCount } = article;
  return (
    <div className="w-[1280px] flex justify-between border-t border-black h-[86px]"></div>
  );
};

export default RecruitingItemInfo;
