import Icons from 'components/common/Icons';
import { addThumbnailIcon } from 'ui/IconsPath';
interface AddThumbnailProps {
  thumbnailInfo: ThumbnailTypes;
}
const AddThumbnail = ({ thumbnailInfo }: AddThumbnailProps) => {
  const { height, bgColor, etcStyles } = thumbnailInfo;
  return (
    <div className="mb-2.5 mt-[22px] w-full cursor-pointer">
      <div
        className={`flex items-center justify-center ${height} gap-x-[9px] ${bgColor} text-white font-bold ${etcStyles}`}
      >
        <Icons name={addThumbnailIcon} />
        <p>대표 사진 업로드</p>
      </div>
    </div>
  );
};
export default AddThumbnail;
