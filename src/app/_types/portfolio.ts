interface InterestedFieldWithTags {
  [key: string]: string[];
}

interface UserProfile {
  nickname: string;
  sameUser: boolean;
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
  type: 'text' | 'image';
  textData?: string;
  imageData?: string;
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
