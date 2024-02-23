export const deletePost = async (id: string, accessToken: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.log('google login error', error);
  }
};

//게시물 조회에서 머튼과 이벤트 연결할 delete로직
const deleteConfirm = async (articleId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/delete/post?articleId=${articleId}`,
    {
      method: 'DELETE',
    },
  );
};
