import ContentContainer from './containers/ContentContainer';

const FirstAdd = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center w-[1280px] h-[732px] gap-y-[41px] bg-white">
        <p className="text-stone-300 text-3xl font-semibold ">
          프로젝트를 업로드 해 보세요!
        </p>
        <ContentContainer />
      </div>
    </div>
  );
};
export default FirstAdd;
