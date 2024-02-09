import Image from 'next/image';

interface DndImageProps {
  fileName: string;
  url?: string;
}

const DndImage = ({ fileName, url }: DndImageProps) => {
  return (
    <div>
      {url && <Image src={url} alt={fileName} width={400} height={200} />}
    </div>
  );
};

export default DndImage;
