export const formatUploadTime = (uploadTime: string): string => {
  const now = new Date();
  const uploadedDate = new Date(uploadTime);

  const koreanTimeOffset = 9 * 60 * 60 * 1000;
  const utcUploadedDate = new Date(uploadedDate.getTime() + koreanTimeOffset);

  const timeDifference = now.getTime() - utcUploadedDate.getTime();
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  if (minutesDifference < 1) {
    const secondsDifference = Math.floor(timeDifference / 1000);
    return `${secondsDifference}초 전`;
  } else if (minutesDifference < 60) {
    return `${minutesDifference}분 전`;
  } else {
    const hoursDifference = Math.floor(minutesDifference / 60);
    return `약 ${hoursDifference}시간 전`;
  }
};
