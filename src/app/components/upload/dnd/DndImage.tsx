import Image from 'next/image';

interface DndImageProps {
  fileName: string;
  url?: string;
}

const DndImage = ({ fileName, url }: DndImageProps) => {
  return (
    <div>
      {url && <Image src={url} alt={fileName} width={800} height={429} />}
    </div>
  );
};

export default DndImage;
