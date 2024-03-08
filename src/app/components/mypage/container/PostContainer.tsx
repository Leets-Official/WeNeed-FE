import CategoriesContainers from './CategoriesContainers';
import FeedItemsContainer from './FeedItemsContainer';
import FeedMenuContainer from './FeedMenuContainer';

const PostContainer = () => {
  return (
    <div className="w-[60%] flex bg-white">
      <div className="w-full h-full flex flex-col justify-center mb-5">
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
    teamProfiles: [],
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
  {
    articleId: 90,
    thumbnail:
      'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/72178f8d-8532-4e11-b163-ce8dfc9aa97c.png',
    teamProfiles: [],
    title: '피드 제목',
    viewCount: 2,
    heartCount: 0,
  },
  {
    articleId: 89,
    thumbnail:
      'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/32dec634-c0aa-4198-8d84-3fb43bdc95ce.jpg',
    teamProfiles: [],
    title: '피드 제목',
    viewCount: 1,
    heartCount: 0,
  },
  {
    articleId: 88,
    thumbnail:
      'https://s3.ap-northeast-2.amazonaws.com/weneedbucket/files/23149fab-8f7b-428e-843a-901d68d5f8f5.jpg',
    teamProfiles: [],
    title: '피드 제목',
    viewCount: 3,
    heartCount: 0,
  },
];
