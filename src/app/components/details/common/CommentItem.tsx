import Profile from './Profile';

interface CommentItemProps {
  comment: CommentList | RecommentList;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { userId, nickname, major, profile, grade, createdAt, content } =
    comment;
  return (
    <div className="mt-[23px] ">
      <Profile
        writer={{ userId, nickname, major, profile, grade }}
        date={createdAt}
        onComment={true}
        size="medium"
      />
      <div className="w-auto relative bg-[#8C8C8C] h-[50px] ml-[75px] px-[17px] py-[16px] rounded-[10px] font-semibold text-white ">
        {content}
        <p className="absolute bottom-[-14px] right-[-76px] text-xs cursor-pointer font-normal text-black p-3">
          답글 달기
        </p>
      </div>
    </div>
  );
};

export default CommentItem;
