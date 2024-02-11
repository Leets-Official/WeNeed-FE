'use client';

import { useState } from 'react';
import Profile from './Profile';
import Input from 'components/common/Input';
import { PROFILE_STYLE } from 'constants/styles';
import Image from 'next/image';

interface CommentItemProps {
  comment: CommentList | RecommentList;
  articleId: string;
  parentId: number;
  myProfile: string;
}

const CommentItem = ({
  comment,
  articleId,
  parentId,
  myProfile,
}: CommentItemProps) => {
  const { userId, nickname, major, profile, grade, createdAt, content } =
    comment;
  const [openInput, setOpenInput] = useState<boolean>(false);
  const [recommentValue, setRecommentValue] = useState<string>('');
  const profileStyles = PROFILE_STYLE['medium']();

  const onSubmitHandler = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/comments?articleId=${articleId}&parentId=${parentId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: recommentValue }),
        },
      );
      console.log('res');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="mt-[23px] w-full">
        <Profile
          writer={{ userId, nickname, major, profile, grade }}
          date={createdAt}
          onComment={true}
          size="medium"
        />
        <div className="w-[90%] relative bg-[#8C8C8C] h-[50px] ml-[75px] px-[17px] py-[16px] rounded-[10px] font-semibold text-white ">
          {content}
          <div
            className="absolute bottom-[-14px] right-[-76px] text-xs cursor-pointer font-normal text-black p-3"
            onClick={() => setOpenInput(!openInput)}
          >
            답글 달기
          </div>
        </div>
      </div>
      {openInput && (
        <div className=" mt-[20px] flex gap-4 items-center w-full">
          <div
            className={`rounded-full overflow-hidden ${profileStyles} z-20 `}
          >
            {myProfile && (
              <Image
                width={56}
                height={56}
                alt="writer"
                src={myProfile}
                style={{
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
          <Input
            type="comment"
            textValue={recommentValue}
            onChange={(e) => setRecommentValue(e.target.value)}
            onEnterPress={onSubmitHandler}
            placeholder="댓글을 입력해주세요."
            className="w-[90.25%]"
          />
        </div>
      )}
    </>
  );
};

export default CommentItem;
