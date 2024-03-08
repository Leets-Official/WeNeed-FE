import CategoriesContainers from './CategoriesContainers';
import FeedItemsContainer from './FeedItemsContainer';
import FeedMenuContainer from './FeedMenuContainer';

const PostContainer = () => {
  return (
    <div className="w-[60%] flex bg-white">
      <div className="w-full h-full flex flex-col mt-20 mb-5">
        <FeedMenuContainer />
        <CategoriesContainers />
        <FeedItemsContainer article={myOutputList} />
      </div>
    </div>
  );
};

export default PostContainer;

const myOutputList = [
  {
    articleId: 93,
    thumbnail:
      'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/d4d73ffd-ff47-4d23-b1bf-153d5f5d00a9.png',
    teamProfiles: ['1', '2', '3'],
    title: '피드 제목입니다.',
    viewCount: 1,
    heartCount: 0,
  },
  {
    articleId: 92,
    thumbnail:
      'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/f768beab-0306-45b9-8a28-f97a3f165c16.jpg',
    teamProfiles: [],
    title: '피드 제목',
    viewCount: 2,
    heartCount: 0,
  },
  {
    articleId: 91,
    thumbnail:
      'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/3e654873-b99f-4df7-b1d9-703dc3bcaf7c.png',
    teamProfiles: [],
    title: '피드 제목',
    viewCount: 2,
    heartCount: 0,
  },
];
