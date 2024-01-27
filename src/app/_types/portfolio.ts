interface InterestedFieldWithTags {
  [key: string]: string[];
}

type SortTypes = 'recent' | 'view' | 'like';

interface Pageable {
  size: number;
  page: number;
  totalPages: number;
  totalElements: number;
}

interface CommonArticle {
  articleId: number;
  thumbnail: string;
  bookmarked: boolean;
  createdAt: string;
}

interface HotArticle {
  title: string;
  articleId: number;
  thumbnail: string;
}

interface PortfolioArticle extends CommonArticle {
  writerNickname: string;
  viewCount: number;
  heartCount: number;
}

interface RecommendArticle extends CommonArticle {
  title: string;
  subTitle: string;
}

interface UserProfile {
  nickname: string;
  sameUser: boolean;
  hearted: boolean;
  bookmarked: boolean;
}

interface WriterProfile {
  userId: number;
  nickname: string;
  major: string;
  profile: string;
  grade: number;
}

interface Content {
  id: number;
  type: 'text' | 'image' | 'links';
  textData?: string;
  imageData?: string;
}

interface TeamMember {
  userId: number;
  nickname: string;
  profile: string;
}

interface PortfolioDetails {
  thumbnail: string;
  title: string;
  createdAt: string;
  heartCount: number;
  viewCount: number;
  bookmarkCount: number;
  tags: string[];
  links: string[];
  files: string[];
  skills: string[];
  writer: WriterProfile;
  contents: Array<Content>;
}

interface OtherWorkList {
  articleId: number;
  thumbnail: string;
  title: string;
}

interface CommentList {
  commentId: number;
  content: string;
}
