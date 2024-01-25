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

interface RecruitDetailItem extends PortfolioDetails {
  commentCount: number;
  teamMembers: TeamMember[];
}

interface Pagable {
  size: number;
  page: number;
  totalPages: number;
  totalElements: number;
}

interface Comment {
  commentId: number;
  content: string;
  userId: number;
  nickname: string;
  major: string;
  grade: number;
  createdAt: string;
  profile: string;
}
