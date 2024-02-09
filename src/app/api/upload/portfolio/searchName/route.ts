import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('searchText');

  return NextResponse.json(mockTeamNames);
}

const mockTeamNames = [
  {
    userId: 0,
    nickname: '민규',
    profile:
      'https://i.namu.wiki/i/wWZIC_H3eyu8RZG_HNlVKpVbp73vwm3jqKlrBJWM3LysZZa0ig-Xo3cU-5Txf4E9yG4uRgronVpoarfH6KChv9RBBy7ah5zBG5FJ_idJCRBnp1YiXvdB0k-jSl2CibAhskUbQkr8qV9vZCL20RlVPQ.webp',
  },
  {
    userId: 1,
    nickname: '민구',
    profile:
      'https://i.namu.wiki/i/wWZIC_H3eyu8RZG_HNlVKpVbp73vwm3jqKlrBJWM3LysZZa0ig-Xo3cU-5Txf4E9yG4uRgronVpoarfH6KChv9RBBy7ah5zBG5FJ_idJCRBnp1YiXvdB0k-jSl2CibAhskUbQkr8qV9vZCL20RlVPQ.webp',
  },
  {
    userId: 2,
    nickname: '민기',
    profile:
      'https://i.namu.wiki/i/wWZIC_H3eyu8RZG_HNlVKpVbp73vwm3jqKlrBJWM3LysZZa0ig-Xo3cU-5Txf4E9yG4uRgronVpoarfH6KChv9RBBy7ah5zBG5FJ_idJCRBnp1YiXvdB0k-jSl2CibAhskUbQkr8qV9vZCL20RlVPQ.webp',
  },
  {
    userId: 3,
    nickname: '민공',
    profile:
      'https://i.namu.wiki/i/wWZIC_H3eyu8RZG_HNlVKpVbp73vwm3jqKlrBJWM3LysZZa0ig-Xo3cU-5Txf4E9yG4uRgronVpoarfH6KChv9RBBy7ah5zBG5FJ_idJCRBnp1YiXvdB0k-jSl2CibAhskUbQkr8qV9vZCL20RlVPQ.webp',
  },
  {
    userId: 4,
    nickname: '민경',
    profile:
      'https://i.namu.wiki/i/wWZIC_H3eyu8RZG_HNlVKpVbp73vwm3jqKlrBJWM3LysZZa0ig-Xo3cU-5Txf4E9yG4uRgronVpoarfH6KChv9RBBy7ah5zBG5FJ_idJCRBnp1YiXvdB0k-jSl2CibAhskUbQkr8qV9vZCL20RlVPQ.webp',
  },
];
