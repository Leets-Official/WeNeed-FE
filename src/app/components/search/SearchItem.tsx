'use client';

import Counts from 'components/details/common/Counts';
import Image from 'next/image';
import { useState } from 'react';

interface SearchItemProps {
  article: SearchArticle;
  user: UserProfile;
}

const SearchItem = ({ article, user }: SearchItemProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const {
    thumbnail,
    viewCount,
    heartCount,
    bookmarkCount,
    title,
    writerNickname,
    major,
    grade,
    detailTags,
  } = article;

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="h-[300px] mb-[30px] text-white flex justify-start items-center cursor-pointer">
      <div
        className="relative w-[296px] h-[296px] rounded-lg text-sm overflow-hidden "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={thumbnail}
          fill={true}
          alt="postImage"
          style={{
            objectFit: 'cover',
          }}
        />
        {hovered && (
          <div className="absolute top-0 w-full h-10 bg-gradient-to-t from-transparent to-neutral-900 rounded-lg"></div>
        )}
      </div>
      <div className="h-full ml-[30px] flex flex-col justify-center ">
        <h3 className="text-[30px] font-bold w-full truncate">{title}</h3>
        <div className="flex gap-3 mt-[25px] mb-2">
          {detailTags.map((tag) => (
            <p className="font-semibold" key={tag}>
              #{tag}
            </p>
          ))}
        </div>
        <div className="flex mb-[90px] items-center gap-2">
          <div className="rounded-full overflow-hidden w-6 h-6 bg-neutral-400 mr-2">
            <Image
              width={24}
              height={24}
              alt="writer"
              src={thumbnail}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <p className="mr-3 font-semibold">{writerNickname}</p>
          <p className="font-normal text-[14px]">
            {major} | {grade} 학년
          </p>
        </div>
        <div className="ml-[79px] ">
          <Counts count={[viewCount, heartCount, bookmarkCount]} user={user} />
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
