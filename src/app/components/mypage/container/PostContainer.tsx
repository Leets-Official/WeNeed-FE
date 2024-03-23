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

// const myOutputMockList = [
//   {
//     articleId: 93,
//     thumbnail:
//       'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/d4d73ffd-ff47-4d23-b1bf-153d5f5d00a9.png',
//     teamProfiles: ['1', '2', '3'],
//     title: '피드 제목입니다.',
//     viewCount: 1,
//     heartCount: 0,
//   },
//   {
//     articleId: 92,
//     thumbnail:
//       'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/f768beab-0306-45b9-8a28-f97a3f165c16.jpg',
//     teamProfiles: [],
//     title: '피드 제목',
//     viewCount: 2,
//     heartCount: 0,
//   },
//   {
//     articleId: 91,
//     thumbnail:
//       'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/3e654873-b99f-4df7-b1d9-703dc3bcaf7c.png',
//     teamProfiles: [],
//     title: '피드 제목',
//     viewCount: 2,
//     heartCount: 0,
//   },
// ];
