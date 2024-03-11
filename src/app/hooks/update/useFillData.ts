import { useRecoilState } from 'recoil';
import { orderState } from 'recoil/upload';
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
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [uploadFormData, setUploadFormData] =
    useRecoilState<FormData>(uploadForm);

  const fillPF = ({ portfolio }: useFillDataProps) => {
    setItems([]);
    setFiles([]);
    console.log(portfolio);
    setUploadData({
      ...uploadData,
      title: portfolio.title,
      skills: portfolio.skills,
      tags: portfolio.tags,
      content: [...portfolio.contents],
    });
    setItems([...portfolio.contents]);

    portfolio.files.forEach((fileURL) => {
      console.log(fileURL, '로 요청중');
      fetch(fileURL)
        .then((response) => response.blob())
        .then((blob) => {
          console.log(blob, '을 성민이가 보내줌');
          const file = new File([blob], 'filename.jpg'); // 파일 이름은 변경 가능
          console.log(file, '을 성민이가 보내줌');
          uploadFormData.append('files', file);
        })
        .catch((error) => console.error('파일 다운로드 중 오류 발생:', error));
    });
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
