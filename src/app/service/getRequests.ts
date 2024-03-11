const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const getRequest = async (url: string, accessToken?: string) => {
  try {
    const headers = accessToken
      ? { ...commonHeaders, Authorization: 'Bearer ' + accessToken }
      : commonHeaders;
    const response = await fetch(url, {
      headers: headers,
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const getPortfolioMain = async (
  size: string,
  page: string,
  sort: string,
  detailTags: string | string[],
  accessToken: string,
) => {
  let url;
  if (detailTags.length === 0) {
    const params = new URLSearchParams({
      size,
      page,
      sort,
      detailTags: 'ALL',
    });
    url = `${SERVER_URL}/portfolio/all?${params.toString()}`;
  } else {
    const params = new URLSearchParams({
      size,
      page,
      sort,
      detailTags: Array.isArray(detailTags) ? detailTags.join(',') : detailTags,
    });
    url = `${SERVER_URL}/portfolio?${params.toString()}`;
  }
  return await getRequest(url, accessToken);
};

export const getRecruitMain = async (
  size: string,
  page: string,
  detailTags: string | string[],
  accessToken: string,
) => {
  let url;
  if (detailTags.length === 0) {
    const params = new URLSearchParams({
      size,
      page,
      detailTags: 'ALL',
    });
    url = `${SERVER_URL}/recruit/all?${params.toString()}`;
  } else {
    const params = new URLSearchParams({
      size,
      page,
      detailTags: Array.isArray(detailTags) ? detailTags.join(',') : detailTags,
    });
    url = `${SERVER_URL}/recruit?${params.toString()}`;
  }
  return await getRequest(url, accessToken);
};

export const getSearch = async (
  size: string,
  page: string,
  keyword: string,
  accessToken: string,
) => {
  const params = new URLSearchParams({
    size,
    page,
    keyword,
  });
  const url = `${SERVER_URL}/search?${params.toString()}`;
  return await getRequest(url, accessToken);
};

export const getPortfolioDetail = async (
  articleId: string,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/portfolio/${articleId}`;
  return await getRequest(url, accessToken);
};

export const getRecruitDetail = async (
  articleId: string,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/recruit/${articleId}`;
  return await getRequest(url, accessToken);
};

export const getRecruitForm = async (
  articleId: string,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/recruitmentForms/${articleId}`;
  const res = await getRequest(url, accessToken);
  return res;
};

export const getApplicantForm = async (
  applicationId: string,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/application-forms/${applicationId}`;
  return await getRequest(url, accessToken);
};
