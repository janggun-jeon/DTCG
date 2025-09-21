import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { createTestCases, parseTestCasesByLayer } from '@utils/element';
import { useGetSelectedCaseStore } from '@store/selected-case';
import { useSetSelectedModalStore } from '@store/modal-type';
import { useSetResultStore } from '@store/result';
import { ElementType } from '@type/element';
import Input from '../Input/Input';
import { useSetParsedDataStore } from '@store/parsedData';
import { useSetLoadingStateStore } from '@store/loading';
import { message } from '@utils/toast';
import { formatDate } from '@utils/date';

const SelectedRandomModal = () => {
  const [count, setCount] = useState(10000);
  const [description, setDescription] = useState(formatDate(new Date()));
  const setModal = useSetSelectedModalStore();
  const selectedCase = useGetSelectedCaseStore();
  const setResult = useSetResultStore();
  const setParsedData = useSetParsedDataStore();
  const setIsLoading = useSetLoadingStateStore();

  const empty = count === 0 || description === '';

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleRandomButtonClick = async (cases: ElementType[]) => {
    setIsLoading(true);
    setModal('none');
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 50),
    );
    const testCases = await createTestCases(cases, count, '선택', description);
    setResult(testCases);
    const parsedData = parseTestCasesByLayer(testCases, 'select');
    setParsedData(parsedData);
    setIsLoading(false);
    message('선택 생성이 완료되었습니다!');
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="pb-4 text-xl font-semibold ">랜덤 생성 개수 입력</h1>
          <span>생성할 시나리오의 개수와 설명을 입력해주세요.</span>
          <span>최대 50,000개까지 입력 가능</span>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            type="number"
            label="테스트 케이스 개수"
            value={count}
            onChange={handleCountChange}
          />
          <Input
            label="설명"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="테스트 케이스에 대한 설명을 작성해주세요"
          />
        </div>
        <Button
          color={`${empty ? 'disabled' : 'black'}`}
          onClick={() => handleRandomButtonClick(selectedCase)}
          disabled={empty}
        >
          생성하기
        </Button>
      </div>
    </Modal>
  );
};

export default SelectedRandomModal;
