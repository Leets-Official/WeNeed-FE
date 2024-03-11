interface RecruitListItem {
  articleId: number;
  profile: string;
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
  sharedText: string;
  teamMembers: TeamMember[];
}

interface RecruitFormArticle {
  createdAt: string;
  viewCount: number;
  heartCount: number;
  bookmarkCount: number;
}

interface RecruitForm {
  [key: string]: string | string[];
  deadline: string[];
  detailTags: string[];
  description: string;
  taskNeed: string;
  memberCount: string;
  phone: string;
  crewQuestions: string[];
  content: string;
  keywords: string[];
}

interface RecruitFormFromServer {
  deadline: string;
  detailTags: string[];
  description: string;
  taskNeed: string;
  memberCount: string;
  phone: string;
  crewQuestions: string[];
  content: string;
  keywords: string[];
}

interface ApplicationForm {
  name: string;
  major: string;
  doubleMajor: string;
  international: boolean;
  grade: number;
  status: string;
  phone: string;
  aboutMe: string;
  content: string;
  keywords: string[];
  crewAnswers: string[];
}
