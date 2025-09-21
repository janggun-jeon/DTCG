import { deleteScenarios } from '@api/scenario';
import { Button } from '@components/common/Button/Button';
import { message } from '@utils/toast';
import { IoTrashOutline } from 'react-icons/io5';
import { useMutation } from '@tanstack/react-query';
import Spinner from '@components/common/Spinner/Spinner';

const DeleteButton = () => {
  const mutation = useMutation({
    mutationFn: deleteScenarios,
    onSuccess: () => {
      message('삭제가 완료되었습니다!');
    },
    onError: () => {
      message('오류가 발생했습니다.');
    },
  });
  const clickDeleteButton = async () => {
    mutation.mutate();
  };

  return (
    <>
      {mutation.isPending && <Spinner />}
      <Button
        icon={<IoTrashOutline />}
        color="red"
        className="w-[352px]"
        onClick={clickDeleteButton}
      >
        삭제하기
      </Button>
    </>
  );
};

export default DeleteButton;
