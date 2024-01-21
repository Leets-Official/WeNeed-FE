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
