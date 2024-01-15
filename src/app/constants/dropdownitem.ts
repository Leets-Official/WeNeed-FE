import { MY_PAGE } from './mypage';

const doubleMajorList = ['-', ...MY_PAGE.DEPARTMENT_LIST].sort();

export const DROPDOWN_ITEM = {
  grade: [...MY_PAGE.GRADE_LIST],
  departmnet: [...MY_PAGE.DEPARTMENT_LIST].sort(),
  interest: [...MY_PAGE.INTEREST_FIELD_LIST],
  doublemajor: doubleMajorList,
} as const;
