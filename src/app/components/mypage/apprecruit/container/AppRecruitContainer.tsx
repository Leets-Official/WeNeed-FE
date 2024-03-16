import ArticleContainer from './ArticleContainer';

interface AppRecruitContainerProps {
  data: ResponseRecruitingDetail | null;
  params: { slug: string };
  count: number[];
}

const AppRecruitContainer = ({
  data,
  params,
  count,
}: AppRecruitContainerProps) => {
  if (data) {
    return (
      <section className="min-h-screen flex flex-col items-center w-full mt-[5%]">
        <div className="relativ rounded-[10px] py-[54px] px-[47px] mb-[100px] bg-black w-full text-white">
          <ArticleContainer
            recruit={data.recruit}
            user={data.user}
            articleId={params.slug}
            count={count}
          />
        </div>
      </section>
    );
  }
};

export default AppRecruitContainer;
