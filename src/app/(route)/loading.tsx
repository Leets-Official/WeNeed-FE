import Icons from 'components/common/Icons';
import { weneed } from 'ui/IconsPath';

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <Icons name={weneed} />
    </div>
  );
};

export default Loading;
