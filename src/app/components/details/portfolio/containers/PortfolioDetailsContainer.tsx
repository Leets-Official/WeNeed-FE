import Icons from 'components/common/Icons';
import Image from 'next/image';
import { bigWeneed } from 'ui/IconsPath';
import Profile from '../Profile';
import { formatUploadTime } from 'utils/date';
import DetailContents from '../DetailContents';
import DetailMenuBar from '../DetailMenuBar';
import WriterOptions from '../WriterOptions';
import DetailCategories from 'components/main/common/DetailCategories';
import Link from 'next/link';

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
    title,
    contents,
    teamMembers,
    links,
    files,
    skills,
  } = portfolio;
  const { bookmarked, hearted } = user;
  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen">
      {thumbnail ? (
        <div className="relative flex justify-center items-center w-screen h-[380px] overflow-hidden">
          <Image
            src={thumbnail}
            fill={true}
            alt="thumbnail"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      ) : (
        <div className="relative w-screen h-96  bg-gradient-to-r from-[#4EF4FF] to-[#608CFF]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Icons name={bigWeneed} />
          </div>
        </div>
      )}
      <div className="w-[1290px] mb-[143px]">
        <div className="relative mb-[60px]">
          <div className="absolute top-0 left-[-96px] flex ">
            {teamMembers &&
              teamMembers.map((mem, i) => (
                <Link href={`/mypage/${mem.userId}`} key={mem.userId}>
                  <div
                    className="rounded-full overflow-hidden w-[80px] h-[80px]"
                    style={{
                      marginLeft: `-${i * 30}px`, // 여기서 숫자를 조절하여 간격을 조정할 수 있습니다.
                    }}
                  >
                    <Image
                      width={80}
                      height={80}
                      alt="writer"
                      src={mem.profile}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </Link>
              ))}
          </div>
          <Profile
            writer={writer}
            date={createdAt}
            count={[viewCount, heartCount, bookmarkCount]}
            user={{ bookmarked, hearted }}
            size="large"
          />
        </div>
        <div className="w-full flex justify-center mb-[32px]">
          {tags.map((tag) => (
            <DetailCategories key={tag} category={tag} />
          ))}
        </div>
        <p className="w-full text-center font-semibold tracking-[1.25px] ">
          {formatUploadTime(createdAt)}
        </p>
        <DetailContents
          title={title}
          contents={contents}
          links={links}
          files={files}
          skills={skills}
        />
        <DetailMenuBar userId={writer.userId} user={user} />
        {user.sameUser && <WriterOptions />}
      </div>
    </div>
  );
};

export default PortfolioDetailsContainer;