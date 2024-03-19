interface ApplicantUser {
  userId: number;
  profile: string | null;
  nickname: string;
  major: string;
  grade: number;
}

interface Applicant {
  user: ApplicantUser;
  applicationId: number;
  appliedAt: string;
  result: 'PENDING' | 'ACCEPTED' | 'REFUSED';
}

interface ExtendedApplicant extends Applicant {
  selected: boolean;
}
