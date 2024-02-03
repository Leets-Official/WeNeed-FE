export const formatUploadTime = (uploadTime: string): string => {
  const now = new Date();
  const uploadedDate = new Date(uploadTime);

  const timeDifference = now.getTime() - uploadedDate.getTime();
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursDifference < 24) {
    return `${hoursDifference}시간 전 업로드`;
  } else {
    const year = uploadedDate.getFullYear();
    const month = String(uploadedDate.getMonth() + 1);
    const day = uploadedDate.getDate();
    return `${year}.${month}.${day}`;
  }
};
