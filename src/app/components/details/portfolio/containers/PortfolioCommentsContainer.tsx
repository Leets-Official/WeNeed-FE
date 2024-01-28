'use client';

import Icons from 'components/common/Icons';
import Input from 'components/common/Input';
import { useRef, useState } from 'react';
import { commentClose, commentOpen, inputDrop } from 'ui/IconsPath';
import CommentItem from 'components/details/common/CommentItem';

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
    <div className="flex flex-col items-center w-full bg-white pt-[50px] pb-[100px]">
      <div className="min-w-[1290px]">
        <p className="w-full text-xl font-semibold mb-[25px]">
          댓글 {comments.length}개
        </p>
        <div className="flex justify-between items-center relative">
          <div className="w-[56px] h-[56px] bg-neutral-300 rounded-full "></div>
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
        {comments.length ? (
          comments.map((comment) => {
            const { children, commentId } = comment;
            return (
              <div key={commentId} className="flex flex-col w-auto">
                <CommentItem comment={comment} />
                {comment.children && (
                  <div
                    className="w-[98px] h-[20px] rounded-[10px] bg-gradient-to-r from-[#00E0EE] to-[#517EF3] text-[12px] text-center font-normal flex justify-center items-center ml-[75px] mt-[13px] gap-1"
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
                {openChildren &&
                  children?.map((recomment) => {
                    return (
                      <div key={recomment.commentId} className="ml-[75px]">
                        <CommentItem comment={recomment} />
                      </div>
                    );
                  })}
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
