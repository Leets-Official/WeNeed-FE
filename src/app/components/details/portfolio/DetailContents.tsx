import Image from 'next/image';

interface DetailContentsProps {
  contents: Array<Content>;
  links: string[];
  files: string[];
  skills: string[];
}

const DetailContents = ({
  contents,
  links,
  files,
  skills,
}: DetailContentsProps) => {
  return (
    <div className="flex flex-col items-center bg-neutral-700 mt-[95px] min-h-[800px]">
      {contents.map((content) => {
        switch (content.type) {
          case 'text':
            return <div>{content.textData}</div>;
          case 'image':
            return (
              <div className="max-w-[1280px] max-h-[749] ">
                <Image
                  src={content.imageData || ''}
                  width={1280}
                  height={748}
                  alt="content"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            );
          default:
            break;
        }
      })}
    </div>
  );
};

export default DetailContents;
