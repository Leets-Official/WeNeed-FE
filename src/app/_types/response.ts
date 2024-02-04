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

interface ResponsePortfolioMainDetail {
  user: UserProfile;
  recruit: RecruitDetailItem;
  comments: CommentItem[];
}

interface ResponseRecruitingDetail {
  user: UserProfile;
  recruit: RecruitDetailItem;
  comments: CommentItem[];
}

interface ResponseGoogleLogin {
  accessToken: string;
  refreshToken: string;
}
