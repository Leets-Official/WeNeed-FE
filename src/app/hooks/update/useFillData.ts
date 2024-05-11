import { useRecoilState, useSetRecoilState } from 'recoil';
import { imageBlobState, orderState, thumbnailUrlState } from 'recoil/upload';
import { filestate, textState, uploadDataState } from 'recoil/upload';

interface useFillDataProps {
  user: UserProfile;
  portfolio: PortfolioDetails;
}

interface useFillRecruitProps {
  user: UserProfile;
  recruit: RecruitDetailItem;
}

const useFillData = () => {
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const setItems = useSetRecoilState(textState);
  const setFiles = useSetRecoilState(filestate);
  const setImages = useSetRecoilState(imageBlobState);
  const setOrderId = useSetRecoilState(orderState);
  const setThumbnailUrl = useSetRecoilState(thumbnailUrlState);

  const fillPF = ({ portfolio }: useFillDataProps) => {
    setOrderId(portfolio.contents.length + 1);
    setThumbnailUrl(portfolio.thumbnail);
    let idCounter = 0;

    setItems(
      portfolio.contents.map((content) => ({
        ...content,
        id: String(idCounter++),
      })),
    );

    setUploadData({
      ...uploadData,
      title: portfolio.title,
      tags: portfolio.tags,
      skills: portfolio.skills,
    });

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
    setFiles([...newArray]);

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
                imageFile: file,
                filename: content.data,
                isEdit: true,
              },
            ]);
          })
          .catch((error) =>
            console.error('파일 다운로드 중 오류 발생:', error),
          );
      }
    });
  };

  const fillRecruit = ({ recruit }: useFillRecruitProps) => {
    setOrderId(recruit.contents.length + 1);
    setOrderId(recruit.contents.length + 1);
    setThumbnailUrl(recruit.thumbnail);
    let idCounter = 0;

    setItems(
      recruit.contents.map((recruit) => ({
        ...recruit,
        id: String(idCounter++),
      })),
    );

    setUploadData({
      ...uploadData,
      title: recruit.title,
      tags: recruit.tags,
      skills: recruit.skills,
      sharedText: recruit.sharedText,
    });

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
                imageFile: file,
                filename: content.data,
                isEdit: true,
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
