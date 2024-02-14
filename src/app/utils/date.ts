export const formatUploadTime = (uploadTime: string): string => {
  const now = new Date();
  const uploadedDate = new Date(uploadTime);

  const koreanTimeOffset = 9 * 60 * 60 * 1000;
  const utcUploadedDate = new Date(uploadedDate.getTime() + koreanTimeOffset);

  const timeDifference = now.getTime() - utcUploadedDate.getTime();
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursDifference < 24) {
    if (hoursDifference === 0) {
      const minutesDifference = Math.floor(timeDifference / (1000 * 60));
      return `약 ${minutesDifference}분 전 업로드`;
    } else {
      return `약 ${hoursDifference}시간 전 업로드`;
    }
  } else {
    const year = utcUploadedDate.getFullYear();
    const month = String(utcUploadedDate.getMonth() + 1);
    const day = utcUploadedDate.getDate();
    return `${year}.${month}.${day}`;
  }
};
