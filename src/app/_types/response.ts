interface ResponsePortfolioDetails {
  user: UserProfile;
  portfolio: PortfolioDetails;
  workList: OtherWorkList[];
  comments: CommentList[];
}

interface ResponseRecruitingMain {
  user: UserProfile;
  pagable: Pagable;
  recrutingList: RecruitListItem[];
}

interface ResponseRecruitingDetail {
  user: UserProfile;
  recruit: RecruitDetailItem;
  comments: Comment[];
}
