import { FILE_TYPE_LIST } from 'constants/portfolio';
import { closeIcon, miniFileIcon, miniFileIconPath } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import MiniFileType from '../modal/uploadFile/MiniFileType';

const MiniFileTypeContainer = () => {
  return (
    <div className="flex flex-col w-[922px] h-[190px] rounded-[9px] bg-white">
      <div className="flex flex-row-reverse mt-[15px] mr-[15px]">
        <Icons name={closeIcon} />
      </div>
      <div className="flex justify-center gap-x-[42px] mt-[25px]">
        {FILE_TYPE_LIST.map((item, index) => (
          <MiniFileType
            key={item}
            title={item}
            iconSvgInfo={{ ...miniFileIcon, path: miniFileIconPath[index] }}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniFileTypeContainer;
