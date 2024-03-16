import { useRecoilState } from 'recoil';
import { fileBlobState, orderState } from 'recoil/upload';
import {
  filestate,
  textState,
  uploadDataState,
  uploadForm,
} from 'recoil/upload';

interface useFillDataProps {
  user: UserProfile;
  portfolio: PortfolioDetails;
}

interface useFillRecruitProps {
  user: UserProfile;
  recruit: RecruitDetailItem;
}

const useFillData = () => {
  const [items, setItems] = useRecoilState(textState);
  const [files, setFiles] = useRecoilState(filestate);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [fileBlob, setFileBlob] = useRecoilState(fileBlobState);
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [uploadFormData, setUploadFormData] =
    useRecoilState<FormData>(uploadForm);

  const fillPF = ({ portfolio }: useFillDataProps) => {
    setItems([]);
    setFiles([]);
    const myFiles = portfolio.files;
    const newArray = portfolio.files.map((item) => {
      let contentType = '';
      if (item.fileName.endsWith('pdf')) {
        contentType = 'docs';
      } else if (item.fileName.endsWith('mp4')) {
        contentType = 'video';
      }
      return {
        id: item.fileName,
        type: contentType,
        data: item.fileName,
        url: item.fileUrl,
      };
    });

    setUploadData({
      ...uploadData,
      title: portfolio.title,
      skills: portfolio.skills,
      tags: portfolio.tags,
      content: [...portfolio.contents],
    });
    setItems([...portfolio.contents]);
    setFiles([...newArray]);
    portfolio.files.forEach((fileURL) => {
      fetch(fileURL.fileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const file = new File([blob], fileURL.fileName);
          setFileBlob((prevFiles) => [
            ...prevFiles,
            {
              id: file.name,
              file: file,
              filename: file.name,
            },
          ]);
        })
        .catch((error) => console.error('파일 다운로드 중 오류 발생:', error));
    });
    if (uploadFormData.has('thumbnail')) {
      uploadFormData.delete('thumbnail');
    }
    fetch(portfolio.thumbnail)
      .then((response) => response.blob())
      .then((blob) => {
        uploadFormData.append('thumbnail', blob, portfolio.thumbnail);
        setUploadData({ ...uploadData, thumbnail: portfolio.thumbnail });
      })
      .catch((error) => console.error('파일 다운로드 중 오류 발생:', error));
  };

  const fillRecruit = ({ user, recruit }: useFillRecruitProps) => {
    setItems([]);
    setUploadData({
      ...uploadData,
      articleType: 'RECRUITING',
      title: recruit.title,
      skills: recruit.skills,
      tags: recruit.tags,
      sharedText: recruit.sharedText,
      content: [...recruit.contents],
    });
    setItems([...recruit.contents]);
    setOrderId(recruit.contents.length + 1);
  };
  return { fillPF, fillRecruit };
};

export default useFillData;
