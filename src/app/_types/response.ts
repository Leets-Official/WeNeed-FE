interface ResponsePortfolioDetails {
  user: UserProfile;
  portfolio: PortfolioDetails;
  workList: OtherWorkList[];
  comments: CommentList[];
}

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

interface ResponseRecruitingDetail {
  user: UserProfile;
  recruit: RecruitDetailItem;
  comments: CommentList[];
}
