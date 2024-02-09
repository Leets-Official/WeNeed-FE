interface UploadPropTypes {
  fileType: string;
  sizeLimit?: number;
  announcement: string;
  rule?: string;
  accept?: string;
  onSubmit: () => void;
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
  profile: string;
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
  skills: string;
  tags: string[];
  teamMembersId: number[];
}
