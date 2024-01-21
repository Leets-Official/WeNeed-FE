interface InterestedFieldWithTags {
  [key: string]: string[];
}

interface DetailMenuBarType {
  readonly 프로필: JSX.Element;
  readonly 크루제안: JSX.Element;
  readonly 좋아요: JSX.Element;
  readonly 북마크: JSX.Element;
  readonly 댓글: JSX.Element;
  readonly 공유: JSX.Element;
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
