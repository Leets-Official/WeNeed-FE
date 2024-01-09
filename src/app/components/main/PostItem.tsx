const PostItem = () => {
  return (
    <div className="relative cursor-pointer">
      <div className="absolute top-3 right-3 w-8 h-8 bg-zinc-500 rounded-full"></div>
      <div className=" w-72 h-72 bg-zinc-300 rounded-lg text-sm "></div>
      <div className="flex justify-between items-center w-full h-[35px] mt-[11px]">
        <div className="flex justify-center items-center gap-[10px]">
          <div className="w-8 h-8 bg-zinc-300 rounded-full"></div>
          <p className="font-semibold"> 본인 이름</p>
        </div>
        <div className="flex gap-[10px] justify-center items-center ">
          <div className="w-5 h-5 bg-zinc-500 rounded-full"></div>
          <p>122</p>
          <div className="w-5 h-5 bg-zinc-500 rounded-full"></div>
          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
