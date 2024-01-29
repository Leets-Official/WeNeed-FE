import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  /* production env */
  // const data = await getPortfolioDetails(size, page, sort).then((data) => data);

  /* development env */
  return NextResponse.json(mockPortfolioDetails);
}

const mockPortfolioDetails = {
  user: {
    nickname: '위니드',
    sameUser: true,
    hearted: true,
    bookmarked: true,
  },
  portfolio: {
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',

    title: '위니드포폴',
    createdAt: '2023-01-01T00:00:00Z',
    heartCount: 23,
    viewCount: 254,
    bookmarkCount: 13,
    tags: ['BXBI', '영상', 'UXUI'],
    links: ['http://notion.so', 'http://velog'],
    files: ['~~~.pdf', '~~~.pdf'],
    skills: ['skill1', 'skill2'],
    writer: {
      userId: 2,
      nickname: '위니드',
      major: '시각디자인과',
      profile:
        'https://s3-alpha-sig.figma.com/img/605f/ffce/0207ec5b5b5ac6fb87b4910c529974e4?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NsSz25KNfa~N16Nio~d3vYvJbuMR1ZiK96iNpqDJ1J8GasL3viPTXXTVq2hkpatd7jNoJIZ2ajE6VYK7vFkD1yahxEwGuS80YUMuxJr5SKaRbx3tzDtkCFxY1-3NixI57-wKM9exeXiDWmWDhULFT8lQ3xkfDNgcJPL5gkntXyzkc41ROzh04sLg76mt5MxlLrvSUe6cfA2Cz2DTAvEPDxAmSVDEOowH-XNGA3VZ~VOHv0uDSNx4j3IH83Zu8wPCv5gPDGoV2Ky0lmP0uXxRi4cGwx-ZXXXegrx3SXqQpbNjFF7HIRYIOJh2YLZ1v36x2tK-H8BScpJ6uKYehbIrEA__',
      grade: 3,
    },
    teamMembers: [
      {
        userId: 1,
        nickname: 'string',
        profile:
          'https://s3-alpha-sig.figma.com/img/3e7e/1346/9f9936fa68f41c17b224a071bea60ef2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=doGbHOWg61z80xWOv8VlUYzlPF~0T9B~VPKx2cGr3Ol8au-Ow~Kj0LWB9dwmZ8Ff6VLW2WN70ARt1-USpx7Qh2B6RK8ZkKFfKpx4rm6fP9NPxRBiZOx7yo~9QqpFdkcvM8zQiPk05UOec~pG9KQu1I9MztgOO~fPH1U9ayDupx-Ew-A39WyeDfa2t7eXvKlYQyz9F3m2SQISZAIFclYgZO9Fzc5OneU5~~6Ouz3rhO4SRm4jSXDZ7~oHw9Mdf9h-NDmG-9T1RPn27dv4myYwaxyAzgf-m4a5F80-eCHsOeVEmQEMlXlyWr67VCDjEZLdEi7lF7SxvXX6~-Gzcz0keg__',
      },
      {
        userId: 2,
        nickname: 'string',
        profile:
          'https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXYUIJ78o4iC2-S7jzyWp3GoTidO8LRg5ltGOL7I9WquSORINK9uDNArHD5jUXyV9VLeYrDKSWkf3BTpWT46PoFcctnJPNkVfvU2QlKb-hjdiQ9q3WsxuFYOTTXjUdlP51l90qTbREVcbg56MCxAMIHgXNnu5GhqXnKamu94PdykTxmDfE~hYBJW5CmAygSisZ1JQNPWy-HgTP2izXOsiUg7h2mDTYrTn7IYTtU2fwbeIf5sgOqPLu7v2b5luM9dljuuubnUhYPAcFxA76PW~QOYP7njraGy2jnRqLrgtwxVUFvdRXVxqdQUB3QdbL2OCnsNVV9dQiAuXYrXDRI3vw__',
      },
    ],
    contents: [
      {
        id: 1,
        type: 'text',
        textData:
          '<p><span style="white-space:pre-wrap;">에스파의 패키지 디자인은 화려하고 현대적인 분위기를 담고 있습니다.<br>디자인의 주요 컨셉은 &apos;미래 도시&apos;입니다. 패키지의 전체적인 색상은 신비로운 보라색과 러블리한 핑크색으로 구성되어 있으며, 이를 통해 팬들에게 환상적이고 사랑스러운 느낌을 전달합니다.<br><br>패키지의 중심에는 에스파의 로고가 크게 배치되어 있으며, 로고 주변에는 퓨처리스틱한 도시의 모습이 그려져 있습니다. 패키지의 가장자리에는 첨단 기술의 흐름을 상징하는 라인 패턴이 있어, 전체적인 디자인에 동적인 느낌을 더해줍니다.<br>또한, 패키지의 여러 모서리에는 삼각형 형태의 조명이 배치되어 있어, 공간감과 깊이감을 부여하여 패키지의 시각적인 효과를 높였습니다. 이러한 디자인은 에스파의 음악과 컨셉을 잘 반영하며, 팬들에게 독특하고 매력적인 경험을 선사할 것입니다.</span></p>',
      },
      {
        id: 2,
        type: 'image',
        imageData:
          'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',
      },
      {
        id: 3,
        type: 'image',
        imageData:
          'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',
      },
    ],
  },
  workList: [
    {
      articleId: 1,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',

      title: '내포폴1',
      bookmarked: false,
    },
    {
      articleId: 2,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 3,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 4,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 5,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 6,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 7,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',

      title: '내포폴2',
      bookmarked: true,
    },
  ],
  comments: [
    {
      commentId: 0,
      content: '우와! 저의 관심사와 동일하네요! 크루 제안 넣어야 겠어요!!',
      userId: 0,
      nickname: '위니드니드',
      major: '경영학전공',
      grade: 3,
      createdAt: '2024-01-25T14:48:45.287Z',
      profile:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',
    },
    {
      commentId: 1,
      content:
        '안녕하세요. 작업물이 굉장히 제 취향이네요. 기회가 된다면 함께 작업하고 싶어요!  ',
      userId: 1,
      nickname: '가천대생',
      major: '경영학전공',
      grade: 4,
      createdAt: '2024-01-26T14:48:45.287Z',
      profile:
        'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',
      children: [
        {
          commentId: 10,
          content:
            '대댓 안녕하세요. 작업물이 굉장히 제 취향이네요. 기회가 된다면 함께 작업하고 싶어요!  ',
          userId: 1,
          nickname: '가천대생',
          major: '경영학전공',
          grade: 4,
          createdAt: '2024-01-26T14:48:45.287Z',
          profile:
            'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',
        },
        {
          commentId: 11,
          content:
            '대댓임 안녕하세요. 작업물이 굉장히 제 취향이네요. 기회가 된다면 함께 작업하고 싶어요!  ',
          userId: 1,
          nickname: '가천대생',
          major: '경영학전공',
          grade: 4,
          createdAt: '2024-01-26T14:48:45.287Z',
          profile:
            'https://s3-alpha-sig.figma.com/img/e6fc/d678/fff9528f05811626e304e6e1d349975d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=purZNtvb2jSiJT8MyKNpJi9v1D7Q4IV7MZY4AfutZwQ4P016o427UNmBVRknYoqc~m-Qg0bqY9-C0uv92UAjKQc6PFtmpL-liBccYmypWboOMAZaJ-l6TpfTONlnDKdMYXmaT6Tv7qhfFwB5jTEoTvMZkxkBfkLktRw~4wUWQL0HALklyHinxVqWjlofOg8yGA5600bLff-dDL6Ja24J2sqrwgqnKM~Z6pljJLtNhEQjoH~Cr9iO1lsvrIsnZ9~J~EMkXij6vJeRf3VKcvDRU9jf6hccDtNJekFeNCAvS~XkMn5cga~MVxDWdtJTS-dvYatMvQ~73bxunNsWpsZR6Q__',
        },
      ],
    },
  ],
  comments: [
    {
      commentId: 1,
      content: '우와! 저의 관심사와 동일하네요! 크루 제안 넣어야 겠어요!! ',
    },
    {
      commentId: 2,
      content:
        '안녕하세요. 작업물이 굉장히 제 취향이네요. 기회가 된다면 함께 작업하고 싶어요!  ',
    },
    {
      commentId: 3,
      content: '우와 작업물 너무 좋은데요! 저장할께요.  ',
    },
  ],
};
