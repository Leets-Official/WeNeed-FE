import Profile from '../portfolio/Profile';

interface CommentItemProps {
  comment: CommentList;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { userId, nickname, major, profile, grade, createdAt, children } =
    comment;
  return (
    <>
      <Profile
        writer={{ userId, nickname, major, profile, grade }}
        date={createdAt}
        onComment={true}
        size="medium"
      />
      <p className="bg-[#8C8C8C] h-[50px] ml-[75px]  px-[17px] py-[16px] rounded-[10px] font-semibold text-white ">
        {comment.content}
      </p>
    </>
  );
};

export default CommentItem;
