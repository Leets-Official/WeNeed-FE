interface ResponseRecruitingMain {
  user: UserProfile;
  pageable: Pageable;
  recrutingList: RecruitListItem[];
}

interface ResponsePortfolioMain {
  user: UserProfile;
  pageable: Pageable;
  hotArticleList: HotArticle[];
  articleList: PortfolioArticle[];
  recommendArticleList: RecommendArticle[];
}

interface ResponsePortfolioDetails {
  user: UserProfile;
  portfolio: PortfolioDetails;
  workList: OtherWorkList[];
  comments: CommentList[];
}

interface ResponseRecruitingDetail {
  user: UserProfile;
  recruit: RecruitDetailItem;
  comments: CommentList[];
}

interface GoogleLoginResponse {
  accessToken: string;
  refreshToken: string;
}

interface ResponsePortfolioDetails {
  user: UserProfile;
  portfolio: PortfolioDetails;
  workList: OtherWorkList[];
  comments: CommentList[];
}
