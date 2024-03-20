'use client';

import Icons from 'components/common/Icons';
import Input from 'components/common/Input';
import CommentItem from 'components/details/common/CommentItem';
import { NO_COMMENTS } from 'constants/common';
import { PROFILE_STYLE } from 'constants/styles';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { inputDrop } from 'ui/IconsPath';
import GradientProfileSM from 'ui/gradient/GradientProfileMD';

interface CommentsContainerProps {
  onRecruit?: boolean;
  comments: CommentList[];
  articleId: string;
  user: UserProfile;
}

const CommentsContainer = ({
  onRecruit = false,
  comments = [],
  articleId,
  user,
}: CommentsContainerProps) => {
  const [commentValue, setCommentValue] = useState<string>('');
  const [totalComments, setTotalComments] = useState<number>(0);
  const profileStyles = PROFILE_STYLE['medium']();

  useEffect(() => {
    const countComments = () => {
      let cnt = comments.length;
      comments.map((comment) => {
        cnt += comment.children?.length || 0;
      });
      return cnt;
    };
    setTotalComments(countComments());
  }, [comments]);

  const onSubmitHandler = async () => {
    if (!commentValue) {
      alert('내용을 입력해주세요!');
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/comments?articleId=${articleId}&parentId=0`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: commentValue }),
        },
      );
      setCommentValue('');
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-white pt-[50px] pb-[100px]  ">
      <p
        className={`text-xl font-semibold mb-[25px] max-w-[1290px] text-black ${
          onRecruit ? ' w-full' : ' w-[79%]'
        }`}
      >
        댓글 {totalComments}개
      </p>
      <div
        className={`flex items-center relative max-w-[1290px] ${
          onRecruit ? ' w-full' : ' w-[79%]'
        }`}
      >
        <div className={`rounded-full overflow-hidden ${profileStyles} z-20 `}>
          {user.profile ? (
            <Image
              width={56}
              height={56}
              alt="writer"
              src={user.profile}
              style={{
                objectFit: 'cover',
              }}
            />
          ) : (
            <GradientProfileSM />
          )}
        </div>
        <Input
          type="comment"
          textValue={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          onEnterPress={onSubmitHandler}
          placeholder="댓글을 입력해주세요."
          className="w-[87%] ml-[20px] text-black"
        />
        <div className="absolute top-[30%] right-[8.5%] flex justify-center items-center w-6 h-6 rounded-full bg-gradient-to-r from-[#4EF4FF] to-[#608CFF] cursor-pointer">
          <Icons name={inputDrop} onClick={onSubmitHandler} />
        </div>
      </div>
      <div
        className={` mt-[30px] flex flex-col items-start text-black max-w-[1290px] ${
          onRecruit ? ' w-full ' : ' w-[79%]'
        }`}
      >
        {comments.length ? (
          comments.map((comment) => {
            const { commentId } = comment;
            return (
              <div key={commentId} className="w-full">
                <CommentItem
                  comment={comment}
                  articleId={articleId}
                  parentId={commentId}
                  myProfile={user.profile || ''}
                />
              </div>
            );
          })
        ) : (
          <p>{NO_COMMENTS.title}</p>
        )}
      </div>
    </div>
  );
};

export default CommentsContainer;
