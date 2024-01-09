interface DetailTagProps {
  tag: string;
}

const DetailTag = ({ tag }: DetailTagProps) => {
  return (
    <div className="flex w-32 h-12 pl-3.5 pr-5 py-2.5 bg-zinc-300 rounded-3xl justify-center items-center gap-5">
      <div className="w-7 h-7 bg-neutral-400 rounded-full"></div>
      <div className="text-black text-xl">UXUI</div>
    </div>
  );
};

export default DetailTag;
