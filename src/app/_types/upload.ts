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

interface SideNavItemProps {
  iconInfo: IconPathTypes;
  label: string;
  isEdit?: boolean;
  id?: string;
}
type NavComponent = Record<string, JSX.Element>;
