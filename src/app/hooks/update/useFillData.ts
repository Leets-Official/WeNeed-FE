import { useRecoilState } from 'recoil';
import {
  fileBlobState,
  imageBlobState,
  orderState,
  thumbnailState,
  thumbnailUrlState,
} from 'recoil/upload';
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
  const [items, setItems] = useRecoilState(textState);
  const [files, setFiles] = useRecoilState(filestate);
  const [images, setImages] = useRecoilState(imageBlobState);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [fileBlob, setFileBlob] = useRecoilState(fileBlobState);
  const [orderId, setOrderId] = useRecoilState(orderState);
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlState);

  const fillPF = ({ portfolio }: useFillDataProps) => {
    console.log('가져온 포폴', portfolio);
    setOrderId(portfolio.contents.length + 1);
    setItems([...portfolio.contents]);
    setThumbnailUrl(portfolio.thumbnail);

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

    portfolio.files.forEach((fileInfo) => {
      fetch(fileInfo.fileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const file = new File([blob], fileInfo.fileName);
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
    setItems([...recruit.contents]);
    setOrderId(recruit.contents.length + 1);

    fetch(recruit.thumbnail)
      .then((response) => response.blob())
      .then((blob) => {
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
