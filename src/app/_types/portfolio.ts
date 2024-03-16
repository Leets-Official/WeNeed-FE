interface InterestedFieldWithTags {
  [key: string]: string[];
}

type SortTypes = 'DESC' | 'VIEW' | 'HEART';

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
  createdAt?: string;
}

interface HotArticle {
  title: string;
  articleId: number;
  thumbnail: string;
}

interface Article {
  articleId: number;
  thumbnail: string;
  bookmarked: boolean;
}

interface SearchArticle extends CommonArticle {
  title: string;
  detailTags: string[];
  major: string;
  grade: number;
  writerNickname: string;
  viewCount: number;
  heartCount: number;
  bookmarkCount: number;
}

interface PortfolioArticle extends CommonArticle {
  writerNickname: string;
  viewCount: number;
  heartCount: number;
  profile: string | null;
}

interface RecommendArticle extends CommonArticle {
  title: string;
  subTitle: string;
}

interface SimpleUser {
  userId: number;
  nickname: string;
}

interface UserProfile extends SimpleUser {
  sameUser: boolean;
  hearted: boolean;
  bookmarked: boolean;
  profile?: string;
}

interface WriterProfile {
  userId: number | null;
  writerNickname?: string;
  nickname?: string;
  major: string;
  profile: string | null;
  grade: number;
}

interface Content {
  id: string;
  type: 'text' | 'image' | 'link' | 'sound';
  data: string;
}

interface TeamMember {
  userId: number;
  nickname: string;
  profile: string;
}

interface FileDetail {
  fileName: string;
  fileUrl: string;
}

interface PortfolioDetails {
  thumbnail: string;
  title: string;
  createdAt: string;
  heartCount: number;
  viewCount: number;
  bookmarkCount: number;
  tags: string[];
  files: FileDetail[];
  skills: string[];
  writer: WriterProfile;
  contents: Array<Content>;
  teamMembers: teamMember[];
  recruiting: boolean;
}

interface teamMember {
  userId: number;
  nickname: string;
  profile: string;
}

interface OtherWorkList {
  articleId: number;
  thumbnail: string;
  title: string;
  bookmarked: boolean;
}

interface CommentList extends WriterProfile {
  nickname?: string;
  commentId: number;
  content: string;
  createdAt: string;
  children?: CommentList[];
  nickname?: string;
}

interface RecommentList extends CommentList {
  parentId: number;
}
