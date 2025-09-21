import { Button } from '@components/common/Button/Button';
import { useSetSelectedModalStore } from '@store/modal-type';
import { useGetSelectedCaseStore } from '@store/selected-case';
import { useCallback } from 'react';
import { PiSelectionAllFill } from 'react-icons/pi';

const CreateSelectRandomButton = () => {
  const setModal = useSetSelectedModalStore();
  const selectedCase = useGetSelectedCaseStore();

  const handleOpenSelectModal = useCallback(() => {
    if (selectedCase.length === 0) {
      return setModal('알림');
    }
    setModal('선택');
  }, [selectedCase, setModal]);

  return (
    <Button
      color="black"
      className="w-1/2 h-10 font-semibold"
      icon={<PiSelectionAllFill />}
      onClick={handleOpenSelectModal}
    >
      선택 생성
    </Button>
  );
};

export default CreateSelectRandomButton;
