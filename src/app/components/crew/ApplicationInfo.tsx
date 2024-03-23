import DetailCategories from 'components/main/common/DetailCategories';
import { APPLICATION_COMPLETE } from 'constants/crew';

interface ApplicationInfoProps {
  applicationForm: ApplicationFormResponse;
}

const ApplicationInfo = ({ applicationForm }: ApplicationInfoProps) => {
  const { name, phone, keywords, crewAnswers, major, crewQuestions } =
    applicationForm;

  const renderContent = (questionKey: string) => {
    switch (questionKey) {
      case 'major':
        return (
          <div className="flex gap-[50px] relative">
            <div className="">{major}</div>
            <div className="absolute top-[-50px] right-[-180px] h-[200px] ">
              <p className="font-semibold mb-[26px]">복수전공 </p>
              <div className=" border-b border-black px-[30px]">{`${major}`}</div>
            </div>
          </div>
        );
      case 'phone':
        return (
          <div className="w-full">
            <div className=" border-b border-black px-[30px]">{phone}</div>
            <div className="mt-[40px]">
              {crewQuestions.map((question, i) => (
                <div key={question} className="font-semibold">
                  <div>{question}</div>
                  <div className="mt-[32px] px-[30px] border-b border-black">
                    {crewAnswers[i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'keywords':
        return (
          <div className="flex text-white h-[90px] flex-wrap">
            {keywords.map((keyword) => (
              <DetailCategories key={keyword} category={keyword} noBg />
            ))}
          </div>
        );
      default:
        return (
          <div>
            {applicationForm[questionKey as keyof typeof applicationForm]}
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-[46px] mt-[46px]">
      {Object.keys(APPLICATION_COMPLETE).map((key) => {
        const questionKey = key as keyof ApplicationComplete;
        return (
          <div className="flex flex-col gap-[28px] " key={questionKey}>
            <p className="font-semibold">
              {APPLICATION_COMPLETE[questionKey](name)}
            </p>
            <div
              className={`w-fit  ${
                !(questionKey === 'phone' || questionKey === 'keywords')
                  ? 'px-[30px] border-b border-black'
                  : ''
              }`}
            >
              {renderContent(questionKey)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationInfo;
