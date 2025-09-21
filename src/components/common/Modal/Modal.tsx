import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps extends PropsWithChildren {
  onClose?: () => void;
}

export const Modal = ({ onClose, children }: ModalProps) => {
  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="px-8 py-4 overflow-y-scroll max-h-[85vh] bg-white border rounded-md shadow-md dark:bg-zinc-700 scrollbar-hide">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!,
  );
};
