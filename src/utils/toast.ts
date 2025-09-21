import toast from 'react-hot-toast';

export const message = (text: string) => {
  toast(text, {
    duration: 1500,
    position: 'bottom-right',
    style: {
      width: 280,
      height: 160,
      fontSize: 18,
      fontWeight: 700,
    },
  });
};
