import DetailCategories from 'components/main/common/DetailCategories';
import { RECRUITMENT_COMPLETE } from 'constants/crew';

const RecruitmentInfo = () => {
  const {
    deadline,
    description,
    task_need,
    member_count,
    phone,
    crew_questions,
    keywords,
  } = mockInfo;

  const renderContent = (questionKey: string) => {
    switch (questionKey) {
      case 'deadline':
        return (
          <div className="flex w-60 border-b border-black px-[30px]">
            {deadline.split('/').map((datePart, index) => (
              <div
                key={index}
                className="flex items-center mr-[20px] font-medium gap-[10.5px]"
              >
                <p>{datePart}</p>
                <p className="text-neutral-500 text-sm font-normal">
                  {index === 0 ? '년' : index === 1 ? '월' : '일'}
                </p>
              </div>
            ))}
          </div>
        );
      case 'member_count':
        return (
          <div className="flex border-b border-black px-[30px]">
            {member_count}명
          </div>
        );
      case 'phone':
        return (
          <div className="flex border-b border-black px-[30px] ">
            {String(phone).split('').slice(0, 3)}-
            {String(phone).split('').slice(3, 7)}-
            {String(phone).split('').slice(7)}
          </div>
        );
      case 'keywords':
        return (
          <div className="flex ">
            {keywords.map((keyword) => (
              <DetailCategories key={keyword} category={keyword} noBg />
            ))}
          </div>
        );
      default:
        return (
          <div className="flex border-b border-black px-[30px]">
            {mockInfo[questionKey as keyof typeof mockInfo]}
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-[46px] mt-[46px]">
      {Object.keys(RECRUITMENT_COMPLETE).map((key) => {
        const questionKey = key as keyof RecruitmentComplete;
        return (
          <div className="flex flex-col gap-[28px] " key={questionKey}>
            <p className="font-semibold">{RECRUITMENT_COMPLETE[questionKey]}</p>
            {renderContent(questionKey)}
          </div>
        );
      })}
    </div>
  );
};

export default RecruitmentInfo;

const mockInfo = {
  detailTag: ['BIBX', '웹', '앱'],
  deadline: '2024/11/2',
  description: '제가 하고 있는 프로젝트는 3D모델링을 하고 있는데요.',
  task_need: '그래픽 디자이너 ',
  member_count: 1,
  phone: '01022223333',
  crew_questions: '피그마 써 보셨나영?',
  content: '크루를 하고 싶은 분께 하고 싶은 말 ...',
  keywords: ['센스', '친절', '소수인원'],
};
