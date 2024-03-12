import FeedMenu from '../posts/FeedMenu';

interface FeedMenuContainerProps {
  sameUser: boolean;
}

const FeedMenuContainer = ({ sameUser }: FeedMenuContainerProps) => {
  return (
    <div>
      <FeedMenu sameUser={sameUser} />
    </div>
  );
};

export default FeedMenuContainer;
