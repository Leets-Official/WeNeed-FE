import MyAnswerContainer from './MyAnswerContainer';
import MyInfoContainer from './MyInfoContainer';

const ApplicantContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-[20px]">
      <MyInfoContainer />
      <MyAnswerContainer />
    </div>
  );
};

export default ApplicantContainer;
