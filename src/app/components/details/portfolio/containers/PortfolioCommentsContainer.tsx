'use client';

import Icons from 'components/common/Icons';
import Input from 'components/common/Input';
import CommentItem from 'components/details/common/CommentItem';
import { useState } from 'react';
import { commentClose, commentOpen, inputDrop } from 'ui/IconsPath';

interface PortfolioCommentsContainerProps {
  onRecruit?: boolean;
  comments: CommentList[];
}

const PortfolioCommentsContainer = ({
  onRecruit = false,
  comments = [],
}: PortfolioCommentsContainerProps) => {
  const [commentValue, setCommentValue] = useState<string>('');
  const [openChildren, setOpenChildren] = useState<boolean>(false);

  const onSubmitHandler = () => {};
  return (
    <div className="flex flex-col justify-center items-center w-full bg-white pt-[50px] pb-[100px]  ">
      <p
        className={`text-xl font-semibold mb-[25px] max-w-[1290px]  ${
          onRecruit ? 'text-black w-full' : ' w-[79%] '
        }`}
      >
        댓글 {comments.length}개
      </p>
      <div
        className={`flex items-center relative max-w-[1290px] ${
          onRecruit ? ' w-full' : ' w-[79%]'
        }`}
      >
        <div className="w-[56px] h-[56px] bg-neutral-300 rounded-full mr-[23px] "></div>
        <Input
          type="comment"
          textValue={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          onEnterPress={onSubmitHandler}
          placeholder="댓글을 입력해주세요."
          className="w-[90%]"
        />
        <div className="absolute top-[30%] right-[5%] flex justify-center items-center w-6 h-6 rounded-full bg-gradient-to-r from-[#4EF4FF] to-[#608CFF] cursor-pointer">
          <Icons name={inputDrop} />
        </div>
      </div>
      <div
        className={` mt-[30px] flex flex-col items-start text-black max-w-[1290px] ${
          onRecruit ? ' w-full bg-black' : ' w-[79%]'
        }`}
      >
        {comments.length ? (
          comments.map((comment) => {
            const { children, commentId } = comment;
            return (
              <div key={commentId}>
                <CommentItem comment={comment} />
                {comment.children && (
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
                    <p className="pt-0.5">답글 {children?.length}개 보기</p>
                  </div>
                )}
                <div className="flex flex-col items-start">
                  {openChildren &&
                    children?.map((recomment) => {
                      return (
                        <div key={recomment.commentId} className="ml-[75px]">
                          <CommentItem comment={recomment} />
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })
        ) : (
          <div>가장 먼저 댓글을 작성해보세요!</div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCommentsContainer;
