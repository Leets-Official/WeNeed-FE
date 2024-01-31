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
      <div className="w-full flex justify-center mb-[32px]">
        {tags.map((tag) => (
          <DetailCategories key={tag} category={tag} />
        ))}
      </div>
      <p
        className={`w-full text-center font-bold tracking-[1.15px] ${
          recruit && 'text-black'
        }`}
      >
        {formatUploadTime(createdAt)}
      </p>
    </>
  );
};

export default DetailContentsInfo;
