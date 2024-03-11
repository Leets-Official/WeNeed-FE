import DetailCategories from 'components/main/common/DetailCategories';
import { formatUploadTime } from 'utils/date';

interface DetailContentsInfoProps {
  tags: string[];
  createdAt: string;
  recruit?: boolean;
}

const DetailContentsInfo = ({
  tags,
  createdAt,
  recruit,
}: DetailContentsInfoProps) => {
  return (
    <>
      <div className="w-full flex gap-[18px] items-center justify-center mb-[32px]">
        {tags.map((tag) => (
          <DetailCategories key={tag} category={tag} />
        ))}
      </div>
      <p
        className={`w-full flex items-center justify-center font-bold tracking-[1.15px] ${
          recruit && 'text-black'
        }`}
      >
        {formatUploadTime(createdAt)}
      </p>
    </>
  );
};

export default DetailContentsInfo;
