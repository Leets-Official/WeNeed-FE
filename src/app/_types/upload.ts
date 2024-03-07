interface UploadPropTypes {
  fileType: string;
  sizeLimit?: number;
  announcement: string;
  rule?: string;
  accept?: string;
}

interface ConfirmButtonProps {
  btnClick: () => void;
  btnText: string | undefined;
}

interface ThumbnailTypes {
  bgColor: string;
  height: string;
  etcStyles?: string;
}

interface DndTextTypes {
  type: string;
  data: string;
  id: string;
  url?: string;
}

interface DNDFileTypes {
  id: string;
  type: string;
  data: string;
  url: string;
}

interface UserInfo {
  userId: number;
  nickname: string;
  profileImage: string;
}

interface ContentTypes {
  id: string;
  type: string;
  data: string;
}

interface UploadPFTypes {
  articleType: string;
  title: string;
  content: ContentTypes[];
  skills: string[];
  tags: string[];
  teamMembersId: number[];
  sharedText?: string;
}
// interface UploadRecruitTypes {
//   articleType: string;
//   title: string;
//   content: ContentTypes[];
//   skills: string[];
//   tags: string[];
//   sharedText?: string;
// }

interface RecruitmentComplete {
  deadline: string;
  description: string;
  task_need: string;
  member_count: string;
  phone: string;
  crew_questions: string;
  content: string;
  keywords: string;
}

interface BlobImages {
  id: string;
  blob: Blob;
  filename: string;
}

interface BlobFiles {
  id: string;
  file: File;
  filename: string;
}
