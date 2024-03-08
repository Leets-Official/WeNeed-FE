import DetailCategories from 'components/main/common/DetailCategories';
import { RECRUITMENT_COMPLETE } from 'constants/crew';

interface RecruitmentInfoProps {
  recruitForm: RecruitFormFromServer;
}

const RecruitmentInfo = ({ recruitForm }: RecruitmentInfoProps) => {
  const {
    deadline,
    description,
    taskNeed,
    memberCount,
    phone,
    crewQuestions,
    keywords,
  } = recruitForm;

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
      case 'description':
        return (
          <div className="flex border-b border-black px-[30px]">
            {description}
          </div>
        );
      case 'taskNeed':
        return (
          <div className="flex border-b border-black px-[30px]">{taskNeed}</div>
        );
      case 'memberCount':
        return (
          <div className="flex border-b border-black px-[30px]">
            {memberCount}명
          </div>
        );
      case 'crewQuestions':
        return crewQuestions.map((question) => (
          <div key={question} className="flex border-b border-black px-[30px]">
            {question}
          </div>
        ));
      case 'phone':
        return (
          <div className="flex border-b border-black px-[30px] ">{phone}</div>
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
            {recruitForm[questionKey as keyof typeof recruitForm]}
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
