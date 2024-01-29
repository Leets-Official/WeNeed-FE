import { FILE_TYPE_LIST } from 'constants/portfolio';
import FileTypeContainer from '../both/containers/FileTypeContainer';
import { fileIconPath_P } from 'ui/IconsPath';
import { FILE } from 'dns';

const FirstSelectP = () => {
  return (
    <div className="flex flex-col w-full h-[732px] items-center justify-center gap-y-[41px] bg-white">
      <p className="text-stone-300 text-3xl font-semibold ">
        프로젝트를 업로드 해 보세요!
      </p>
      <FileTypeContainer
        fileTypeList={FILE_TYPE_LIST}
        fileIconPath={fileIconPath_P}
      />
    </div>
  );
};
export default FirstSelectP;
