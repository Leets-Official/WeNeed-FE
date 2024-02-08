import Icons from 'components/common/Icons';
import { loginLeest } from 'ui/IconsPath';
import UserinfoSetContainer from 'components/userinfoset/container/UserinfoSetContainer';

interface UserinfoSetPageProps {
  params: {
    slug: string;
  };
}

const UserinfoSetPage = ({ params }: UserinfoSetPageProps) => {
  const pageNumber = params.slug;

  return (
    <section>
      <div className="w-full min-h-screen flex items-center justify-center">
        <Icons name={loginLeest} className="absolute top-2" />
        <UserinfoSetContainer slug={pageNumber} />
      </div>
    </section>
  );
};

export default UserinfoSetPage;
