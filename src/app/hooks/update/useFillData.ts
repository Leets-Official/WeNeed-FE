import { useRecoilState } from 'recoil';
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

const useFillData = () => {
  const [items, setItems] = useRecoilState(textState);
  const [files, setFiles] = useRecoilState(filestate);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [uploadFormData, setUploadFormData] =
    useRecoilState<FormData>(uploadForm);

  const fillPF = ({ user, portfolio }: useFillDataProps) => {
    console.log(portfolio);
    setUploadData({
      ...uploadData,
      title: portfolio.title,
      skills: portfolio.skills,
      tags: portfolio.tags,
      content: [...portfolio.contents],
    });
    setItems([...portfolio.contents]);
    console.log('//');
    console.log(portfolio.title, '로 타이틀 변경');
  };

  return { fillPF };
};

export default useFillData;
