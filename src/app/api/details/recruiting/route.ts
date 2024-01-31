import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  /* production env */
  // const data = await getPortfolioDetails(size, page, sort).then((data) => data);

  /* development env */
  return NextResponse.json(mockRecruitingDetails);
}

const mockRecruitingDetails = {
  user: {
    nickname: 'string',
    sameUser: true,
    hearted: true,
    bookmarked: true,
  },
  recruit: {
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',

    title:
      '현재 웹 사이트를 개발 중인데 저희 무드와 비슷한 UI디자이너를 구하고 있어요! 같이 즐겁게 협업할 분을 찾습니다.   ',
    createdAt: '2023-01-01T00:00:00Z',
    heatCount: 0,
    viewCount: 0,
    bookmarkCount: 0,
    commentCount: 0,
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
    contents: [
      {
        id: 0,
        type: 'text',
        textData:
          '저희는 21학번으로 총 4명끼리 개발을 하고 있는 소프트웨어학과 학생들 입니다. 작업을 하다 보니 디자인 분야에서 취약점을 발견했어요ㅠㅠ.. 근데 주변에 개발하는 친구들만 많고 디자인하는 친구는 없어서 고민중이였는데 이 웹을 발견했어요!  저희와 즐거운 마음으로 함께하실 분을 찾아요 :)  저희도 초보자고 마음 편하게 크루지원 해주시면 좋을 것 같아요. 근데 저희가 하는 분야가 조금 어려운 감이 있어서 이 분야에 대해 알고 있으시거나 공부하고자 하시는 분이면 너무나 좋을 것 같습니다 ',
        imageData: 'string',
      },
      {
        id: 1,
        type: 'image',
        textData: 'string',
        imageData:
          'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
      },
      {
        id: 3,
        type: 'text',
        textData:
          '저희는 21학번으로 총 4명끼리 개발을 하고 있는 소프트웨어학과 학생들 입니다. 작업을 하다 보니 디자인 분야에서 취약점을 발견했어요ㅠㅠ.. 근데 주변에 개발하는 친구들만 많고 디자인하는 친구는 없어서 고민중이였는데 이 웹을 발견했어요!  저희와 즐거운 마음으로 함께하실 분을 찾아요 :)  저희도 초보자고 마음 편하게 크루지원 해주시면 좋을 것 같아요. 근데 저희가 하는 분야가 조금 어려운 감이 있어서 이 분야에 대해 알고 있으시거나 공부하고자 하시는 분이면 너무나 좋을 것 같습니다 ',
        imageData: 'string',
      },
    ],
    teamMembers: [
      {
        userId: 0,
        nickname: 'string',
        profile:
          'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
      },
    ],
  },
  comments: [
    {
      commentId: 0,
      content: 'string',
      userId: 0,
      nickname: 'string',
      major: '경영학전공',
      grade: 0,
      createdAt: '2024-01-25T08:46:29.717Z',
      profile:
        'https://s3-alpha-sig.figma.com/img/ac88/f9f3/f8efddbddc23fa33c1407539718bc36a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8kXowJWlo2tgDatFEE7gqwz~gBtcLI1UCxo91oYTkttjpUFCDPCFTzxJSthGtLFamCK14EzrJVkps685CERZdlf02L9DMwtlAHHtPjdVzbAyJ~sqdVyi7K5RPz4BMsp0fG7J4Ot-q6m025TefniwOB--0W6Zy0PPcAGuEChDwxvYd-6EjkPv~XirD2-fL32qpEn1ePPyr8llQmROGDs6tn6aRUWSbPhe1PAzXLxR27c-gsnuiyW-2yvW4R4H26d1Kqn-jSw9~4Ti2ZekNlCv-o0BJUes~CL2E5Q8WlJU3CmvrTS1oeZtOk14dB3eH47opYsFq~kmWV7cmtPjWS1Qw__',
    },
  ],
};
