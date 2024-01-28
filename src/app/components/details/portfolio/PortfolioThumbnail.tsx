import Image from 'next/image';

interface PortfolioThumbnailProps {
  thumbnail: string;
}

const PortfolioThumbnail = ({ thumbnail }: PortfolioThumbnailProps) => {
  return (
    <div className="relative flex justify-center items-center w-screen h-[380px] overflow-hidden">
      <Image
        src={thumbnail}
        layout="fill"
        alt="thumbnail"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default PortfolioThumbnail;
