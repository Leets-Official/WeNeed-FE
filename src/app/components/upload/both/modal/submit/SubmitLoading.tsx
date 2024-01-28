import LoadingCircle from 'ui/gradient/GradientLoading';

const SubmitLoading = () => {
  return (
    <div className="flex flex-col w-[922px] h-[340px] justify-center items-center bg-white rounded-[9px]">
      <LoadingCircle />
      <div className="text-neutral-500 text-3xl font-bold mt-[37px] mb-3.5">
        게시물 업로드 중
      </div>
      <div className="text-neutral-300 text-base font-semibold">
        잠시 시간이 소요될 수 있습니다!
      </div>
    </div>
  );
};

export default SubmitLoading;
