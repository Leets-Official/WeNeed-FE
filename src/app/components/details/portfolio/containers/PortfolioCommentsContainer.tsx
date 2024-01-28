'use client';

import Icons from 'components/common/Icons';
import Input from 'components/common/Input';
import CommentItem from 'components/details/common/CommentItem';
import { useState } from 'react';
import { commentClose, commentOpen, inputDrop } from 'ui/IconsPath';

interface PortfolioCommentsContainerProps {
  comments: CommentList[];
}

const PortfolioCommentsContainer = ({
  comments = [],
}: PortfolioCommentsContainerProps) => {
  const [commentValue, setCommentValue] = useState<string>('');
  const [openChildren, setOpenChildren] = useState<boolean>(false);

  const onSubmitHandler = () => {};
  return (
    <div className="flex flex-col justify-center items-center w-full bg-white pt-[50px] pb-[100px] ">
      <p className="text-xl font-semibold mb-[25px] w-[1290px]">
        댓글 {comments.length}개
      </p>
      <div className="w-[1290px] flex items-center relative">
        <div className="w-[56px] h-[56px] bg-neutral-300 rounded-full mr-[23px]"></div>
        <Input
          type="comment"
          textValue={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          onEnterPress={onSubmitHandler}
          placeholder="댓글을 입력해주세요."
        />
        <div className="absolute top-[15px] right-[19px] flex justify-center items-center w-6 h-6 rounded-full bg-gradient-to-r from-[#4EF4FF] to-[#608CFF] cursor-pointer">
          <Icons name={inputDrop} />
        </div>
      </div>
      <div className="w-[1290px] flex flex-col items-start">
        {comments.length ? (
          comments.map((comment) => {
            const { children, commentId } = comment;
            return (
              <div key={commentId}>
                <CommentItem comment={comment} />
                {comment.children && (
                  <div
                    className="w-[98px] h-[20px] rounded-[10px] bg-gradient-to-r from-[#00E0EE] to-[#517EF3]
                      text-[12px] text-center font-normal flex justify-center items-center ml-[75px] mt-[13px] gap-1 
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
                    <p>답글 {children?.length}개 보기</p>
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
