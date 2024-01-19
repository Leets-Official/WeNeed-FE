import Icons from 'components/common/Icons';
import Image from 'next/image';
import { bigWeneed } from 'ui/IconsPath';
import Profile from '../Profile';
import DetailCategories from 'components/main/DetailCategories';
import { formatUploadTime } from 'utils/date';
import DetailContents from '../DetailContents';

interface PortfolioDetailsContainerProps {
  user: UserProfile;
  portfolio: PortfolioDetails;
}

const PortfolioDetailsContainer = ({
  user,
  portfolio,
}: PortfolioDetailsContainerProps) => {
  const {
    thumbnail,
    writer,
    createdAt,
    viewCount,
    heartCount,
    bookmarkCount,
    tags,
    contents,
    links,
    files,
    skills,
  } = portfolio;
  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      {thumbnail ? (
        <div className="relative w-screen h-[380px] overflow-hidden">
          <Image
            src={thumbnail}
            layout="fill"
            alt="thumbnail"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ) : (
        <div className="relative w-screen h-96 bg-gradient-to-r from-cyan-400 to-blue-500">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Icons name={bigWeneed} />
          </div>
        </div>
      )}
      <div className="w-[1290px]">
        <Profile
          writer={writer}
          date={createdAt}
          count={[viewCount, heartCount, bookmarkCount]}
        />
        <div className="w-full flex justify-center mb-[32px]">
          {tags.map((tag) => (
            <DetailCategories key={tag} category={tag} />
          ))}
        </div>
        <p className="w-full text-center font-semibold tracking-[1.25px] ">
          {formatUploadTime(createdAt)}
        </p>
        <DetailContents
          contents={contents}
          links={links}
          files={files}
          skills={skills}
        />
      </div>
    </div>
  );
};

export default PortfolioDetailsContainer;
