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
