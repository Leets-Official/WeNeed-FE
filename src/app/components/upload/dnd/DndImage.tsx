import Image from 'next/image';

interface DndImageProps {
  fileName: string;
  url?: string;
}

const DndImage = ({ fileName, url }: DndImageProps) => {
  return (
    <div className="relative w-[450px] h-[250px]">
      {url && (
        <Image
          priority
          src={url}
          alt={fileName}
          fill={true}
          style={{
            objectFit: 'cover',
          }}
        />
      )}
    </div>
  );
};

export default DndImage;
