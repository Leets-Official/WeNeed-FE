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
