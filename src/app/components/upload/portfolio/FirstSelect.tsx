import FileTypeContainer from './containers/FileTypeContainer';

const FirstSelect = () => {
  return (
    <div className="flex flex-col w-full h-[732px] items-center justify-center gap-y-[41px] bg-white">
      <p className="text-stone-300 text-3xl font-semibold ">
        프로젝트를 업로드 해 보세요!
      </p>
      <FileTypeContainer />
    </div>
  );
};
export default FirstSelect;
