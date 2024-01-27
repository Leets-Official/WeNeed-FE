import DndVideo from './DndVideo';
import DndDocs from './DndDocs';
import { filestate } from 'recoil/dndFiles';
import { useRecoilValue } from 'recoil';

const Attatched = () => {
  const files = useRecoilValue(filestate);

  return (
    <div className="flex w-[1206px] h-[214px] bg-black">
      <div className="flex justify-center items-center w-[156.35px] h-[213.89px] bg-[#C5C5C5] text-[16px]">
        파일
      </div>
      <div className="flex flex-col w-[1049px] h-full px-[16.6px] py-[12.5px] gap-y-[16px] overflow-y-auto bg-zinc-300">
        {files.map((file: DNDFileTypes, index) => {
          switch (file.type) {
            case 'video':
              return <DndVideo key={index} fileName={file.content} />;
            case 'docs':
              return <DndDocs key={index} fileName={file.content} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Attatched;
