import Icons from 'components/common/Icons';
import { addThumbnailIcon } from 'ui/IconsPath';

const AddThumbnail = () => {
  return (
    <div className="mb-2.5 w-full cursor-pointer">
      <div className="flex items-center justify-center h-[222px] gap-x-[9px] bg-[#3A3A3A;] text-white font-bold">
        <Icons name={addThumbnailIcon} />
        <p>대표 사진 업로드</p>
      </div>
    </div>
  );
};
export default AddThumbnail;
