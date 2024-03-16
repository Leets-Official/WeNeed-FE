import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const editAlert = () => {
  toast.info('수정되었습니다', {
    icon: () => '✍️',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 3000,
    position: 'top-center',
  });
};

export const deleteAlert = () => {
  toast.error('삭제되었습니다', {
    icon: () => '🗑️',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 3000,
    position: 'top-center',
  });
};

export const exceedAlert = () => {
  toast.warning('최대 2명까지 추가 가능합니다', {
    icon: () => '🚫',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 3000,
    position: 'top-center',
  });
};

export const overlapAlert = () => {
  toast.warning('회원은 중복해서 추가할 수 없습니다.', {
    icon: () => '🚫',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 3000,
    position: 'top-center',
  });
};

export const previewAlert = () => {
  toast.info('더블클릭으로 작성으로 돌아가기', {
    icon: () => '🖱️',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 3000,
    position: 'top-center',
  });
};
