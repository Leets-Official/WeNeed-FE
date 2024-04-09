'use client';
import Icons from 'components/common/Icons';
import { closeIcon, titleIcon } from 'ui/IconsPath';
import { INTERESTED_TAG_LIST } from 'constants/portfolio';
import ConfirmButton from 'components/upload/both/ConfirmButton';
import DropdownTag from 'components/upload/both/modal/uploadFile/DropdownTag';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  fileBlobState,
  filestate,
  imageBlobState,
  thumbnailState,
  thumbnailUrlState,
  uploadDataState,
} from 'recoil/upload';
import SubmitLoading from 'components/upload/both/modal/submit/SubmitLoading';
import SubmitCompleted from 'components/upload/both/modal/submit/SubmitCompleted';
import uploadToS3 from 'utils/awsS3';

interface SelectDetailProps {
  closeModal?: () => void;
  isEdit?: boolean;
  id?: string;
}

const SelectDetailP = ({ closeModal, isEdit, id }: SelectDetailProps) => {
  const [title, setTitle] = useState('');
  const [skill, setSkill] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [thumbnail, setThumbnail] = useRecoilState<File | null>(thumbnailState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const [thumbnailUrlData, setThumbnailUrl] = useRecoilState(thumbnailUrlState);

  const isFilled = selectedTags.length === 0 || title.trim() === '';
  const reqPath = isEdit
    ? `api/update/portfolio?articleId=${id}`
    : 'api/upload/portfolio';
  const apiMode = isEdit ? 'PATCH' : 'POST';

  useEffect(() => {
    setTitle(uploadData.title);
    setSelectedTags(uploadData.tags);
    setSkill(uploadData.skills);
  }, []);

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const skillsArray = value.split(',');
    setSkill(skillsArray);
  };

  const handleConfirm = async () => {
    setLoading(true);

    let thumbnailUrl = null;

    const filePromises = files.map(async (fileInfo) => {
      try {
        const fileURL = fileInfo.file
          ? await uploadToS3(fileInfo.file)
          : fileInfo.url;
        return { fileName: fileInfo.id, fileUrl: fileURL };
      } catch (err) {
        console.error('파일 업로드 에러', err);
        return fileInfo;
      }
    });

    const imagePromises = uploadData.content.map(async (item) => {
      if (item.type === 'image') {
        if (item.name === null) {
          return item;
        } else {
          const imageUrl = item.file && (await uploadToS3(item.file));
          const { file, ...itemWithoutFile } = item;
          return { ...itemWithoutFile, data: imageUrl };
        }
      } else {
        return item;
      }
    });

    if (thumbnailUrlData === '' && thumbnail) {
      thumbnailUrl = await uploadToS3(thumbnail);
    } else {
      thumbnailUrl = thumbnailUrlData;
    }

    setThumbnail(null);

    const updatedContent = await Promise.all(imagePromises);
    const updatedFiles = await Promise.all(filePromises);
    console.log('제출 전 파일 배열', updatedFiles);

    const requestData = {
      articleRequest: {
        ...uploadData,
        content: updatedContent,
        thumbnail: thumbnailUrl,
        title: title,
        skills: skill,
        tags: selectedTags,
      },
      fileRequests: updatedFiles,
    };

    const requestOptions = {
      method: apiMode,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/${reqPath}`,
      requestOptions,
    );

    if (true) {
      setTimeout(() => {
        setLoading(false);
        setCompleted(true);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {loading && <SubmitLoading />}
      {completed && <SubmitCompleted />}
      <div className="flex flex-col w-[922px] h-[361px] bg-white rounded-[9px]">
        <div
          onClick={closeModal}
          className="flex flex-row-reverse mt-[15px] mr-3.5"
        >
          <Icons name={closeIcon} />
        </div>
        <div className="w-[825px] ml-10 mb-[34px] text-black text-lg font-bold ">
          게시물 업로드
        </div>
        <div className="flex flex-col gap-y-[10px] mr-[58px] ml-10">
          <div className="w-auto h-[49.96px] pl-[30px] pr-[27px] rounded-[10px] border border-zinc-300 flex items-center place-content-between">
            <div className="flex gap-x-[2px]">
              <p>제목</p>
              <p className="text-red-400">*</p>
            </div>
            <div className="flex flex-reverse-row w-auto items-center">
              <input
                className="w-[500px] text-right mr-[21px] focus:outline-none focus:border-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Icons name={titleIcon} />
            </div>
          </div>
          <DropdownTag
            options={INTERESTED_TAG_LIST}
            title={'태그'}
            announcement={'게시물에 관련된 태그를 모두 선택해주세요!'}
            onSelect={(tags) => setSelectedTags(tags)}
          />
          <div className="w-auto h-[49.96px] pl-[30px] pr-[27px] rounded-[10px] border border-zinc-300 flex items-center place-content-between">
            <p>스킬</p>
            <div className="flex flex-reverse-row w-auto items-center">
              <input
                className="w-[500px] text-right mr-[21px] focus:outline-none focus:border-none"
                value={skill.join(',')}
                onChange={handleSkillChange}
              />
            </div>
          </div>
          {(title.trim() === '' || selectedTags.length === 0) && (
            <div className="flex flex-row-reverse text-red-400 text-[10px] font-light ">
              필수항목을 모두 입력해주세요!{' '}
            </div>
          )}
          <div className="flex flex-row-reverse">
            <ConfirmButton
              btnClick={handleConfirm}
              btnText={!isFilled}
              isWritten={isFilled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectDetailP;
