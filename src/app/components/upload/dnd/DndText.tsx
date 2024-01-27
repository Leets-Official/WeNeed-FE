interface DndTextProps {
  text: string;
}
const DndText = ({ text }: DndTextProps) => {
  return (
    <div className="w-[1206px] h-auto p-[20px] bg-zinc-100 whitespace-pre-wrap text-sm font-normal">
      {text}
    </div>
  );
};

export default DndText;
