'use client';

import { useState } from 'react';
import Profile from './Profile';
import Input from 'components/common/Input';
import { PROFILE_STYLE } from 'constants/styles';
import Image from 'next/image';
import Icons from 'components/common/Icons';
import { commentClose, commentOpen } from 'ui/IconsPath';

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
  const {
    commentId,
    userId,
    nickname,
    major,
    profile,
    grade,
    createdAt,
    content,
    children,
  } = comment;
  const [openInput, setOpenInput] = useState<boolean>(false);
  const [openChildren, setOpenChildren] = useState<boolean>(false);
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

      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="mt-[23px] w-[90%]">
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
      {children && children?.length > 0 && (
        <div
          className="w-[98px] h-[20px] rounded-[10px] bg-gradient-to-r from-[#00E0EE] to-[#517EF3]
                      text-[12px] text-center font-normal flex justify-center items-center ml-[86px] mt-[13px] gap-1 
                      cursor-pointer hover:from-[#fff] hover:to-[#fff]"
          onClick={() => setOpenChildren(!openChildren)}
        >
          {openChildren ? (
            <p className="py-1">
              <Icons name={commentClose} />
            </p>
          ) : (
            <p className="h-3">
              <Icons name={commentOpen} />
            </p>
          )}
          <div className="pt-0.5">답글 {children?.length}개 보기</div>
        </div>
      )}
      <div className="flex flex-col items-start">
        {openChildren &&
          children?.map((recomment) => {
            return (
              <div key={recomment.commentId} className="ml-[75px] w-[86.5%]">
                <CommentItem
                  comment={recomment}
                  articleId={articleId}
                  parentId={commentId}
                  myProfile={myProfile}
                />
              </div>
            );
          })}
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
