interface RecruitListItem {
  articleId: number;
  nickname: string;
  major: string;
  grade: number;
  createdAt: string;
  title: string;
  thumbnail: string;
  content: string;
  commentCount: number;
  viewCount: number;
  heartCount: number;
  bookmarkCount: number;
}

interface Pagable {
  size: number;
  page: number;
  totalPages: number;
  totalElements: number;
}

interface UserData {
  nickname: string;
}
