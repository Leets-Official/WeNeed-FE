interface ResponseRecruitingMain {
  user: UserProfile;
  pageable: Pageable;
  recruitList: RecruitListItem[];
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

interface ResponseGoogleLogin {
  accessToken: string;
  refreshToken: string;
}

interface ResponseSearch {
  user: UserProfile;
  pageable: Pageable;
  articleList: SearchArticle[];
}

interface ResponseUploadSearch {
  users: UserInfo[];
}
