interface RequestMainRecruitParams {
  size: number;
  page: number;
}

interface RequestMainPortfolioParams extends RequestMainRecruitParams {
  sort: string[];
}
