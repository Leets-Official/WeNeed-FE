// response types

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
