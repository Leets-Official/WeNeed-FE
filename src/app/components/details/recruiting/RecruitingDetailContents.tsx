import Image from 'next/image';
import React from 'react';

interface RecruitingDetailContentsProps {
  contents: Content[];
}

const RecruitingDetailContents = ({
  contents,
}: RecruitingDetailContentsProps) => {
  return (
    <div className="flex flex-col items-center gap-[50px] mt-[20px]">
      {contents.map((content) => {
        switch (content.type) {
          case 'text':
            return (
              <div
                key={content.id}
                className="w-full h-auto text-black text-start leading-[31px]"
              >
                {content.textData || ''}
              </div>
            );
          case 'image':
            return (
              <div
                key={content.id}
                className="relative flex justify-center items-center w-[1186px] rounded-[15px] h-[528px] overflow-hidden"
              >
                <Image
                  src={content.imageData || ''}
                  fill={true}
                  alt="content"
                  style={{
                    objectFit: 'cover',
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

export default RecruitingDetailContents;
