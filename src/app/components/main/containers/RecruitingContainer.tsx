import RecruitingItem from '../recruiting/RecruitingItem';

interface RecruitingContainerProps {
  user: UserData;
  data: RecruitListItem[];
}

const RecruitingContainer = ({ user, data }: RecruitingContainerProps) => {
  return (
    <div className="mt-[75px]">
      {data.map((item) => {
        return (
          <div key={item.articleId}>
            {/* <Profile /> */}
            <RecruitingItem />
          </div>
        );
      })}
    </div>
  );
};

export default RecruitingContainer;
