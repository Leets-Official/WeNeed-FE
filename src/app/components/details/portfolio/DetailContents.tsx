import Image from 'next/image';

interface DetailContentsProps {
  title: string;
  contents: Array<Content>;
  links: string[];
  files: string[];
  skills: string[];
}

const DetailContents = ({
  title,
  contents,
  links,
  files,
  skills,
}: DetailContentsProps) => {
  return (
    <div className="flex flex-col items-center mt-[95px] min-h-[800px] gap-[40px] ">
      <h1 className="mb-[87px] text-3xl font-bold"> {title}</h1>
      {contents.map((content) => {
        switch (content.type) {
          case 'text':
            return (
              <div
                key={content.id}
                className="max-w-[842px] h-auto"
                dangerouslySetInnerHTML={{ __html: content.textData ?? '' }}
              ></div>
            );
          case 'image':
            return (
              <div
                key={content.id}
                className="flex justify-center items-center w-full h-auto overflow-hidden"
              >
                <Image
                  src={content.imageData || ''}
                  width={1280}
                  height={748}
                  alt="content"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center center',
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
