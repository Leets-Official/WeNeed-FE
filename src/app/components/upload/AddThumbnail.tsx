import Icons from 'components/common/Icons';
import { ICON_PATH } from 'constants/portfolio';

const plus = {
  path: ICON_PATH.addThumbnail,
  width: 18,
  height: 18,
  fill: '#FFFFFF',
};

const AddThumbnail = () => {
  return (
    <div className="relative mb-2.5	 cursor-pointer">
      <div className="flex items-center justify-center w-[1280px] h-[222px] gap-x-[9px] bg-[#3A3A3A;] text-white font-bold">
        <Icons name={plus} />
        <p>대표 사진 업로드</p>
      </div>
    </div>
  );
};
export default AddThumbnail;
