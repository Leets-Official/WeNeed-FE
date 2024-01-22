'use client';

import Icons from 'components/common/Icons';
import Input from 'components/common/Input';
import Image from 'next/image';
import { useState } from 'react';
import { inputDrop } from 'ui/IconsPath';

interface PortfolioCommentsContainerProps {
  comments: CommentList[];
}

const PortfolioCommentsContainer = ({
  comments = [],
}: PortfolioCommentsContainerProps) => {
  const [commentValue, setCommentValue] = useState<string>('');

  const onSubmitHandler = () => {};
  return (
    <div className="flex flex-col justify-center items-center w-full bg-white py-[50px]">
      <div className="w-[1290px]">
        <p className="w-full text-xl font-semibold mb-[25px]">
          댓글 {comments.length}개
        </p>
        <div className="flex justify-center items-center relative gap-[20px]">
          <div className="w-[56px] h-[56px] bg-neutral-300 rounded-full "></div>
          <Input
            type="comment"
            textValue={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            onEnterPress={onSubmitHandler}
            placeholder="댓글을 입력해주세요."
          />
          <div className="absolute top-[14px] right-[19px] flex justify-center items-center w-6 h-6 rounded-full bg-gradient-to-r from-[#4EF4FF] to-[#608CFF] cursor-pointer">
            <Icons name={inputDrop} />
          </div>
        </div>
      </div>
      {/* 댓글 0개일 경우 */}
    </div>
  );
};

export default PortfolioCommentsContainer;
