import { useRecoilState } from 'recoil';
import { fileBlobState, imageBlobState, orderState } from 'recoil/upload';
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
  const [images, setImages] = useRecoilState(imageBlobState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [fileBlob, setFileBlob] = useRecoilState(fileBlobState);
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [uploadFormData, setUploadFormData] =
    useRecoilState<FormData>(uploadForm);

  const fillPF = ({ portfolio }: useFillDataProps) => {
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

    setOrderId(portfolio.contents.length + 1);
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

    portfolio.contents.forEach((content) => {
      if (content.type === 'image') {
        fetch(content.data)
          .then((response) => response.blob())
          .then((blob) => {
            const file = new File([blob], content.data);
            setImages((prevImages) => [
              ...prevImages,
              {
                id: file.name,
                blob: file,
                filename: file.name,
              },
            ]);
          })
          .catch((error) =>
            console.error('파일 다운로드 중 오류 발생:', error),
          );
      }
    });

    if (uploadFormData.has('thumbnail')) {
      uploadFormData.delete('thumbnail');
    }
    fetch(portfolio.thumbnail)
      .then((response) => response.blob())
      .then((blob) => {
        uploadFormData.append('thumbnail', blob, portfolio.thumbnail);
        setUploadData({
          ...uploadData,
          thumbnail: portfolio.thumbnail,
          content: [...portfolio.contents],
          title: portfolio.title,
          tags: portfolio.tags,
          skills: portfolio.skills,
        });
      })
      .catch((error) => console.error('파일 다운로드 중 오류 발생:', error));
  };

  const fillRecruit = ({ recruit }: useFillRecruitProps) => {
    setItems([...recruit.contents]);
    setOrderId(recruit.contents.length + 1);

    if (uploadFormData.has('thumbnail')) {
      uploadFormData.delete('thumbnail');
    }
    fetch(recruit.thumbnail)
      .then((response) => response.blob())
      .then((blob) => {
        uploadFormData.append('thumbnail', blob, recruit.thumbnail);
        setUploadData({
          ...uploadData,
          thumbnail: recruit.thumbnail,
          articleType: 'RECRUITING',
          sharedText: recruit.sharedText,
          content: [...recruit.contents],
          title: recruit.title,
          tags: recruit.tags,
          skills: recruit.skills,
        });
      })
      .catch((error) => console.error('파일 다운로드 중 오류 발생:', error));

    recruit.contents.forEach((content) => {
      if (content.type === 'image') {
        fetch(content.data)
          .then((response) => response.blob())
          .then((blob) => {
            const file = new File([blob], content.data);
            setImages((prevImages) => [
              ...prevImages,
              {
                id: file.name,
                blob: file,
                filename: file.name,
              },
            ]);
          })
          .catch((error) =>
            console.error('파일 다운로드 중 오류 발생:', error),
          );
      }
    });
  };

  return { fillPF, fillRecruit };
};

export default useFillData;
