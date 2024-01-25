interface InterestedFieldWithTags {
  [key: string]: string[];
}

type SortTypes = 'recent' | 'view' | 'like';

interface User {
  nickname: string;
}

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
