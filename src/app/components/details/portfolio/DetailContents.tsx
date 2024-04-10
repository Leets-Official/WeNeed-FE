import Icons from 'components/common/Icons';
import Image from 'next/image';
import { fileMini, skillsList } from 'ui/IconsPath';

interface DetailContentsProps {
  title: string;
  contents: Array<Content>;
  files: FileDetail[];
  skills: string[];
}

const DetailContents = ({
  title,
  contents,
  files,
  skills,
}: DetailContentsProps) => {
  return (
    <div className="flex flex-col items-center mt-[95px] min-h-[300px] gap-[40px] ">
      <h1 className="mb-[87px] text-3xl font-bold"> {title}</h1>
      {contents.map((content) => {
        switch (content.type) {
          case 'text':
            return (
              <div key={content.id} className="max-w-[842px] h-auto">
                {content.data}
              </div>
            );
          case 'link':
          case 'sound':
            return (
              <div
                key={content.id}
                className="flex gap-3 w-full h-auto text-[#00E0EE] font-semibold"
              >
                <Icons name={fileMini} />
                <a href={content.data} target="_blank" rel="noreferrer">
                  {content.data}
                </a>
              </div>
            );
          case 'image':
            return (
              <div
                key={content.id}
                className="flex justify-center items-center w-full h-auto overflow-hidden"
              >
                {content.data && (
                  <Image
                    src={content.data}
                    width={1280}
                    height={748}
                    alt="content"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      width: '100%',
                      height: '100%',
                    }}
                    quality={45}
                  />
                )}
              </div>
            );
          default:
        }
      })}
      <div className="flex flex-col items-start justify-center w-full gap-[40px] text-[#00E0EE] font-semibold mt-[39px]">
        {skills.length > 0 && (
          <div className="flex gap-3">
            <Icons name={skillsList} />
            스킬 -
            {skills.map((skill) => (
              <div key={skill}>{skill}</div>
            ))}
          </div>
        )}
        {files && (
          <div className="flex flex-col gap-[30px] ">
            {files &&
              files.map((file) => (
                <div
                  key={file.fileUrl}
                  className="flex gap-3 items-center w-full truncate"
                >
                  <Icons name={fileMini} />
                  <a
                    href={file.fileUrl}
                    download={file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {file.fileName}
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailContents;
