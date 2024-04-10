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
  type: 'text' | 'image' | 'link' | 'sound';
  data: string;
  id: string;
  file?: File;
}

interface DNDFileTypes {
  id: string;
  type: string;
  data: string;
  name?: string;
  file?: File;
  url?: string;
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
  content: Content[];
  skills: string[];
  tags: string[];
  teamMembersId: number[];
  sharedText?: string;
  thumbnail?: string;
}

interface RecruitmentComplete {
  deadline: string;
  description: string;
  taskNeed: string;
  memberCount: string;
  phone: string;
  crewQuestions: string;
  content: string;
  keywords: string;
}

interface ApplicationComplete {
  name: (arg: string) => string;
  major: (arg: string) => string;
  grade: (arg: string) => string;
  status: (arg: string) => string;
  phone: (arg: string) => string;
  appeal: (arg: string) => string;
  aboutMe: (arg: string) => string;
  content: (arg: string) => string;
  keywords: (arg: string) => string;
}

interface BlobImages {
  id: string;
  imageFile: File;
  filename: string;
  isEdit?: boolean;
}

interface SideNavItemProps {
  iconInfo: IconPathTypes;
  label: string;
  isEdit?: boolean;
  id?: string;
}

interface FileData {
  fileName: string;
  fileUrl: string;
}

type NavComponent = Record<string, JSX.Element>;

interface UploadRequestBody {
  articleRequest: UploadPFTypes;
  fileRequests: FileData;
}
