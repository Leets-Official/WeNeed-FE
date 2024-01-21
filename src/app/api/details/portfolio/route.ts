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
    sameUser: true, //글쓴 사람 != 현재 보고있는 나
    isHearted: true, //'나'가 해당 게시물 좋아요 눌렀는지 여부
    isBookmarked: true, //'나'가 해당 게시물 북마크 눌렀는지 여부
  },
  portfolio: {
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/5202/49f7/988d39bc8cb67ef13e68fa679dd37972?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eoTpAMHJtPKnmykBP8YyUg1fbFkWOEzkRH2AtjuuzUvfeYmly-GarRF5x-zk81Diyf7HCObBc65Xpi1hcrMghwwSJg2rQ6y141HyXDNnhCWEUjhfdI-LeW9GeWPA4nOg9OiTpQqxealELTECvZrwFuNMI-2FYQrhzSQE9yWvPx6eTIyOvydPN~aBYGWgscrOLfDqokCs8ZXlg6BSrKnO2p2KHTQjCt3M3VBCs0wc2cEjnST0cg9-x8-0an4JxRkQnRiBBLUag0~JduS~qYkRIMgCXoca2Kg9rUZb2P7Sbt2VJq88W3jZ9ERoA~Kl1qzDvoBlqKrNnGb5Uo~dR4UFtA__',
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
        'https://s3-alpha-sig.figma.com/img/5202/49f7/988d39bc8cb67ef13e68fa679dd37972?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eoTpAMHJtPKnmykBP8YyUg1fbFkWOEzkRH2AtjuuzUvfeYmly-GarRF5x-zk81Diyf7HCObBc65Xpi1hcrMghwwSJg2rQ6y141HyXDNnhCWEUjhfdI-LeW9GeWPA4nOg9OiTpQqxealELTECvZrwFuNMI-2FYQrhzSQE9yWvPx6eTIyOvydPN~aBYGWgscrOLfDqokCs8ZXlg6BSrKnO2p2KHTQjCt3M3VBCs0wc2cEjnST0cg9-x8-0an4JxRkQnRiBBLUag0~JduS~qYkRIMgCXoca2Kg9rUZb2P7Sbt2VJq88W3jZ9ERoA~Kl1qzDvoBlqKrNnGb5Uo~dR4UFtA__',
      title: '내포폴1',
      isBookmarked: false,
    },
    {
      articleId: 2,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/5202/49f7/988d39bc8cb67ef13e68fa679dd37972?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eoTpAMHJtPKnmykBP8YyUg1fbFkWOEzkRH2AtjuuzUvfeYmly-GarRF5x-zk81Diyf7HCObBc65Xpi1hcrMghwwSJg2rQ6y141HyXDNnhCWEUjhfdI-LeW9GeWPA4nOg9OiTpQqxealELTECvZrwFuNMI-2FYQrhzSQE9yWvPx6eTIyOvydPN~aBYGWgscrOLfDqokCs8ZXlg6BSrKnO2p2KHTQjCt3M3VBCs0wc2cEjnST0cg9-x8-0an4JxRkQnRiBBLUag0~JduS~qYkRIMgCXoca2Kg9rUZb2P7Sbt2VJq88W3jZ9ERoA~Kl1qzDvoBlqKrNnGb5Uo~dR4UFtA__',
      title: '내포폴2',
      isBookmarked: true,
    },
  ],
};
