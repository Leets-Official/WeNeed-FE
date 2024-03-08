import CategoriesContainers from './CategoriesContainers';
import FeedMenuContainer from './FeedMenuContainer';

const PostContainer = () => {
  return (
    <div className="w-[60%] items-center min-h-[850px] h-screen flex bg-white">
      <div className="w-full">
        <FeedMenuContainer />
        <CategoriesContainers />
      </div>
    </div>
  );
};

export default PostContainer;
