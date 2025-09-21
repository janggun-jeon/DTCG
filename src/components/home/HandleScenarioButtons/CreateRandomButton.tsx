import { Button } from '@components/common/Button/Button';
import { useSetSelectedModalStore } from '@store/modal-type';
import { useGetSelectedCaseStore } from '@store/selected-case';
import { useCallback } from 'react';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

const CreateRandomButton = () => {
  const setModal = useSetSelectedModalStore();
  const selectedCase = useGetSelectedCaseStore();

  const handleOpenModal = useCallback(() => {
    if (selectedCase.length === 0) {
      return setModal('알림');
    }
    setModal('랜덤');
  }, [selectedCase, setModal]);
  return (
    <Button
      color="black"
      className="w-1/2 h-10 font-semibold "
      icon={<GiPerspectiveDiceSixFacesRandom />}
      onClick={handleOpenModal}
    >
      일반 생성
    </Button>
  );
};

export default CreateRandomButton;
