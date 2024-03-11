import DetailCategories from 'components/main/common/DetailCategories';
import { RECRUITMENT_COMPLETE } from 'constants/crew';

interface ApplicationInfoProps {
  applicationForm: ApplicationForm;
}

const ApplicationInfo = ({ applicationForm }: ApplicationInfoProps) => {
  const {
    name,
    major,
    doubleMajor,
    status,
    phone,
    keywords,
    aboutMe,
    content,
    crewAnswers,
    grade,
  } = applicationForm;

  const renderContent = (questionKey: string) => {
    switch (questionKey) {
      case 'name':
        return (
          <div className="flex border-b border-black px-[30px]">{name}</div>
        );
      case 'major':
        return (
          <div className="flex border-b border-black px-[30px]">
            {`${major}, ${doubleMajor}`}
          </div>
        );
      case 'status':
        return (
          <div className="flex border-b border-black px-[30px]">{status}</div>
        );
      case 'phone':
        return (
          <div className="flex border-b border-black px-[30px]">{phone}</div>
        );
      //   case 'crewQuestions':
      //     return crewQuestions.map((question) => (
      //       <div key={question} className="flex border-b border-black px-[30px]">
      //         {question}
      //       </div>
      //     ));

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
            {applicationForm[questionKey as keyof typeof applicationForm]}
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

export default ApplicationInfo;
