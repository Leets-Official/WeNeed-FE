import { defaulApplicantForm, defaulRecruitForm } from 'constants/crew';
import { atom } from 'recoil';

export const postRecruiterState = atom<RecruitForm>({
  key: 'postRecruiterState',
  default: defaulRecruitForm,
});

export const postApplicantReqState = atom<ApplicationForm>({
  key: 'postApplicantReqState',
  default: defaulApplicantForm,
});

export const postApplicantAppealState = atom<File | null>({
  key: 'postApplicantAppealState',
  default: null,
});

export const postApplicantBoolState = atom<boolean>({
  key: 'postApplicantBoolState',
  default: false,
});
