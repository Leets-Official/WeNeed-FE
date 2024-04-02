import Image from 'next/image';

interface RecruitingItemProps {
  article: RecruitListItem;
}

const RecruitingItem = ({ article }: RecruitingItemProps) => {
  const { title, thumbnail, sharedText } = article;

  return (
    <>
      <div className="w-full max-h-[829px] flex flex-col items-center">
        <div className="w-full">
          <h3 className="flex flex-wrap text-[30px] w-full h-[87px] font-bold clamp-2">
            {title}
          </h3>
          <div className="relative w-full h-[388px] overflow-hidden rounded-[15px] mt-[15px] mb-[32px]">
            {thumbnail && (
              <Image
                priority
                src={thumbnail}
                width={0}
                height={388}
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  width: '100vw',
                  height: '388px',
                }}
                alt="recruitItem"
                placeholder="blur"
                blurDataURL="data:image/avif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            )}
          </div>
          <div className="flex flex-col w-full text-lg mb-[40px]">
            <p className="pb-[18px] border-b border-black mb-[20px] ">
              나누고 싶은 큰 문장
            </p>
            <div className="max-h-[80px] overflow-hidden">{sharedText}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitingItem;
