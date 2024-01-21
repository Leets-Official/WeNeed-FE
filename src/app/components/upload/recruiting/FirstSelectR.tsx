import { fileIconPath_R } from 'ui/IconsPath';
import FileTypeContainer from '../both/containers/FileTypeContainer';
import { FILE_TYPE_RECRUITING } from 'constants/recruit';

const FirstSelectR = () => {
  return (
    <div className="flex flex-col w-full h-[559px] items-center justify-center gap-y-[36px] bg-white">
      <p className="text-stone-300 text-3xl font-semibold ">
        새로운 팀원을 찾아보세요.
      </p>
      <FileTypeContainer
        fileTypeList={FILE_TYPE_RECRUITING}
        fileIconPath={fileIconPath_R}
      />
    </div>
  );
};
export default FirstSelectR;
