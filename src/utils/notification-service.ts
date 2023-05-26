import { toast } from 'react-toastify';

interface NotificationProps {
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export const showNotification = ({ text, type }: NotificationProps) => {
  switch (type) {
    case 'success':
      toast.success(text);
      break;
    case 'warning':
      toast.warning(text);
      break;
    case 'error':
      toast.error(text);
      break;
    case 'info':
      toast.info(text);
      break;

    default:
      toast.info('default msg');
      break;
  }
};

// export default function showResponseError(error: any) {
//   if (error.data.message.length) {
//     error.data.message.forEach((error: any) => {
//       console.log(error);
//       // toast.error(error);
//     });
//   }
// };
