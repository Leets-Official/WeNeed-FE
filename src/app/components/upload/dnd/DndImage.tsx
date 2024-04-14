import Image from 'next/image';

interface DndImageProps {
  fileName: string;
  url?: string;
}

const DndImage = ({ fileName, url }: DndImageProps) => {
  return (
    <div className="relative flex justify-center w-full h-auto">
      {url && (
        <Image
          priority
          src={url}
          alt={fileName}
          width={1280}
          height={780}
          style={{
            width: '80%',
            height: '80%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      )}
    </div>
  );
};

export default DndImage;
