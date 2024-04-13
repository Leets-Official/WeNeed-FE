interface ApplicantUser {
  userId: number;
  profile: string | null;
  nickname: string;
  major: string;
  grade: number;
}

interface ApplicationItem {
  user: ApplicantUser;
  applicationId: number;
  appliedAt: string;
  result: 'PENDING' | 'ACCEPTED' | 'REFUSED';
}

interface SelectedStateApllication {
  selected: boolean;
  applicationItem: ApplicationItem;
}

interface ApplicationState {
  accepted: ApplicationItem[];
  pending: ApplicationItem[];
  refused: ApplicationItem[];
}
