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
    console.error('삭제 중 error발생', error);
  }
};
