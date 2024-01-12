interface propTypes {
  title: string;
}

const Content = (props: propTypes) => {
  return (
    <div className="flex flex-col gap-y-[17px] items-center cursor-pointer">
      <div className={`size-[60px] bg-zinc-300	rounded-md`}></div>
      <p className="font-semibold">{props.title}</p>
    </div>
  );
};

export const MiniContent = (props: propTypes) => {
  return (
    <div className="flex flex-col gap-y-3 items-center cursor-pointer">
      <div className={`size-[32px] bg-zinc-300`}></div>
      <p className="text-sm	text-[#6D6D6D]">{props.title}</p>
    </div>
  );
};
export default Content;
