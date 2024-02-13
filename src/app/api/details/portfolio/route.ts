import { NextResponse } from 'next/server';
import { getPortfolioDetail } from 'service/getRequests';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const data = await getPortfolioDetail(articleId).then((data) => data);

  return NextResponse.json(data);
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
      'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

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
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
      grade: 3,
    },
    teamMembers: [
      {
        userId: 1,
        nickname: 'string',
        profile:
          'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
      },
      {
        userId: 2,
        nickname: 'string',
        profile:
          'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
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
          'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
      },
      {
        id: 3,
        type: 'image',
        imageData:
          'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
      },
    ],
  },
  workList: [
    {
      articleId: 1,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

      title: '내포폴1',
      bookmarked: false,
    },
    {
      articleId: 2,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 3,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 4,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 5,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 6,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

      title: '내포폴2',
      bookmarked: true,
    },
    {
      articleId: 7,
      thumnail:
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

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
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
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
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
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
            'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
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
            'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
        },
      ],
    },
  ],
};
