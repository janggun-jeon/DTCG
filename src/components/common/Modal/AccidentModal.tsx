import { useSetSelectedModalStore } from '@store/modal-type';
import { Button } from '../Button/Button';
import { Modal } from './Modal';
import { useCallback, useState } from 'react';
import { postAccidentData } from '@api/acryl';
import { useSetSelectedCaseStore } from '@store/selected-case';
import { matchingCaseWithResponse } from '@utils/element';
import { responseDataType } from '@type/element';
import { useSetLoadingStateStore } from '@store/loading';
import { message } from '@utils/toast';
import { Response } from '@tauri-apps/api/http';

const AccidentModal = () => {
  const setModal = useSetSelectedModalStore();
  const setSelectedCase = useSetSelectedCaseStore();
  const [accidentData, setAccidentData] = useState<string>('');
  const setIsLoading = useSetLoadingStateStore();

  const handleChangeData = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAccidentData(e.target.value);
    },
    [],
  );

  /**
   * @description 입력받은 사고 데이터를 acryl api를 통해 전송해 일치하는 케이스들을 리턴합니다.
   */
  const postAndMatchingData = async () => {
    setSelectedCase([]); // 선택된 케이스를 초기화합니다.
    setIsLoading(true);
    setModal('none');

    try {
      // postData 함수의 결과가 Promise이므로 await을 사용하여 결과를 기다립니다.
      const responseData = await postAccidentData(accidentData);
      const processedData = matchingCaseWithResponse(
        responseData as Response<responseDataType>,
      );
      setModal('none');
      setSelectedCase(processedData);
      setIsLoading(false);
      message('완료되었습니다!');
    } catch (e) {
      message('오류가 발생했습니다.');
    }
  };

  return (
    <Modal onClose={() => setModal('none')}>
      <div className="grid items-center gap-2 text-center">
        <span className="py-3 text-xl dark:text-white">
          아래 빈칸에 사고 데이터를 입력해주세요.
        </span>
        <textarea
          placeholder="여기에 입력하세요"
          value={accidentData}
          onChange={handleChangeData}
          className="resize-none w-[800px] min-h-[400px] border p-4 overflow-auto scrollbar-hide outline-none mb-5 rounded-md"
        ></textarea>
        <Button
          color="black"
          onClick={postAndMatchingData}
          className="py-3 text-lg font-semibold"
        >
          입력하기
        </Button>
      </div>
    </Modal>
  );
};

export default AccidentModal;
