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
  content: string;
  id: string;
  url?: string;
}

interface DNDFileTypes {
  id: string;
  type: string;
  content: string;
  url: string;
}
