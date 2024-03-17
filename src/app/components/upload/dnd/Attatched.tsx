'use client';
import DndVideo from './DndVideo';
import DndDocs from './DndDocs';
import { filestate } from 'recoil/upload';
import { useRecoilValue } from 'recoil';

const Attatched = () => {
  const files = useRecoilValue(filestate);
  console.log('files현황: ', files);
  return (
    <div className="w-[1206px] h-auto max-h-48 bg-black px-5 py-3 flex flex-col gap-y-2.5 overflow-y-auto">
      {files.map((file: DNDFileTypes, index) => {
        switch (file.type) {
          case 'video':
            return <DndVideo key={index} fileName={file.data} />;
          case 'docs':
            return <DndDocs key={index} fileName={file.data} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Attatched;
