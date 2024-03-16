import Icons from 'components/common/Icons';
import Image from 'next/image';
import { fileMini, skillsList } from 'ui/IconsPath';

interface ArticleContentsProps {
  contents: Content[];
  files: string[];
  skills: string[];
  sharedText: string;
}

const ArticleContents = ({
  contents,
  files,
  skills,
  sharedText,
}: ArticleContentsProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-[50px] mt-[20px] overflow-hidden">
      {contents.map((content) => {
        switch (content.type) {
          case 'text':
            return (
              <div
                key={content.id}
                className="w-full h-auto text-white text-start leading-[31px]"
              >
                {content.data || ''}
              </div>
            );
          case 'image':
            return (
              <div
                key={content.id}
                className="relative max-w-[800px] max-h-[800px] flex justify-center items-center rounded-[15px] overflow-hidden"
              >
                {content.data && (
                  <Image
                    src={content.data}
                    alt="content"
                    width={1186}
                    height={528}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                )}
              </div>
            );
          default:
            break;
        }
      })}
      <div className="flex flex-col items-start justify-center w-full gap-[40px] text-[#00E0EE] font-semibold mt-[39px] ">
        <div className="flex gap-3 bg-[#3A3A3A] h-[36px] items-center px-3 rounded-[10px]">
          {skills && <Icons name={skillsList} />}
          스킬 -
          {skills.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
        </div>
        {files && (
          <div className="flex flex-col gap-[30px] ">
            {files &&
              files.map((file) => (
                <div
                  key={file}
                  className="flex gap-3 items-center w-full truncate bg-[#3A3A3A] h-[36px] px-3 rounded-[10px]"
                >
                  <Icons name={fileMini} />
                  <a
                    href={file}
                    download={file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {file}
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
      {sharedText && (
        <div className="flex flex-col w-full text-lg mb-[40px] text-black">
          <p className="pb-[18px] border-b border-black mb-[20px] font-semibold">
            나누고 싶은 큰 문장
          </p>
          <div className="max-h-[80px] overflow-hidden">{sharedText}</div>
        </div>
      )}
    </div>
  );
};

export default ArticleContents;
