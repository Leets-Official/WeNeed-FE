import { NextResponse } from 'next/server';
import { getPortfolioMain } from 'service/main';

export async function GET(request: Request): Promise<NextResponse> {
  /* production env */
  // const data = await getPortfolioMain(size, page, sort).then((data) => data);

  /* development env */
  return NextResponse.json(mockPortfolioMain);
}

const mockPortfolioMain = {
  user: {
    nickname: '위니드',
  },
  pagable: {
    size: 20,
    page: 1,
    totalPages: 3,
    totalElements: 45,
  },
  hotArticleList: [
    {
      articleId: 3,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/e314/27d2/c2ff4cbe03cb35788c752051804fed80?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eau1uWnmtlqOeF5N~NN5qPmnLR-D9X24fpz7UcZtYO-PE3YCO~AQcBqdnIQyQxXfeTnHAaN61AQh6N2UK19G4Aweuz62bwci7APpF3WH11jmwoeM7FHrHvmzyFq6vxim-N6qwiCIppGBUkZIT-IgeyofJlEBdBQCLR9yQD8x8Eb9hAVSMZ1YE5E0oQcwKtGNejHQZE~vZhCT~KxRe2DZCTV0fw3Z1xjhDdrB-5AUoDbJhLzlEoRlaGD5Kkk80SGNQmrwT523mJXIk9s6OFsNxLZkUd0qVmjBbfykIQCLT2m5RE3tWlPz2s9s3ix8JTqsyhZUNoGl0dHP3rg4UamPBw__',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
    {
      articleId: 4,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/8422/f1ce/bb895d8c520cc0db5dcd0654edeef111?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lInw-2JdpSLrG1GI-rv1hwOnc4N0t29O4D~TBUvOYJDQBkbdBCPj6KsEO2FGmuIizjTQGlmX1lZh-cWfXLRk1fFd33Z3L46RO2ZZabehIy1Eu-ZERsF7ynndixj2JLISh4tHH9tSpHQFd7L8iL9K4fz7XtpfgIs2PqEZ2sNEPUv4WmTHj-hiQeSnJLJnPwZSJAHDdqEHYyMX2XOl4XJgrwzCxTb22ZBS~txKnca~GrT18MCFS-TLir-KpRWJth6Qq4oXciauovqIf2J41XZY4U~esQFPhgcJvUoiFNnWg7p5wXTKnnPxGhZnmu8-qlYsgnFtV8DHnXrxpYMzRN0VnA__',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
    {
      articleId: 5,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/8422/f1ce/bb895d8c520cc0db5dcd0654edeef111?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lInw-2JdpSLrG1GI-rv1hwOnc4N0t29O4D~TBUvOYJDQBkbdBCPj6KsEO2FGmuIizjTQGlmX1lZh-cWfXLRk1fFd33Z3L46RO2ZZabehIy1Eu-ZERsF7ynndixj2JLISh4tHH9tSpHQFd7L8iL9K4fz7XtpfgIs2PqEZ2sNEPUv4WmTHj-hiQeSnJLJnPwZSJAHDdqEHYyMX2XOl4XJgrwzCxTb22ZBS~txKnca~GrT18MCFS-TLir-KpRWJth6Qq4oXciauovqIf2J41XZY4U~esQFPhgcJvUoiFNnWg7p5wXTKnnPxGhZnmu8-qlYsgnFtV8DHnXrxpYMzRN0VnA__',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
    {
      articleId: 6,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/8422/f1ce/bb895d8c520cc0db5dcd0654edeef111?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lInw-2JdpSLrG1GI-rv1hwOnc4N0t29O4D~TBUvOYJDQBkbdBCPj6KsEO2FGmuIizjTQGlmX1lZh-cWfXLRk1fFd33Z3L46RO2ZZabehIy1Eu-ZERsF7ynndixj2JLISh4tHH9tSpHQFd7L8iL9K4fz7XtpfgIs2PqEZ2sNEPUv4WmTHj-hiQeSnJLJnPwZSJAHDdqEHYyMX2XOl4XJgrwzCxTb22ZBS~txKnca~GrT18MCFS-TLir-KpRWJth6Qq4oXciauovqIf2J41XZY4U~esQFPhgcJvUoiFNnWg7p5wXTKnnPxGhZnmu8-qlYsgnFtV8DHnXrxpYMzRN0VnA__',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
    {
      articleId: 7,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/8422/f1ce/bb895d8c520cc0db5dcd0654edeef111?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lInw-2JdpSLrG1GI-rv1hwOnc4N0t29O4D~TBUvOYJDQBkbdBCPj6KsEO2FGmuIizjTQGlmX1lZh-cWfXLRk1fFd33Z3L46RO2ZZabehIy1Eu-ZERsF7ynndixj2JLISh4tHH9tSpHQFd7L8iL9K4fz7XtpfgIs2PqEZ2sNEPUv4WmTHj-hiQeSnJLJnPwZSJAHDdqEHYyMX2XOl4XJgrwzCxTb22ZBS~txKnca~GrT18MCFS-TLir-KpRWJth6Qq4oXciauovqIf2J41XZY4U~esQFPhgcJvUoiFNnWg7p5wXTKnnPxGhZnmu8-qlYsgnFtV8DHnXrxpYMzRN0VnA__',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
  ],
  articleList: [
    {
      articleId: 1,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/a2cd/3484/603c258f286d9ebb1f04f8970f6edc23?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNrvn07mtnTSMiEdRQDvuixPFA06Uv-07R9F1ig5g1iHFfNzhiClTkychy8AIAdt1-nv0PLbcG7QKtBP7mP1G5ydMSnW83IFGxH-DqQ997Nrx8mUJXrDBVTPjenClnXVkKNM4Gab7wVakh16As9CmXhgSELkpHWoT17YbPdiQpLI4y7cSm2~E-34iUF8xoBf-LP7C3o7SXa4whg67IZ65cVlnxGDaRcREht9MGMrAIY1NuSnovGQSZEYhiVitiWEXAvRpJxGnXrIG1UpJpbmTh4-KkVKlZzrBBpPk3O3zpr6vubzJ4nLQPWQlJDngngp8UVpnq4uXFPW1h7nFMvxWw__',
      writerNickname: '유저3',
      createdAt: '2023-01-01T00:00:00Z',
      viewCount: 122,
      heartCount: 12,
    },
    {
      articleId: 2,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/a2cd/3484/603c258f286d9ebb1f04f8970f6edc23?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNrvn07mtnTSMiEdRQDvuixPFA06Uv-07R9F1ig5g1iHFfNzhiClTkychy8AIAdt1-nv0PLbcG7QKtBP7mP1G5ydMSnW83IFGxH-DqQ997Nrx8mUJXrDBVTPjenClnXVkKNM4Gab7wVakh16As9CmXhgSELkpHWoT17YbPdiQpLI4y7cSm2~E-34iUF8xoBf-LP7C3o7SXa4whg67IZ65cVlnxGDaRcREht9MGMrAIY1NuSnovGQSZEYhiVitiWEXAvRpJxGnXrIG1UpJpbmTh4-KkVKlZzrBBpPk3O3zpr6vubzJ4nLQPWQlJDngngp8UVpnq4uXFPW1h7nFMvxWw__',
      writerNickname: '유저3',
      createdAt: '2023-01-01T00:00:00Z',
      viewCount: 122,
      heartCount: 12,
    },
  ],
  recommendArticleList: [
    {
      articleId: 3,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/28ce/52f0/dc426ce4c88eb876d640ed1adc5bfa66?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQ1fTsCNEEdGv3gQceMzFFvYr51zUFO8llqfB-ZVmWhzpuz4rttMI85tk9duntMH0DpElKO3E9z-0sBZ1WH621ADxisLQAOm3OHDjuuW-INRAngAUBE0CY84-2RyEfdqmIPSci32rHi9eCWwjevrsi3-1hAUArfPG7uJJazEaNmh4dIntevdmTt92Q7GWeBfeynnvU6JOEhBWG79aQX97J9Z5esAl2zkwIqERPhV9nb1JDShNfAXAvF5rSPWoZUKxrvGjd1WJbBFVxQlDzdpjE3ntf4SrGXU9QtzojF5OpKCmJNpaV98S-373IyypbfqFZalcj7dWmDERBoxg8SZMA__',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
      subTitle: '~~~',
    },
    {
      articleId: 4,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/28ce/52f0/dc426ce4c88eb876d640ed1adc5bfa66?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQ1fTsCNEEdGv3gQceMzFFvYr51zUFO8llqfB-ZVmWhzpuz4rttMI85tk9duntMH0DpElKO3E9z-0sBZ1WH621ADxisLQAOm3OHDjuuW-INRAngAUBE0CY84-2RyEfdqmIPSci32rHi9eCWwjevrsi3-1hAUArfPG7uJJazEaNmh4dIntevdmTt92Q7GWeBfeynnvU6JOEhBWG79aQX97J9Z5esAl2zkwIqERPhV9nb1JDShNfAXAvF5rSPWoZUKxrvGjd1WJbBFVxQlDzdpjE3ntf4SrGXU9QtzojF5OpKCmJNpaV98S-373IyypbfqFZalcj7dWmDERBoxg8SZMA__',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
      subTitle: '~~~',
    },
  ],
};
