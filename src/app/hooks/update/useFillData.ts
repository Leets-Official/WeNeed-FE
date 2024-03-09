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
    // setUploadData({
    //   ...uploadData,
    //   title: portfolio.title,
    //   content: [...portfolio.contents],
    // });
    console.log(portfolio.title);
    console.log('//');
    console.log(portfolio.contents);
  };

  return { fillPF };
};

export default useFillData;
