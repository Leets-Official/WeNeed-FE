import FeedItemsContainer from './FeedItemsContainer';
import FeedMenuContainer from './FeedMenuContainer';

interface PostContainerProps {
  myOutputList1: MyOutputList[];
  myOutputList2?: FeedItems2[];
  sameUser: boolean;
  pageableDto1: Pageable;
  pageableDto2?: Pageable;
  handlePageChange: ({ selected }: { selected: number }) => void;
}

const PostContainer = ({
  myOutputList1,
  myOutputList2,
  sameUser,
  pageableDto1,
  pageableDto2,
  handlePageChange,
}: PostContainerProps) => {
  return (
    <div className="w-[60%] flex bg-white">
      <div className="w-full h-full flex flex-col pt-20">
        <FeedMenuContainer sameUser={sameUser} />
        <FeedItemsContainer
          sameUser={sameUser}
          article1={myOutputList1}
          article2={myOutputList2}
          pageableDto1={pageableDto1}
          pageableDto2={pageableDto2}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PostContainer;
