'use client';
import { bookmark, heart } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import GradientBookmark from 'ui/gradient/GradientBookmark';
import GradientHeart from 'ui/gradient/GradientHeart';
import GradientView from 'ui/gradient/GradientView';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  bookmarkCountState,
  bookmarkedPostState,
  heartCountState,
  heartedPostState,
} from 'recoil/details';

interface CountsProps {
  count: number[];
  gradient?: boolean;
}

const Counts = ({ count, gradient = false }: CountsProps) => {
  const [heartCount, setHeartCount] = useRecoilState(heartCountState);
  const [bookmarkCount, setBookmarkCount] = useRecoilState(bookmarkCountState);
  const hearted = useRecoilValue(heartedPostState);
  const bookmarked = useRecoilValue(bookmarkedPostState);

  useEffect(() => {
    setHeartCount(() => count[1]);
    setBookmarkCount(() => count[2]);
  }, [count, setBookmarkCount, setHeartCount]);

  return (
    <div className="flex gap-[32px] h-[75px] items-center justify-center w-[20%]">
      <p className="flex gap-[10px] cursor-pointer">
        <GradientView width={24} height={18} /> {count[0]}
      </p>
      {gradient ? (
        <>
          <p className="flex gap-[10px] cursor-pointer">
            <GradientHeart width={24} height={24} />
            {heartCount}
          </p>
          <p className="flex  gap-[10px] cursor-pointer">
            <GradientBookmark width={17} height={24} />
            {bookmarkCount}
          </p>
        </>
      ) : (
        <>
          <p className="flex gap-[10px] cursor-pointer">
            {hearted ? (
              <GradientHeart width={24} height={24} />
            ) : (
              <Icons name={heart} />
            )}
            {heartCount}
          </p>
          <p className="flex  gap-[10px] cursor-pointer">
            {bookmarked ? (
              <GradientBookmark width={17} height={24} />
            ) : (
              <Icons name={bookmark} />
            )}
            {bookmarkCount}
          </p>
        </>
      )}
    </div>
  );
};

export default Counts;
